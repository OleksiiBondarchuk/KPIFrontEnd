import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JFQuestionComponent } from './jfquestion/jfquestion.component';
import { CatManagerComponent } from './cat-manager/cat-manager.component';
import { StartPageComponent } from './start-page/start-page.component';

@NgModule({
  declarations: [JFQuestionComponent, CatManagerComponent, StartPageComponent],
  imports: [CommonModule],
  exports: [CatManagerComponent, JFQuestionComponent, StartPageComponent],
})
export class UserModule {}
