import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form02',
  templateUrl: './form02.component.html',
  styleUrls: ['./form02.component.css']
})
export class Form02Component implements OnInit {
  scooters: boolean;

  constructor() {
    this.scooters = false;
  }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    console.log("Next step");
  }

  test() {
    this.scooters = !(this.scooters);
    console.log(this.scooters);
  }

}
