import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupEventComponent } from './signup-event.component';

describe('SignupEventComponent', () => {
  let component: SignupEventComponent;
  let fixture: ComponentFixture<SignupEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
