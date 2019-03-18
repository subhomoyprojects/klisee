import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-flooring',
  templateUrl: './flooring.component.html',
  styleUrls: ['./flooring.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateX(100%)'}),
        animate('200ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})
export class FlooringComponent implements OnInit {

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

  visible:boolean = false;
}
