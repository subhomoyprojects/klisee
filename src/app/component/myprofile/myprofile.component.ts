import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  readonly:boolean=true;

  constructor() { }

  readonlynone(){
    this.readonly=false;
  }

  ngOnInit() {
  }

}
