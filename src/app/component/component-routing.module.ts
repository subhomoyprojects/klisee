import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FlooringComponent } from './flooring/flooring.component';
import { OtherServicesComponent } from './other-services/other-services.component';
import { LocationComponent } from './location/location.component';
import { WorkTypeComponent } from './work-type/work-type.component';
import { YourRoomComponent } from './your-room/your-room.component';
import { MaterialCostComponent } from './material-cost/material-cost.component';
import { BudgetCalculationComponent } from './budget-calculation/budget-calculation.component';
import { BudgetAssumptionComponent } from './budget-assumption/budget-assumption.component';
import { StandardMaterialCostComponent } from './standard-material-cost/standard-material-cost.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { CountertopsComponent } from './countertops/countertops/countertops.component';
import { CountertopDetailsComponent } from './countertops/countertop-details/countertop-details.component';
import { FloorplanComponent } from './countertops/floorplan/floorplan.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'flooring', component: FlooringComponent },
  {path: 'other-services', component: OtherServicesComponent},
  {path:'location', component:LocationComponent},
  {path:'worktype', component:WorkTypeComponent},
  {path:'yourroom', component:YourRoomComponent},
  {path:'materialcost', component:MaterialCostComponent},
  {path:'budgetcalculation', component:BudgetCalculationComponent},
  {path:'budget-assumtion',component:BudgetAssumptionComponent},
  {path:'standard-material-cost', component:StandardMaterialCostComponent},
  {path:'my-account', component:MyAccountComponent},
  { path: 'forget-password', component: ForgetPasswordComponent},
  { path: 'reset-password', component: ResetPasswordComponent},
  {path: 'countertop', component:CountertopsComponent},
  {path:'countertop-details', component:CountertopDetailsComponent},
  {path:'countertop-floor-plan',component:FloorplanComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentRoutingModule { }
