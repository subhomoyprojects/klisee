import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
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
export class LocationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  visible:boolean = false;

}
