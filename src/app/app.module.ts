import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MapsComponent } from './maps/maps.component';
import { EventsComponent } from './events/events.component';
import { LogComponent } from './log/log.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MapsComponent,
    EventsComponent,
    LogComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
