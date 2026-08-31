import { Component, OnDestroy, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-countdown',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './countdown.html',
  styleUrl: './countdown.scss',
})
export class Countdown implements OnDestroy {
  protected readonly count = signal<number | null>(null);
  private handle: ReturnType<typeof setInterval> | null = null;

  start(): void {
    this.stop();
    this.count.set(10);
    this.handle = setInterval(() => {
      const c = this.count();
      if (c === null || c <= 1) {
        this.stop();
        return;
      }
      this.count.set(c - 1);
    }, 1000);
  }

  stop(): void {
    if (this.handle) {
      clearInterval(this.handle);
      this.handle = null;
    }
    this.count.set(null);
  }

  ngOnDestroy(): void {
    this.stop();
  }
}
