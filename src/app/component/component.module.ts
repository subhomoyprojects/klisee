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
import { ServiceHeadingComponent } from './service-heading/service-heading.component';
import { BudgetAssumptionComponent } from './budget-assumption/budget-assumption.component';
import { StandardMaterialCostComponent } from './standard-material-cost/standard-material-cost.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { ModalComponent } from './budget-calculation/budget-calculation.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { CountertopsComponent } from './countertops/countertops/countertops.component';
import { CountertopDetailsComponent } from './countertops/countertop-details/countertop-details.component';
import { FloorplanComponent } from './countertops/floorplan/floorplan.component';
import { PeninsulaMeasureComponent } from './countertops/peninsula-measure/peninsula-measure.component';
import { CounterLocationComponent } from './countertops/counter-location/counter-location.component';
import { CountertopsBudgetComponent } from './countertops/countertops-budget/countertops-budget.component';
import { CountertopModalComponent } from './countertops/countertops-budget/countertops-budget.component';
import { CabinetsComponent } from './cabinets/cabinets/cabinets.component';
import { CabinetsLocationComponent } from './cabinets/cabinets-location/cabinets-location.component';
import { CommonKitchenLayoutsComponent } from './cabinets/common-kitchen-layouts/common-kitchen-layouts.component'
import { EditNameModalComponent } from './budget-calculation/budget-calculation.component';
import { CabinetsFloorPlanComponent } from './cabinets/cabinets-floor-plan/cabinets-floor-plan.component';
import { CabinetsPeninsulaMeasureComponent } from './cabinets/cabinets-peninsula-measure/cabinets-peninsula-measure.component';
import { EditCountertopNameModalComponent } from './countertops/countertops-budget/countertops-budget.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { MydocumentComponent } from './mydocument/mydocument.component';
import { AccountDetailsComponent } from './account-details/account-details.component';

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
    BudgetCalculationComponent,
    ServiceHeadingComponent,
    BudgetAssumptionComponent,
    StandardMaterialCostComponent,
    MyAccountComponent,
    ModalComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    CountertopsComponent,
    CountertopDetailsComponent,
    FloorplanComponent,
    PeninsulaMeasureComponent,
    CounterLocationComponent,
    CountertopsBudgetComponent,
    CountertopModalComponent,
    CabinetsComponent,
    CabinetsLocationComponent,
    CommonKitchenLayoutsComponent,
    EditNameModalComponent,
    CabinetsFloorPlanComponent,
    CabinetsPeninsulaMeasureComponent,
    EditCountertopNameModalComponent,
    MyprofileComponent,
    MydocumentComponent,
    AccountDetailsComponent
  ],
  entryComponents: [ModalComponent,CountertopModalComponent,EditNameModalComponent,EditCountertopNameModalComponent],
  imports: [
    CommonModule,
    ComponentRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    MetarialModule
  ]
})
export class ComponentModule { }
