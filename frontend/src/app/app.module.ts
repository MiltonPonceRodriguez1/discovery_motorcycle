import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* INICIO DE DEPENDENCIAS MATERIAL */
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from "@angular/material/button";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatRadioModule } from "@angular/material/radio";
import { MatDividerModule } from "@angular/material/divider";
/* FIN DE DEPENDENCIAS MATERIAL */

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StepperComponent } from './components/stepper/stepper.component';
import { TestComponent } from './components/test/test.component';
import { Form01Component } from './components/stepper-forms/form01/form01.component';
import { Form02Component } from './components/stepper-forms/form02/form02.component';
import { Form03Component } from './components/stepper-forms/form03/form03.component';
import { Form04Component } from './components/stepper-forms/form04/form04.component';
import { Form05Component } from './components/stepper-forms/form05/form05.component';
import { Form06Component } from './components/stepper-forms/form06/form06.component';
import { Form07Component } from './components/stepper-forms/form07/form07.component';

@NgModule({
  declarations: [
    AppComponent,
    StepperComponent,
    TestComponent,
    Form01Component,
    Form02Component,
    Form03Component,
    Form04Component,
    Form05Component,
    Form06Component,
    Form07Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    MatStepperModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatCheckboxModule,
    MatGridListModule,
    MatRadioModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
