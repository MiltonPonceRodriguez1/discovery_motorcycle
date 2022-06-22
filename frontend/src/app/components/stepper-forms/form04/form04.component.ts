import { Component, OnInit, DoCheck } from '@angular/core';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-form04',
  templateUrl: './form04.component.html',
  styleUrls: ['./form04.component.css']
})

export class Form04Component implements OnInit, DoCheck {
  public properties: boolean[];
  public properties_name: string[];
  public properties_name_span: string[];

  constructor() {
    this.properties = Array();
    this.properties_name = Array(
      'antitheft_alarm',
      'usb_port',
      'digital_board',
      'analog_board',
      'grill_with_backrest',
      'load_grill',
      'italian_exhaust',
      'dual_shotgun_exhaust',
      'low_center_of_gravity_exhaust',
      'brake_disc',
      'brake_drum',
      'trunk',
      'aluminum_rims',
      'retro_rims',
      'full_headlight_led',
      'halogen_headlight',
      'led_fog_lights',
      'off_road_tires',
      'inverted_front_suspension',
      'monoshock_suspension'
    );

    this.properties_name_span = Array(
      'Alarma Antirrobo',
      'Puerto USB',
      'Tablero Digital',
      'Tablero Analógico',
      'Parrilla Con Respaldo',
      'Parrilla de Carga',
      'Escape Italiano',
      'Escape Doble Tipo Shotgun',
      'Escape de Bajo Centro de Gravedad',
      'Freno de Disco',
      'Freno de Tambor',
      'Cajuela',
      'Rines de Aluminio',
      'Rines Retro',
      'Faro Full LED',
      'Faro de Halógeno',
      'Faros de Niebla LED',
      'Llantas Off Road',
      'Suspensión Delantera Invertida',
      'Suspensión Monoshock'
    );

    this.properties_name.forEach(element =>
      this.properties.push(false)
    );

  }

  ngOnInit(): void {
    console.log(this.properties_name.length);
    console.log(this.properties_name_span.length);
  }

  onSubmit(form: any) {

  }

  status(index: any){
    this.properties[index] = !(this.properties[index]);
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
    for (let index = 0; index < this.properties.length; index++) {
      this.update_style(this.properties[index], "#"+this.properties_name[index]);
    }
  }

}
