import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resembles-current-layout',
  templateUrl: './resembles-current-layout.component.html',
  styleUrls: ['./resembles-current-layout.component.css']
})
export class ResemblesCurrentLayoutComponent implements OnInit {

  isActive: boolean;

  constructor() { }

  ngOnInit() {
    this.isActive=false;
  }

}
