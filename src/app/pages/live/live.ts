import { Component, OnDestroy, OnInit, ViewChild, effect, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CeremonyStateService } from '../../core/services/ceremony-state.service';
import { WakeLockService } from '../../core/services/wake-lock.service';
import { TeamIndicator } from '../../shared/components/team-indicator/team-indicator';
import { Countdown } from '../../shared/components/countdown/countdown';
import { HoldButton } from '../../shared/components/hold-button/hold-button';
import { YoutubePlayer } from '../../shared/components/youtube-player/youtube-player';

@Component({
  selector: 'app-live',
  imports: [MatButtonModule, MatIconModule, TeamIndicator, Countdown, HoldButton, YoutubePlayer],
  templateUrl: './live.html',
  styleUrl: './live.scss',
})
export class Live implements OnInit, OnDestroy {
  protected readonly state = inject(CeremonyStateService);
  private readonly wakeLock = inject(WakeLockService);

  @ViewChild(YoutubePlayer) player?: YoutubePlayer;
  private loadedSongId: string | null = null;

  constructor() {
    effect(() => {
      this.state.currentIndex();
      document.querySelector('mat-sidenav-content')?.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  ngOnInit(): void {
    this.wakeLock.request();
  }

  ngOnDestroy(): void {
    this.wakeLock.release();
  }

  startMusic(): void {
    const song = this.state.currentSong();
    this.state.start();
    if (song) {
      if (this.player?.isLoaded && this.loadedSongId === song.id) {
        this.player.resume();
      } else {
        this.player?.playUrl(song.youtubeUrl);
        this.loadedSongId = song.id;
      }
    }
  }

  cutMusic(): void {
    this.state.cut();
    this.player?.pause();
  }

  formatElapsed(seconds: number): string {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  }
}
