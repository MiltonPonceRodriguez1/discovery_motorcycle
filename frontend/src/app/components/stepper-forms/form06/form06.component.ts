import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form06',
  templateUrl: './form06.component.html',
  styleUrls: ['./form06.component.css']
})
export class Form06Component implements OnInit {

  test: string[] = Array('1', '2', '3', '4', '5', '6', '7');
  type_of_recommendation: string[] = Array('Coincidencia Cercana', 'Coincidencia Perfecta');
  testt: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

  random() {
    return Math.floor(Math.random() * this.type_of_recommendation.length);
  }

}
