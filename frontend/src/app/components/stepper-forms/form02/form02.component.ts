import { Component, OnInit, DoCheck } from '@angular/core';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-form02',
  templateUrl: './form02.component.html',
  styleUrls: ['./form02.component.css']
})
export class Form02Component implements OnInit, DoCheck {

  motorcycles_name: string[];
  motorcycles: boolean[];
  scooters: boolean;

  constructor() {
    this.motorcycles = Array();
    this.motorcycles_name = Array(
      'Scooters',
      'City',
      'Rebels',
      'Urban_Sport',
      'Trabajo',
      'Doble_Proposito',
      'Adventure',
      'Quads'
    );

    this.motorcycles_name.forEach(element =>
      this.motorcycles.push(false)
    );

    this.scooters = true;
  }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
  }

  status(index: any){
    this.motorcycles[index] = !(this.motorcycles[index]);
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

  ngDoCheck(): void {
    for (let index = 0; index < this.motorcycles.length; index++) {
      this.update_style(this.motorcycles[index], "#"+this.motorcycles_name[index]);
    }
  }

}
