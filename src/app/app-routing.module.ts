import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EventListComponent} from "./event-list/event-list.component";
import {LoginComponent} from "./login/login.component";
import {EventSearchComponent} from "./event-search/event-search.component";
import {HomeComponent} from "./home/home.component";
import {DetailedViewEventComponent} from "./detailed-view-event/detailed-view-event.component";



const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'event-list', component: EventListComponent},
  {path: 'viewevent', component: DetailedViewEventComponent},
  {path: 'login', component: LoginComponent},
  {path: 'search', component: EventSearchComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
