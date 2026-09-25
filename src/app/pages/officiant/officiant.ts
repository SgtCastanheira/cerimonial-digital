import { Component, ElementRef, effect, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { CEREMONY_STEPS, CeremonyStep, STEP_GROUPS, songById } from '../../core/models/ceremony.model';
import { CeremonyStateService } from '../../core/services/ceremony-state.service';

interface StepGroupView {
  id: string;
  title: string;
  steps: CeremonyStep[];
}

@Component({
  selector: 'app-officiant',
  imports: [MatIconModule, MatCheckboxModule, MatExpansionModule],
  templateUrl: './officiant.html',
  styleUrl: './officiant.scss',
})
export class Officiant {
  protected readonly state = inject(CeremonyStateService);
  protected readonly songById = songById;

  protected readonly groups: StepGroupView[] = STEP_GROUPS.map((group) => ({
    id: group.id,
    title: group.title,
    steps: group.stepIds.map((stepId) => CEREMONY_STEPS.find((s) => s.id === stepId)!),
  }));

  constructor(private readonly el: ElementRef<HTMLElement>) {
    effect(() => {
      const id = this.state.currentStep().id;
      queueMicrotask(() => {
        this.el.nativeElement.querySelector(`#officiant-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  protected isCurrentGroup(group: StepGroupView): boolean {
    return group.steps.some((s) => s.id === this.state.currentStep().id);
  }
}
