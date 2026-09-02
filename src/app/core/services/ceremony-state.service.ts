import { Injectable, computed, effect, signal } from '@angular/core';
import { CEREMONY_STEPS, CeremonyStep, songById } from '../models/ceremony.model';

export type TeamStatus = 'ativo' | 'aguardando' | 'inativo';

const STORAGE_KEY = 'cerimonial-valter-thamara:v1';

interface PadrinhoTime {
  entrada: string;
  chegada: string;
}

interface PersistedState {
  currentIndex: number;
  padrinhosTimes: Record<string, PadrinhoTime>;
  completedStepIds: string[];
  markedParticipants: string[];
}

function loadPersisted(): Partial<PersistedState> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

@Injectable({ providedIn: 'root' })
export class CeremonyStateService {
  readonly steps = CEREMONY_STEPS;

  private readonly persisted = loadPersisted();

  private readonly currentIndexSig = signal<number>(
    this.persisted.currentIndex !== undefined && this.persisted.currentIndex < this.steps.length
      ? this.persisted.currentIndex
      : 0,
  );
  private readonly runningSig = signal<boolean>(false);
  private readonly elapsedSecondsSig = signal<number>(0);
  private timerHandle: ReturnType<typeof setInterval> | null = null;

  private readonly phaseIndexSig = signal<number>(0);

  readonly padrinhosTimes = signal<Record<string, PadrinhoTime>>(this.persisted.padrinhosTimes ?? {});
  readonly completedStepIds = signal<Set<string>>(new Set(this.persisted.completedStepIds ?? []));
  readonly markedParticipants = signal<Set<string>>(new Set(this.persisted.markedParticipants ?? []));

  constructor() {
    effect(() => {
      const snapshot: PersistedState = {
        currentIndex: this.currentIndexSig(),
        padrinhosTimes: this.padrinhosTimes(),
        completedStepIds: [...this.completedStepIds()],
        markedParticipants: [...this.markedParticipants()],
      };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(snapshot));
      } catch {
        // armazenamento indisponível — segue sem persistir
      }
    });

    effect(() => {
      this.currentIndexSig();
      this.phaseIndexSig.set(0);
    });
  }

  setPadrinhoTime(name: string, key: 'entrada' | 'chegada', value: string): void {
    this.padrinhosTimes.update((map) => {
      const current: PadrinhoTime = map[name] ?? { entrada: '', chegada: '' };
      const updated: PadrinhoTime = { ...current, [key]: value };
      return { ...map, [name]: updated };
    });
  }

  getPadrinhoTime(name: string, key: 'entrada' | 'chegada'): string {
    return this.padrinhosTimes()[name]?.[key] ?? '';
  }

  toggleStepCompleted(stepId: string): void {
    this.completedStepIds.update((set) => {
      const next = new Set(set);
      next.has(stepId) ? next.delete(stepId) : next.add(stepId);
      return next;
    });
  }

  isStepCompleted(stepId: string): boolean {
    return this.completedStepIds().has(stepId);
  }

  toggleParticipant(stepId: string, name: string): void {
    const key = `${stepId}::${name}`;
    this.markedParticipants.update((set) => {
      const next = new Set(set);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  }

  isParticipantMarked(stepId: string, name: string): boolean {
    return this.markedParticipants().has(`${stepId}::${name}`);
  }

  /**
   * Marca/desmarca uma etapa como feita e sincroniza a posição da cerimônia com o que foi ticado —
   * assim Ao Vivo, Músicos e Cerimonialista andam juntos a partir de uma única fonte de verdade.
   */
  setStepCompletedAndSync(stepId: string, done: boolean): void {
    const index = this.steps.findIndex((s) => s.id === stepId);
    if (index < 0) return;

    this.completedStepIds.update((set) => {
      const next = new Set(set);
      done ? next.add(stepId) : next.delete(stepId);
      return next;
    });

    if (done) {
      const nextIndex = Math.min(index + 1, this.steps.length - 1);
      this.currentIndexSig.set(nextIndex);
    } else {
      this.currentIndexSig.set(index);
    }
    this.resetTimer();
  }

  readonly currentIndex = this.currentIndexSig.asReadonly();
  readonly running = this.runningSig.asReadonly();
  readonly elapsedSeconds = this.elapsedSecondsSig.asReadonly();
  readonly phaseIndex = this.phaseIndexSig.asReadonly();

  readonly currentStep = computed<CeremonyStep>(() => this.steps[this.currentIndexSig()]);
  readonly nextStep = computed<CeremonyStep | undefined>(() => this.steps[this.currentIndexSig() + 1]);

  readonly currentPhase = computed(() => {
    const step = this.currentStep();
    return step.phases?.[this.phaseIndexSig()];
  });

  readonly hasNextPhase = computed(() => {
    const step = this.currentStep();
    return !!step.phases && this.phaseIndexSig() < step.phases.length - 1;
  });

  readonly currentSong = computed(() => {
    const step = this.currentStep();
    const phase = this.currentPhase();
    const songId = phase?.songId ?? step.songId;
    return songId ? songById(songId) : undefined;
  });

  readonly nextSong = computed(() => {
    if (this.hasNextPhase()) {
      const step = this.currentStep();
      const nextPhaseSongId = step.phases?.[this.phaseIndexSig() + 1]?.songId;
      return nextPhaseSongId ? songById(nextPhaseSongId) : undefined;
    }
    const step = this.nextStep();
    return step?.songId ? songById(step.songId) : undefined;
  });

  nextPhaseAction(): void {
    if (this.hasNextPhase()) {
      this.phaseIndexSig.update((i) => i + 1);
      this.resetTimer();
    }
  }

  readonly progress = computed(() => ((this.currentIndexSig() + 1) / this.steps.length) * 100);

  readonly davidStatus = computed<TeamStatus>(() => {
    const id = this.currentStep().id;
    return id === 'step-12' ? 'ativo' : id === 'step-11' ? 'aguardando' : 'inativo';
  });

  readonly fabiaStatus = computed<TeamStatus>(() => {
    const song = this.currentSong();
    if (!song) return 'inativo';
    return song.instrumentation.includes('Fabiana') ? 'ativo' : 'inativo';
  });

  goToStep(index: number): void {
    if (index < 0 || index >= this.steps.length) return;
    this.currentIndexSig.set(index);
    this.resetTimer();
  }

  nextStepAction(): void {
    if (this.currentIndexSig() < this.steps.length - 1) {
      this.currentIndexSig.update((i) => i + 1);
      this.resetTimer();
    }
  }

  /** Avança a fase da etapa atual (se houver mais de uma música em sequência); só passa pra próxima etapa quando não há mais fases. */
  advance(): void {
    if (this.hasNextPhase()) {
      this.nextPhaseAction();
    } else {
      this.nextStepAction();
    }
  }

  previousStepAction(): void {
    if (this.currentIndexSig() > 0) {
      this.currentIndexSig.update((i) => i - 1);
      this.resetTimer();
    }
  }

  start(): void {
    if (this.timerHandle) return;
    this.runningSig.set(true);
    this.timerHandle = setInterval(() => this.elapsedSecondsSig.update((s) => s + 1), 1000);
  }

  cut(): void {
    this.runningSig.set(false);
    if (this.timerHandle) {
      clearInterval(this.timerHandle);
      this.timerHandle = null;
    }
  }

  resetTimer(): void {
    this.cut();
    this.elapsedSecondsSig.set(0);
  }
}
