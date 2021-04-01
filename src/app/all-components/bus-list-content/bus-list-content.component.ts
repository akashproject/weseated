import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { UtilService } from '../../services/util.service';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-bus-list-content',
  templateUrl: './bus-list-content.component.html',
  styleUrls: ['./bus-list-content.component.scss'],
})
export class BusListContentComponent implements OnInit {
  data: any;
  busResult: any = [];
  availablity: any;
  constructor(
    public activatedRoute: ActivatedRoute,
    private router: Router,
    private api: ApiService,
    public util: UtilService,
    private storage: Storage
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params && params.special) {
        //store the temp in data
        this.data = JSON.parse(params.special);
      }
    });

    this.api.post('bussearch', this.data).subscribe(
      (data: any) => {
        console.log('response', data);
        if (data && data.status === 200) {
          this.busResult = data.data;
          this.availablity = this.busResult.length;
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

  addBusToCart(params) {
    console.log(params.price);
    console.log(this.data);

    let addBustoModel = {
      bus_id: params.id,
      wbtm_bus_id: params.id,
      is_return: '',
      wbtm_start_stops: this.data.start,
      wbtm_end_stops: this.data.end,
      wbtm_journey_date: this.data.date,
      wbtm_journey_time: this.data.date,
      wbtm_bus_time: this.data.date,
      wbtm_total_seats: this.data.total_seats,
      wbtm_seat_return_fare: '',
    };
    this.storage.set('orderModel', addBustoModel);

    this.router.navigate([
      'bus-detail',
      { id: params.id, price: params.price[0].wbtm_bus_price },
    ]);
  }
}
