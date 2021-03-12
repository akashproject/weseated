import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-menu',
  templateUrl: './tab-menu.component.html',
  styleUrls: ['./tab-menu.component.scss'],
})
export class TabMenuComponent implements OnInit {

  active:boolean = false;
  active2:boolean = false;
  active3:boolean = false;
  active4:boolean = false;

  constructor() { }

  acClick(){
    this.active = true;
    this.active2 = false;
    this.active3 = false;
    this.active4 = false;
  }
  nonAcClick(){
    this.active = false;
    this.active2 = true;
    this.active3 = false;
    this.active4 = false;

  }
  sleeperClick(){
    this.active = false;
    this.active2 = false;
    this.active3 = true;
    this.active4 = false;
  }
  seaterClick(){
    this.active = false;
    this.active2 = false;
    this.active3 = false;
    this.active4 = true;

  }

  ngOnInit() {}

}
