import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-flooring-type-cabinets',
  templateUrl: './flooring-type-cabinets.component.html',
  styleUrls: ['./flooring-type-cabinets.component.css']
})
export class FlooringTypeCabinetsComponent implements OnInit {

  myRoom: FormGroup;

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
   }

  ngOnInit() {
  }

}
