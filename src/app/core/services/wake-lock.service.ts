import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class WakeLockService {
  private sentinel: WakeLockSentinel | null = null;
  private wanted = false;
  private readonly onVisibilityChange = () => {
    if (this.wanted && document.visibilityState === 'visible') {
      this.acquire();
    }
  };

  async request(): Promise<void> {
    this.wanted = true;
    document.addEventListener('visibilitychange', this.onVisibilityChange);
    await this.acquire();
  }

  release(): void {
    this.wanted = false;
    document.removeEventListener('visibilitychange', this.onVisibilityChange);
    this.sentinel?.release().catch(() => undefined);
    this.sentinel = null;
  }

  private async acquire(): Promise<void> {
    if (!('wakeLock' in navigator) || this.sentinel) return;
    try {
      this.sentinel = await (navigator as Navigator & { wakeLock: WakeLock }).wakeLock.request('screen');
      this.sentinel.addEventListener('release', () => {
        this.sentinel = null;
      });
    } catch {
      // dispositivo não suporta ou permissão negada — segue sem bloquear a tela
    }
  }
}

interface WakeLockSentinel extends EventTarget {
  release(): Promise<void>;
}

interface WakeLock {
  request(type: 'screen'): Promise<WakeLockSentinel>;
}
