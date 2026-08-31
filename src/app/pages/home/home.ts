import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';

interface MenuTile {
  path: string;
  icon: string;
  label: string;
}

@Component({
  selector: 'app-home',
  imports: [RouterLink, MatIconModule, MatRippleModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly tiles: MenuTile[] = [
    { path: '/cerimonialista', icon: 'record_voice_over', label: 'Cerimonialista' },
    { path: '/musicos', icon: 'piano', label: 'Músicos' },
    { path: '/roteiro', icon: 'menu_book', label: 'Roteiro completo' },
  ];
}
