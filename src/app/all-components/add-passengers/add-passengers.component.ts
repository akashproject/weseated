import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { UtilService } from '../../services/util.service';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-add-passengers',
  templateUrl: './add-passengers.component.html',
  styleUrls: ['./add-passengers.component.scss'],
})
export class AddPassengersComponent implements OnInit {

  data: any;
  myId = null;
  seats: any;
  busDetail: any = [];
  selectedSeat: any = [];
  p_click_l1_open: boolean=false;
  p_click_l13_open: boolean=false;
  constructor(
    public activatedRoute: ActivatedRoute,
    private router: Router,
    private api: ApiService,
    public util: UtilService
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params && params.special) {
        //store the temp in data
        this.data = JSON.parse(params.special);
      }
    });
    console.log(this.data);
  }

  createOrder() {
    this.api.createOrder('getarray').then(
      (data: any) => {
        console.log('response', data);
      },
      (error) => {
        console.log(error);
        this.util.errorToast(this.util.getString('Something went wrong'));
      }
    );
  }
  p_click_l1(){
    this.p_click_l1_open=!this.p_click_l1_open
  }
  p_click_l13(){
    this.p_click_l13_open=!this.p_click_l13_open
  }

}
