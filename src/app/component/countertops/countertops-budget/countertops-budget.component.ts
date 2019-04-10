import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-countertops-budget',
  templateUrl: './countertops-budget.component.html',
  styleUrls: ['./countertops-budget.component.css']
})
export class CountertopsBudgetComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(CountertopModalComponent,{
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
  selector: 'app-countertop-modal',
  templateUrl: './countertop-modal.html',
  styleUrls: ['./countertops-budget.component.css']
})
export class CountertopModalComponent {}
