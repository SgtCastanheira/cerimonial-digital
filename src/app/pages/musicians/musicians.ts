import { Component } from '@angular/core';
import { SongCatalog } from '../../shared/components/song-catalog/song-catalog';

@Component({
  selector: 'app-musicians',
  imports: [SongCatalog],
  templateUrl: './musicians.html',
  styleUrl: './musicians.scss',
})
export class Musicians {}
