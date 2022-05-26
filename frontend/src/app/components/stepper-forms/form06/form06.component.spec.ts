import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Form06Component } from './form06.component';

describe('Form06Component', () => {
  let component: Form06Component;
  let fixture: ComponentFixture<Form06Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Form06Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Form06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
