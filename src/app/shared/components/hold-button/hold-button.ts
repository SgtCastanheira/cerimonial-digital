import { Component, ElementRef, Input, output, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

const HOLD_MS = 500;

@Component({
  selector: 'app-hold-button',
  imports: [MatIconModule],
  templateUrl: './hold-button.html',
  styleUrl: './hold-button.scss',
  host: {
    '(pointerdown)': 'onPointerDown()',
    '(pointerup)': 'onPointerUp()',
    '(pointerleave)': 'onPointerUp()',
    '(pointercancel)': 'onPointerUp()',
    '(contextmenu)': '$event.preventDefault()',
  },
})
export class HoldButton {
  @Input() label = 'Próxima etapa';

  readonly confirmed = output<void>();

  protected readonly progress = signal(0);
  protected readonly holding = signal(false);
  private rafId: number | null = null;
  private startTime = 0;

  constructor(private readonly el: ElementRef<HTMLElement>) {}

  onPointerDown(): void {
    this.holding.set(true);
    this.startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - this.startTime;
      const pct = Math.min(100, (elapsed / HOLD_MS) * 100);
      this.progress.set(pct);
      if (pct >= 100) {
        this.holding.set(false);
        this.progress.set(0);
        this.confirmed.emit();
        return;
      }
      this.rafId = requestAnimationFrame(tick);
    };
    this.rafId = requestAnimationFrame(tick);
  }

  onPointerUp(): void {
    this.holding.set(false);
    this.progress.set(0);
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  }
}
