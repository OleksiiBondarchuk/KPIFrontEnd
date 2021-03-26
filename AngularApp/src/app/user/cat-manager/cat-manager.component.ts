import { Component, OnInit } from '@angular/core';
import { CatManagerService } from '../../cat-manager.service';

@Component({
  selector: 'app-cat-manager',
  templateUrl: './cat-manager.component.html',
  styleUrls: ['./cat-manager.component.scss'],
})
export class CatManagerComponent implements OnInit {
  UserRole: string;
  Username: string;
  NoOfSavedCats: number;
  TotalCatBalance: number;
  PendingTasks: number;
  Rating: number;
  ShowCost: number;
  CurrentPrize: number;
  AvailableFunds: number;
  ToDay: Date;

  Groups: string[];
  Shows: string[];
  Years: number[] = [];
  TeamMembersSummary = [];
  TeamMembers = [];
  constructor(private catManagerService: CatManagerService) {
    this.UserRole = 'Зареєстрований юзер';
    this.Username = 'Коля Володацький';
    this.NoOfSavedCats = 67;
    this.TotalCatBalance = 240;
    this.PendingTasks = 15;
    this.Rating = 0.2;
    this.ShowCost = 2113507;
    this.CurrentPrize = 96788;
    this.AvailableFunds = 52536;
    this.ToDay = new Date();

    this.Groups = ['За котів', 'Веселі коти', 'Барсуки'];

    this.Shows = ['Show A', 'Show B', 'Show C', 'Show D'];

    for (var i = 2019; i >= 2010; i--) {
      this.Years.push(i);
    }

    this.TeamMembersSummary = this.catManagerService.getTeamMembersSummary();

    this.TeamMembers = [
      {
        Region: 'За котів',
        Members: [
          { ID: 1, Name: 'Катя', Status: 'Available' },
          { ID: 2, Name: 'Михайло', Status: 'Available' },
          { ID: 3, Name: 'Женя', Status: 'Busy' },
          { ID: 4, Name: 'Гліб', Status: 'Busy' },
        ],
      },
      {
        Region: 'Веселі коти',
        Members: [
          { ID: 5, Name: 'Стас', Status: 'Available' },
          { ID: 6, Name: 'Карл', Status: 'Available' },
          { ID: 7, Name: 'Віка', Status: 'Busy' },
          { ID: 8, Name: 'Стефан', Status: 'Busy' },
        ],
      },
      {
        Region: 'Барсуки',
        Members: [
          { ID: 9, Name: 'Костя', Status: 'Available' },
          { ID: 10, Name: 'Ніка', Status: 'Available' },
          { ID: 11, Name: 'Антон', Status: 'Busy' },
          { ID: 12, Name: 'Володимир', Status: 'Busy' },
        ],
      },
      {
        Region: 'Зебри',
        Members: [
          { ID: 13, Name: 'Женя', Status: 'Available' },
          { ID: 14, Name: 'Август', Status: 'Available' },
          { ID: 15, Name: 'Саня', Status: 'Busy' },
          { ID: 16, Name: 'Інокентій', Status: 'Busy' },
        ],
      },
    ];
  }

  onProjectChange($event) {
    if ($event.target.innerHTML == 'Show A') {
      this.ShowCost = 2113507;
      this.CurrentPrize = 96788;
      this.AvailableFunds = 52436;
    } else if ($event.target.innerHTML == 'Show B') {
      this.ShowCost = 88923;
      this.CurrentPrize = 22450;
      this.AvailableFunds = 2640;
    } else if ($event.target.innerHTML == 'Show C') {
      this.ShowCost = 662183;
      this.CurrentPrize = 7721;
      this.AvailableFunds = 9811;
    } else if ($event.target.innerHTML == 'Show D') {
      this.ShowCost = 928431;
      this.CurrentPrize = 562;
      this.AvailableFunds = 883;
    }
  }
  ngOnInit(): void {}
}
