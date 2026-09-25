import { Component, ElementRef, Input, effect, inject } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { CEREMONY_STEPS, SONGS } from '../../../core/models/ceremony.model';
import { CeremonyStateService } from '../../../core/services/ceremony-state.service';

interface StepSongInfo {
  stepId: string;
  stepTitle: string;
  participants?: string;
}

function buildStepBySongId(): Record<string, StepSongInfo> {
  const map: Record<string, StepSongInfo> = {};
  for (const step of CEREMONY_STEPS) {
    if (step.songId && !map[step.songId]) {
      map[step.songId] = { stepId: step.id, stepTitle: step.title, participants: step.participants };
    }
    for (const phase of step.phases ?? []) {
      if (!map[phase.songId]) {
        map[phase.songId] = { stepId: step.id, stepTitle: step.title, participants: step.participants };
      }
    }
  }
  return map;
}

@Component({
  selector: 'app-fabi-songbook',
  imports: [MatExpansionModule],
  templateUrl: './fabi-songbook.html',
  styleUrl: './fabi-songbook.scss',
})
export class FabiSongbook {
  /** Quando definido, mostra só as músicas em que esse músico participa (busca no campo instrumentation). */
  @Input() musicianFilter?: string;

  protected readonly state = inject(CeremonyStateService);
  protected readonly stepBySongId = buildStepBySongId();

  protected get songs() {
    const sorted = [...SONGS].sort((a, b) => a.order - b.order);
    if (!this.musicianFilter) return sorted;
    return sorted.filter((s) => s.instrumentation.includes(this.musicianFilter!));
  }

  constructor(private readonly el: ElementRef<HTMLElement>) {
    effect(() => {
      const id = this.state.currentSong()?.id;
      if (!id) return;
      queueMicrotask(() => {
        this.el.nativeElement.querySelector(`#fabi-song-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }
}
