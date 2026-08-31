import { Component, ElementRef, effect, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { CEREMONY_STEPS, songById } from '../../core/models/ceremony.model';
import { CeremonyStateService } from '../../core/services/ceremony-state.service';

@Component({
  selector: 'app-officiant',
  imports: [MatIconModule, MatCheckboxModule, MatExpansionModule],
  templateUrl: './officiant.html',
  styleUrl: './officiant.scss',
})
export class Officiant {
  protected readonly state = inject(CeremonyStateService);
  protected readonly steps = CEREMONY_STEPS;
  protected readonly songById = songById;

  constructor(private readonly el: ElementRef<HTMLElement>) {
    effect(() => {
      const id = this.state.currentStep().id;
      queueMicrotask(() => {
        this.el.nativeElement.querySelector(`#officiant-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }
}
