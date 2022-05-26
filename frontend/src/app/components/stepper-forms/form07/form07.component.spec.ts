import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Form07Component } from './form07.component';

describe('Form07Component', () => {
  let component: Form07Component;
  let fixture: ComponentFixture<Form07Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Form07Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Form07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
