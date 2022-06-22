import { Component, OnInit, DoCheck } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-form03',
  templateUrl: './form03.component.html',
  styleUrls: ['./form03.component.css']
})
export class Form03Component implements OnInit, DoCheck {
  petrol: boolean;
  petrol_design: boolean;
  diesel: boolean;
  electric: boolean;
  hybrid: boolean;
  scooters: boolean;

  constructor(fb: FormBuilder) {
    this.petrol = false;
    this.petrol_design = false;
    this.diesel = false;
    this.electric = false;
    this.hybrid = false;
    this.scooters = false;

   }

  ngOnInit(): void {
  }

  onSubmit(form: any){

  }

  status(type: string) {
    if(type == 'petrol') {
      this.petrol = !(this.petrol);
    } else if(type == 'diesel') {
      this.diesel = !(this.diesel);
    } else if(type == 'electric') {
      this.electric = !(this.electric);
    } else {
      this.hybrid = !(this.hybrid);
    }
  }

  update_style (type: any, type_str: string) {
    if (type) {

      $(type_str).removeClass('check-false');
      $(type_str).addClass('check-true');
    } else {
      $(type_str).removeClass('check-true');
      $(type_str).addClass('check-false');
    }
  }

  ngDoCheck() {
    this.update_style(this.petrol, '#petrol');
    this.update_style(this.diesel, '#diesel');
    this.update_style(this.electric, '#electric');
    this.update_style(this.hybrid, '#hybrid');
  }

}
