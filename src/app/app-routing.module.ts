import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { LogComponent } from './log/log.component';
import { MapsComponent } from './maps/maps.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "maps", component: MapsComponent},
  { path: "log", component: LogComponent },
  { path: "events", component: EventsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
