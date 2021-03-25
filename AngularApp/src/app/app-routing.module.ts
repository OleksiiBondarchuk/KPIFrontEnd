import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatManagerComponent } from './user/cat-manager/cat-manager.component';
import { JFQuestionComponent } from './user/jfquestion/jfquestion.component';
import { StartPageComponent } from './user/start-page/start-page.component';
import { ShowsComponent } from './user/shows/shows.component';

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
  {
    path: 'catManager',
    component: CatManagerComponent,
  },
  {
    path: 'shows',
    component: ShowsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
