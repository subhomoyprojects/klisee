import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-countertop-details',
  templateUrl: './countertop-details.component.html',
  styleUrls: ['./countertop-details.component.css']
})
export class CountertopDetailsComponent implements OnInit {
  
  counterTopDetails: FormGroup;

  isActive: boolean;

  constructor() { 
    this.counterTopDetails=new FormGroup({
      oldCounterRemoved: new FormControl('', [Validators.required]),
      needSinks: new FormControl ('', [Validators.required]),
      howManySink: new FormControl ('', [Validators.required]),
      sinkBudget: new FormControl ('', [Validators.required]),
      needPlumber: new FormControl ('', [Validators.required]),
      needIslandPeninsula: new FormControl ('', [Validators.required]),
    });
  }


  ngOnInit() {
    this.isActive=false;
  }

}
