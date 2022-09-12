import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentToEventComponent } from './comment-to-event.component';

describe('CommentToEventComponent', () => {
  let component: CommentToEventComponent;
  let fixture: ComponentFixture<CommentToEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentToEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentToEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
