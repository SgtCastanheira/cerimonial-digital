import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

interface NavItem {
  path: string;
  icon: string;
  label: string;
}

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly menuOpen = signal(false);

  protected readonly navItems: NavItem[] = [
    { path: '/', icon: 'favorite', label: 'Início' },
    { path: '/ao-vivo', icon: 'play_circle', label: 'Cerimônia ao vivo' },
    { path: '/cerimonialista', icon: 'record_voice_over', label: 'Cerimonialista' },
    { path: '/musicos', icon: 'piano', label: 'Músicos' },
    { path: '/roteiro', icon: 'menu_book', label: 'Roteiro completo' },
  ];

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
