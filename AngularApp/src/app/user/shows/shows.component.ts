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
  editShow: Show = new Show();
  editIndex: number = null;
  deleteShow: Show = new Show();
  deleteIndex: number = null;

  constructor(private showsService: ShowsService) {}

  ngOnInit() {
    this.showsService.getAllShows().subscribe((response: Show[]) => {
      this.shows = response;
    });
  }
  onSaveClick() {
    this.showsService.insertShow(this.newShow).subscribe(
      (response) => {
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
  onEditClick(event, index: number) {
    this.editShow.showID = this.shows[index].showID;
    this.editShow.showName = this.shows[index].showName;
    this.editShow.dateOfStart = this.shows[index].dateOfStart;
    this.editShow.partisipantsCount = this.shows[index].partisipantsCount;
    this.editIndex = index;
  }

  onUpdateClick() {
    this.showsService.updateProject(this.editShow).subscribe(
      (response: Show) => {
        var p: Show = new Show();
        p.showID = response.showID;
        p.showName = response.showName;
        p.dateOfStart = response.dateOfStart;
        p.partisipantsCount = response.partisipantsCount;
        this.shows[this.editIndex] = p;

        this.editShow.showID = null;
        this.editShow.showName = null;
        this.editShow.dateOfStart = null;
        this.editShow.partisipantsCount = null;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
