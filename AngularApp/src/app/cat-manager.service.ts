import { Injectable } from '@angular/core';

@Injectable()
export class CatManagerService {
  getTeamMembersSummary(): any[] {
    var TeamMembersSummary = [
      {
        Region: 'За котів',
        TeamMembersCount: 20,
        TemporarilyUnavailableMembers: 4,
      },
      {
        Region: 'Веселі коти',
        TeamMembersCount: 15,
        TemporarilyUnavailableMembers: 8,
      },
      {
        Region: 'Барсуки',
        TeamMembersCount: 17,
        TemporarilyUnavailableMembers: 1,
      },
      {
        Region: 'Зебри',
        TeamMembersCount: 15,
        TemporarilyUnavailableMembers: 6,
      },
    ];
    return TeamMembersSummary;
  }
}
