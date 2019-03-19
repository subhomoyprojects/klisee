import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-flooring',
  templateUrl: './flooring.component.html',
  styleUrls: ['./flooring.component.css']
})
export class FlooringComponent implements OnInit {

  myRoom: FormGroup;
  materialCost: FormGroup;

  constructor() {
    this.myRoom=new FormGroup({
      roomname: new FormControl('', [Validators.required]),
      roomlength: new FormControl ('', [Validators.required]),
      roombreadth: new FormControl ('', [Validators.required]),
      roomDemoNeed: new FormControl ('', [Validators.required]),
      roomBaseboardNeed: new FormControl ('', [Validators.required]),
      roomdoorways: new FormControl ('', [Validators.required]),
      roomstepdowns: new FormControl ('', [Validators.required])
    })
    this.materialCost=new FormGroup({
      casePackSize: new FormControl('', [Validators.required]),
      pricePerSquerFeet: new FormControl ('', [Validators.required])
    })
  }

  ngOnInit() {
  }
}
