import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedViewEventComponent } from './detailed-view-event.component';

describe('DetailedViewEventComponent', () => {
  let component: DetailedViewEventComponent;
  let fixture: ComponentFixture<DetailedViewEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailedViewEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailedViewEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
