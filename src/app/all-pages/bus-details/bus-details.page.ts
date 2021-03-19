import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { UtilService } from '../../services/util.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-bus-details',
  templateUrl: './bus-details.page.html',
  styleUrls: ['./bus-details.page.scss'],
})
export class BusDetailsPage implements OnInit {
  data: any;
  myId = null;
  seats: any;
  busDetail: any = [];
  selectedSeat: any = [];
  constructor(
    public activatedRoute: ActivatedRoute,
    private router: Router,
    private api: ApiService,
    public util: UtilService
  ) {}

  ngOnInit() {
    this.myId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('here', this.myId);
    this.api
      .externalGet(
        'http://salils14.sg-host.com/wp-json/wp/v2/wbtm_bus/' + this.myId
      )
      .subscribe(
        (data: any) => {
          console.log('response', data);
          this.getSeatDetails(data.bus_informations.wbtm_bus_seats_info);
          // if (data && data.status === 200) {
          //   this.busDetail = data.data;
          //   console.log(this.busDetail);
          // } else if (data && data.status === 500) {
          //   console.log('500');
          //   this.util.errorToast(data.data.error);
          // } else {
          //   console.log('wrong');
          //   this.util.errorToast(this.util.getString('Something went wrong'));
          // }
        },
        (error) => {
          console.log(error);
          this.util.errorToast(this.util.getString('Something went wrong'));
        }
      );
  }

  getSeatDetails(item) {
    let seat: any = [];
    seat['seat'] = item[0];
    this.api.post('getarray', seat).subscribe(
      (data: any) => {
        console.log('response', data);
        if (data && data.status === 200) {
          this.seats = data.data;
          console.log(this.seats);
        } else if (data && data.status === 500) {
          console.log('500');
          this.util.errorToast(data.data.error);
        } else {
          console.log('wrong');
          this.util.errorToast(this.util.getString('Something went wrong'));
        }
      },
      (error) => {
        console.log(error);
        this.util.errorToast(this.util.getString('Something went wrong'));
      }
    );
  }

  selectSeat(param) {}
}
