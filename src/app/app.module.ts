import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { EventListComponent } from './event-list/event-list.component';
import { EventSearchComponent } from './event-search/event-search.component';
import { DetailedViewEventComponent } from './detailed-view-event/detailed-view-event.component';
import { CommentToEventComponent } from './comment-to-event/comment-to-event.component';
import { SignupEventComponent } from './signup-event/signup-event.component';
import{HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MatListModule} from '@angular/material/list';
import {RouterModule, Routes} from "@angular/router";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import {MatSelectModule} from "@angular/material/select";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EventListComponent,
    EventSearchComponent,
    DetailedViewEventComponent,
    CommentToEventComponent,
    SignupEventComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatFormFieldModule,
    MatCardModule,
    MatListModule,
    MatSelectModule,
    RouterModule

  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
