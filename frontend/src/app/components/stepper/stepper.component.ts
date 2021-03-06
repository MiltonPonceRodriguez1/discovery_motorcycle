import { Component, OnInit } from '@angular/core';
import {FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TooltipPosition} from '@angular/material/tooltip';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {
  value = 0;
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 70000;
  min = 15000;
  showTicks = false;
  step = 200;
  thumbLabel = true;
  vertical = false;
  tickInterval = 1;

  getSliderTickInterval(): number | 'auto' {
    if (this.showTicks) {
      return this.autoTicks ? 'auto' : this.tickInterval;
    }
    return 0;
  }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }
  /******************** */





  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);
  //isLinear = 'Enable linear mode';
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthdFormGroup: FormGroup;
  fiveFormGroup: FormGroup;
  sixFormGroup: FormGroup;

  constructor(
    private _formBuilder: FormBuilder
  ) {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
    this.fourthdFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
    this.fiveFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
    this.sixFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    !this.isLinear ? 'Enable linear mode' : 'Disable linear mode';
  }

}
