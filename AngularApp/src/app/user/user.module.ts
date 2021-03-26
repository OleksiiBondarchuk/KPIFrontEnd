import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JFQuestionComponent } from './jfquestion/jfquestion.component';
import { CatManagerComponent } from './cat-manager/cat-manager.component';
import { StartPageComponent } from './start-page/start-page.component';
import { ShowsComponent } from './shows/shows.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    JFQuestionComponent,
    CatManagerComponent,
    StartPageComponent,
    ShowsComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    CatManagerComponent,
    JFQuestionComponent,
    StartPageComponent,
    ShowsComponent,
  ],
})
export class UserModule {}
