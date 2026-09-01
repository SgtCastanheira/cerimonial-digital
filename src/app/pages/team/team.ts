import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { StaffMember, VENUE_STAFF } from '../../core/models/ceremony.model';

@Component({
  selector: 'app-team',
  imports: [MatIconModule],
  templateUrl: './team.html',
  styleUrl: './team.scss',
})
export class Team {
  protected readonly leaders: StaffMember[] = VENUE_STAFF.filter((m) => !m.reportsToId);

  protected subordinatesOf(leaderId: string): StaffMember[] {
    return VENUE_STAFF.filter((m) => m.reportsToId === leaderId);
  }

  protected waLink(phone: string): string {
    return `https://wa.me/${phone}`;
  }
}
