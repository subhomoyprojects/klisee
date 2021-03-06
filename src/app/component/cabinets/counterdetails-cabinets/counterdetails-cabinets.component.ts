import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-counterdetails-cabinets',
  templateUrl: './counterdetails-cabinets.component.html',
  styleUrls: ['./counterdetails-cabinets.component.css']
})
export class CounterdetailsCabinetsComponent implements OnInit {

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
      modelNumber: new FormControl ('', [Validators.required]),
      sku: new FormControl ('', [Validators.required]),
      addSpalsh: new FormControl ('', [Validators.required]),
    });
   }

  ngOnInit() {
    this.isActive=false;
  }

}
