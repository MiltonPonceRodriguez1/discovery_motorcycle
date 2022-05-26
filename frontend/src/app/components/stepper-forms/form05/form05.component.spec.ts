import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Form05Component } from './form05.component';

describe('Form05Component', () => {
  let component: Form05Component;
  let fixture: ComponentFixture<Form05Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Form05Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Form05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
