import { Component, ElementRef, Input, OnDestroy, ViewChild, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { extractYoutubeId } from '../../../core/services/youtube.util';

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

let apiLoadPromise: Promise<void> | null = null;

function loadYoutubeApi(): Promise<void> {
  if (apiLoadPromise) return apiLoadPromise;
  apiLoadPromise = new Promise((resolve) => {
    if (window.YT && window.YT.Player) {
      resolve();
      return;
    }
    const prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      prev?.();
      resolve();
    };
    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    document.head.appendChild(script);
  });
  return apiLoadPromise;
}

@Component({
  selector: 'app-youtube-player',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './youtube-player.html',
  styleUrl: './youtube-player.scss',
})
export class YoutubePlayer implements OnDestroy {
  @Input({ required: true }) url = '';
  @Input() title = '';
  @Input() showIdleControls = true;

  @ViewChild('mount') mount?: ElementRef<HTMLDivElement>;

  protected readonly state = signal<'idle' | 'loading' | 'playing' | 'blocked'>('idle');
  private player: any;

  get videoId(): string | null {
    return extractYoutubeId(this.url);
  }

  async play(): Promise<void> {
    return this.playUrl(this.url);
  }

  async playUrl(url: string): Promise<void> {
    this.url = url;
    const id = this.videoId;
    if (!id) {
      this.state.set('blocked');
      return;
    }

    if (this.player?.loadVideoById) {
      this.state.set('playing');
      this.player.loadVideoById(id);
      return;
    }

    this.state.set('loading');
    await loadYoutubeApi();
    setTimeout(() => {
      if (!this.mount) return;
      this.player = new window.YT.Player(this.mount.nativeElement, {
        videoId: id,
        playerVars: { rel: 0, autoplay: 1 },
        events: {
          onReady: () => this.state.set('playing'),
          onError: () => this.state.set('blocked'),
        },
      });
    });
  }

  openInYoutube(): void {
    window.open(this.url, '_blank', 'noopener');
  }

  pause(): void {
    this.player?.pauseVideo?.();
  }

  resume(): void {
    this.player?.playVideo?.();
  }

  get isLoaded(): boolean {
    return !!this.player;
  }

  ngOnDestroy(): void {
    this.player?.destroy?.();
  }
}
