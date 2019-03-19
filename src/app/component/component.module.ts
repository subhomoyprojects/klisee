import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MetarialModule } from '../metarial/metarial.module';

import { ComponentRoutingModule } from './component-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { FlooringComponent } from './flooring/flooring.component';
import { OtherServicesComponent } from './other-services/other-services.component';
import { LocationComponent } from './location/location.component';
import { WorkTypeComponent } from './work-type/work-type.component';
import { YourRoomComponent } from './your-room/your-room.component';
import { MaterialCostComponent } from './material-cost/material-cost.component';
import { BudgetCalculationComponent } from './budget-calculation/budget-calculation.component';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    FlooringComponent,
    OtherServicesComponent,
    LocationComponent,
    WorkTypeComponent,
    YourRoomComponent,
    MaterialCostComponent,
    BudgetCalculationComponent
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
