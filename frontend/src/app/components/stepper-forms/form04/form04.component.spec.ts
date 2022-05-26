import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Form04Component } from './form04.component';

describe('Form04Component', () => {
  let component: Form04Component;
  let fixture: ComponentFixture<Form04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Form04Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Form04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
