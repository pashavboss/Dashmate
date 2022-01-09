import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularEmojisModule } from 'angular-emojis';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainInfoPageComponent } from './main-info-page/main-info-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainInfoPageComponent
  ],
  imports: [
    AngularEmojisModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
