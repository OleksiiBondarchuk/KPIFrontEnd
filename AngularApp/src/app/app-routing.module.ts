import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatManagerComponent } from './cat-manager/cat-manager.component';
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
  {
    path: 'catManager',
    component: CatManagerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
