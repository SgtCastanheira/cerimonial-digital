import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { StaffMember, VENUE_STAFF } from '../../core/models/ceremony.model';

interface StaffTeam {
  leader: StaffMember;
  members: StaffMember[];
  displayMembers: StaffMember[];
  headcount: number;
}

@Component({
  selector: 'app-team',
  imports: [MatIconModule, MatExpansionModule],
  templateUrl: './team.html',
  styleUrl: './team.scss',
})
export class Team {
  protected readonly teams: StaffTeam[] = VENUE_STAFF.filter((m) => !m.reportsToId).map((leader) => {
    const members = VENUE_STAFF.filter((m) => m.reportsToId === leader.id);
    const displayMembers = leader.noChief ? [leader, ...members] : members;
    return { leader, members, displayMembers, headcount: members.length + 1 };
  });

  protected panelTitle(team: StaffTeam): string {
    if (team.leader.noChief) {
      return team.leader.teamName || team.leader.role;
    }
    return `${team.leader.teamName || team.leader.role} - Chefe ${team.leader.name}`;
  }

  protected waLink(phone: string): string {
    return `https://wa.me/${phone}`;
  }
}
