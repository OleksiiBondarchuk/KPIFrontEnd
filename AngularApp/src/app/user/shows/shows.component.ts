import { Component, OnInit } from '@angular/core';
import { ShowsService } from '../../shows.service';
import { Show } from 'src/app/show';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss'],
})
export class ShowsComponent implements OnInit {
  shows: Show[];

  constructor(private showsService: ShowsService) {}

  ngOnInit() {
    this.showsService.getAllShows().subscribe((response: Show[]) => {
      this.shows = response;
    });
  }
}
