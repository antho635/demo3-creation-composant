import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EnTeteComponent } from './en-tete/en-tete.component';
import { AppComponent } from './app.component';
import { PiedDePageComponent } from './pied-de-page/pied-de-page.component';


@NgModule({
  declarations: [
    AppComponent,
    PiedDePageComponent,
    EnTeteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
