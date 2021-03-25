import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatManagerService } from './cat-manager.service';
import { UserModule } from './user/user.module';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, UserModule],
  providers: [CatManagerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
