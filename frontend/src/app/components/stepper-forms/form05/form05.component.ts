import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-form05',
  templateUrl: './form05.component.html',
  styleUrls: ['./form05.component.css']
})

export class Form05Component implements OnInit, DoCheck {

  fuel_tank_threshold_max :number = 4;
  fuel_tank_threshold_min :number = 24;
  fuel_tank_min: number = 4;
  fuel_tank_max: number = 25;

  /* INICIO CONIGURACIÓN DEL SLIDER */
  autoTicks = false;
  disabled = false;
  invert = false;
  showTicks = false;
  step = 1;
  thumbLabel = true;
  value = 0;
  vertical = false;
  tickInterval = 1;
  max_slider_fuel_tank = 25;
  min_slider_fuel_tank = 4;
  /* FIN CONIGURACIÓN DEL SLIDER */


  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(form: any) {

  }

  getSliderTickInterval(): number | 'auto' {
    if (this.showTicks) {
      return this.autoTicks ? 'auto' : this.tickInterval;
    }
    return 0;
  }

  ngDoCheck(): void {
    this.fuel_tank_threshold_max = this.fuel_tank_min + 1;
    this.fuel_tank_threshold_min = this.fuel_tank_max -1;
  }

}
