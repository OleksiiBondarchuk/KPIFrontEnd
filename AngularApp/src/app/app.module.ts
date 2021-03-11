import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JFQuestionComponent } from './jfquestion/jfquestion.component';
import { StartPageComponent } from './start-page/start-page.component';
import { CatManagerComponent } from './cat-manager/cat-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    JFQuestionComponent,
    StartPageComponent,
    CatManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
