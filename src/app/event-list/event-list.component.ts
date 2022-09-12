import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  #title = 'mouse-hover';
  events = ['Xmas Eva', 'New year movies','Summer party']

  constructor() { }

  ngOnInit(): void {
  }

}
