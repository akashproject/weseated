import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { UtilService } from '../../services/util.service';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-bus-details-content',
  templateUrl: './bus-details-content.component.html',
  styleUrls: ['./bus-details-content.component.scss'],
})
export class BusDetailsContentComponent implements OnInit {
  data: any;
  myId = null;
  seats: any;
  seatfare = '';
  busDetail: any = [];
  selectedSeat: any = [];
  active: boolean = false;
  addBustoModel: any;
  constructor(
    public activatedRoute: ActivatedRoute,
    private router: Router,
    private api: ApiService,
    public util: UtilService,
    private storage: Storage
  ) {}

  ngOnInit() {
    this.myId = this.activatedRoute.snapshot.paramMap.get('id');
    this.seatfare = this.activatedRoute.snapshot.paramMap.get('price');
    this.storage.get('orderModel').then((data) => {
      if (data) {
        this.addBustoModel = data;
      }
    });
    this.api
      .externalGet(
        'https://salils14.sg-host.com/wp-json/wp/v2/wbtm_bus/' + this.myId
      )
      .subscribe(
        (data: any) => {
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

  toggleSeat(param) {
    console.log(param);
    const index = this.selectedSeat.indexOf(param);
    if (index > -1) {
      this.selectedSeat.splice(index, 1);
    } else {
      this.selectedSeat.push(param);
    }
    console.log(this.selectedSeat);
  }

  passengerinfo() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        seat: JSON.stringify(this.selectedSeat),
        price: JSON.stringify(this.seatfare),
      },
    };
    this.router.navigate(['passenger-info'], navigationExtras);
  }

  selected() {
    this.active = !this.active;
  }
}
