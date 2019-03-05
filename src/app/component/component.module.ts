import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MetarialModule } from '../metarial/metarial.module';

import { ComponentRoutingModule } from './component-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LocationComponent } from './location/location.component';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    SignupComponent,
    LocationComponent
  ],
  imports: [
    CommonModule,
    ComponentRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    MetarialModule
  ]
})
export class ComponentModule { }
