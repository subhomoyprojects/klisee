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
import { PeninsulaMeasureComponent } from './countertops/peninsula-measure/peninsula-measure.component';
import { CounterLocationComponent } from './countertops/counter-location/counter-location.component';
import { CountertopsBudgetComponent } from './countertops/countertops-budget/countertops-budget.component';
import { CabinetsComponent } from './cabinets/cabinets/cabinets.component';
import { CabinetsLocationComponent } from './cabinets/cabinets-location/cabinets-location.component';
import { CommonKitchenLayoutsComponent } from './cabinets/common-kitchen-layouts/common-kitchen-layouts.component';
import { CabinetsFloorPlanComponent } from './cabinets/cabinets-floor-plan/cabinets-floor-plan.component';
import { CabinetsPeninsulaMeasureComponent } from './cabinets/cabinets-peninsula-measure/cabinets-peninsula-measure.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { MydocumentComponent } from './mydocument/mydocument.component';
import { CounterCabinetsComponent } from './cabinets/counter-cabinets/counter-cabinets.component';
import { CounterdetailsCabinetsComponent } from './cabinets/counterdetails-cabinets/counterdetails-cabinets.component';
import { AppliancesComponent } from './cabinets/appliances/appliances.component';
import { AppliancesLabelComponent } from './cabinets/appliances-label/appliances-label.component';
import { CalculateAvailableWallspaceComponent } from './cabinets/calculate-available-wallspace/calculate-available-wallspace.component';
import { FlooringTypeCabinetsComponent } from './cabinets/flooring-type-cabinets/flooring-type-cabinets.component';
import { ResemblesCurrentLayoutComponent } from './cabinets/resembles-current-layout/resembles-current-layout.component';
import { ReplaceorupdateQuestionSetComponent } from './cabinets/replaceorupdate-question-set/replaceorupdate-question-set.component';

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
  {path:'countertop-floor-plan',component:FloorplanComponent},
  {path:'peninsula-measure', component: PeninsulaMeasureComponent},
  {path:'counter-location', component:CounterLocationComponent},
  {path:'countertop-budget', component:CountertopsBudgetComponent},
  {path:'cabinets', component:CabinetsComponent},
  {path:'cabinets-location', component: CabinetsLocationComponent},
  {path:'common-kitchen-layouts', component:CommonKitchenLayoutsComponent},
  {path:'cabinets-floor-plan', component:CabinetsFloorPlanComponent},
  {path:'cabinets-peninsula-measure', component: CabinetsPeninsulaMeasureComponent},
  {path:'my-profile', component:MyprofileComponent},
  {path:'my-document', component:MydocumentComponent},
  {path:'counter-cabinets', component:CounterCabinetsComponent},
  {path:'counterdetails-cabinets', component:CounterdetailsCabinetsComponent},
  {path:'appliances', component:AppliancesComponent},
  {path:'appliances-label', component:AppliancesLabelComponent},
  {path:'calculate-available-wallspace', component:CalculateAvailableWallspaceComponent},
  {path:'flooring-type-cabinets', component:FlooringTypeCabinetsComponent},
  {path:'resembles-current-layout', component:ResemblesCurrentLayoutComponent},
  {path:'replaceorupdate-question-set', component:ReplaceorupdateQuestionSetComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentRoutingModule { }
