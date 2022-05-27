import { Component, OnInit } from '@angular/core';
import {FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-form01',
  templateUrl: './form01.component.html',
  styleUrls: ['./form01.component.css']
})
export class Form01Component implements OnInit {
  nombre: string;
  budget: string;
  min: number;
  max: number;

  autoTicks = false;
  disabled = false;
  invert = false;
  showTicks = false;
  step = 200;
  thumbLabel = true;
  value = 0;
  vertical = false;
  tickInterval = 1;
  max_slider = 100000;
  min_slider = 15000;



  constructor() {
    this.nombre = '';
    this.budget = 'cash';
    this.min = 15000;
    this.max = 70000;
   }

  ngOnInit(): void {
  }

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

    console.log(this.value);

    return value;
  }

  test(){
    console.log(this.nombre);
    console.log(this.budget);
    console.log(this.min);
    console.log(this.max);
  }

  onSubmit(form: any) {
    console.log(this.nombre)
  }

}
