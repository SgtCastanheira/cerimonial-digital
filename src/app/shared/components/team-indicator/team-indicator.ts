import { Component, computed, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CeremonyStateService, TeamStatus } from '../../../core/services/ceremony-state.service';
import { TEAM } from '../../../core/models/ceremony.model';

interface TeamRow {
  id: string;
  name: string;
  role: string;
  status: TeamStatus;
  statusLabel: string;
}

@Component({
  selector: 'app-team-indicator',
  imports: [MatIconModule],
  templateUrl: './team-indicator.html',
  styleUrl: './team-indicator.scss',
})
export class TeamIndicator {
  private readonly state = inject(CeremonyStateService);

  readonly rows = computed<TeamRow[]>(() => {
    const david = this.state.davidStatus();
    const fabia = this.state.fabiaStatus();
    return TEAM.map((m) => {
      if (m.id === 'abner' || m.id === 'carol') {
        return { id: m.id, name: m.name, role: m.role, status: 'ativo' as TeamStatus, statusLabel: 'ATIVO' };
      }
      if (m.id === 'david') {
        const label = david === 'ativo' ? 'ATIVO' : david === 'aguardando' ? 'PREPARAR' : 'MARCHA NUPCIAL';
        return { id: m.id, name: m.name, role: m.role, status: david, statusLabel: label };
      }
      const label = fabia === 'ativo' ? 'ATIVO' : 'CONFORME MÚSICA';
      return { id: m.id, name: m.name, role: m.role, status: fabia, statusLabel: label };
    });
  });
}
