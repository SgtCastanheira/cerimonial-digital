import { Component, ElementRef, effect, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { CEREMONY_STEPS, SONGS, TODOS_PADRINHOS } from '../../../core/models/ceremony.model';
import { YoutubePlayer } from '../youtube-player/youtube-player';
import { CeremonyStateService } from '../../../core/services/ceremony-state.service';

interface StepSongInfo {
  stepId: string;
  stepTitle: string;
  participants?: string;
  participantsList?: string[];
}

function buildStepBySongId(): Record<string, StepSongInfo> {
  const map: Record<string, StepSongInfo> = {};
  for (const step of CEREMONY_STEPS) {
    if (step.songId) {
      map[step.songId] = { stepId: step.id, stepTitle: step.title, participants: step.participants, participantsList: step.participantsList };
    }
    for (const phase of step.phases ?? []) {
      map[phase.songId] = { stepId: step.id, stepTitle: step.title, participants: step.participants, participantsList: step.participantsList };
    }
  }
  return map;
}

@Component({
  selector: 'app-song-catalog',
  imports: [MatExpansionModule, FormsModule, YoutubePlayer],
  templateUrl: './song-catalog.html',
  styleUrl: './song-catalog.scss',
})
export class SongCatalog {
  protected readonly songs = SONGS;
  protected readonly padrinhosNames = TODOS_PADRINHOS.map((c) => c.name);
  protected readonly state = inject(CeremonyStateService);
  protected readonly stepBySongId = buildStepBySongId();

  constructor(private readonly el: ElementRef<HTMLElement>) {
    effect(() => {
      const id = this.state.currentSong()?.id;
      if (!id) return;
      queueMicrotask(() => {
        this.el.nativeElement.querySelector(`#song-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }
}
