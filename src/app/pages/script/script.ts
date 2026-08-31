import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CEREMONY_STEPS, DURACAO_TOTAL_PREVISTA, songById } from '../../core/models/ceremony.model';
import { CeremonyStateService } from '../../core/services/ceremony-state.service';

@Component({
  selector: 'app-script',
  imports: [MatButtonModule, MatIconModule, MatCheckboxModule],
  templateUrl: './script.html',
  styleUrl: './script.scss',
})
export class Script {
  protected readonly steps = CEREMONY_STEPS;
  protected readonly duracaoTotal = DURACAO_TOTAL_PREVISTA;
  protected readonly songById = songById;
  protected readonly state = inject(CeremonyStateService);

  print(): void {
    window.print();
  }
}
