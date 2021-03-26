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
  newShow: Show = new Show();

  constructor(private showsService: ShowsService) {}

  ngOnInit() {
    this.showsService.getAllShows().subscribe((response: Show[]) => {
      this.shows = response;
    });
  }
  onSaveClick() {
    this.showsService.insertShow(this.newShow).subscribe(
      (response) => {
        //Add Project to Grid
        var p: Show = new Show();
        p.showID = response.showID;
        p.showName = response.showName;
        p.dateOfStart = response.dateOfStart;
        p.partisipantsCount = response.partisipantsCount;
        this.shows.push(p);

        //Clear New Project Dialog - TextBoxes
        this.newShow.showID = null;
        this.newShow.showName = null;
        this.newShow.dateOfStart = null;
        this.newShow.partisipantsCount = null;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
