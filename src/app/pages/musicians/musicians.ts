import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { SongCatalog } from '../../shared/components/song-catalog/song-catalog';
import { FabiSongbook } from '../../shared/components/fabi-songbook/fabi-songbook';

@Component({
  selector: 'app-musicians',
  imports: [MatTabsModule, SongCatalog, FabiSongbook],
  templateUrl: './musicians.html',
  styleUrl: './musicians.scss',
})
export class Musicians {}
