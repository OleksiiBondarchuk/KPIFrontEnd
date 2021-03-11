import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JFQuestionComponent } from './jfquestion/jfquestion.component';
import { StartPageComponent } from './start-page/start-page.component';

const routes: Routes = [
  {
    path: 'jfquestion',
    component: JFQuestionComponent,
  },
  {
    path: 'startPage',
    component: StartPageComponent,
  },
  {
    path: '',
    redirectTo: 'startPage',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
