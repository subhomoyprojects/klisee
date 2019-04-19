import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-budget-calculation',
  templateUrl: './budget-calculation.component.html',
  styleUrls: ['./budget-calculation.component.css']
})
export class BudgetCalculationComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  openDialog() {
    const dialogRef = this.dialog.open(ModalComponent,{
      maxWidth: '700px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openEditNameModalDialog() {
    const dialogRef = this.dialog.open(EditNameModalComponent,{
      maxWidth: '700px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit() {
  }

}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.html',
  styleUrls: ['./budget-calculation.component.css']
})
export class ModalComponent {}

@Component({
  selector: 'app-edit-name-modal',
  templateUrl: './edit-name-modal.html',
  styleUrls: ['./budget-calculation.component.css']
})
export class EditNameModalComponent {}
