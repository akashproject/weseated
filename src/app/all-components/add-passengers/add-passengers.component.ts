import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { UtilService } from '../../services/util.service';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { Storage } from '@ionic/storage';
declare var RazorpayCheckout: any;
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
  p_click_l1_open: boolean = false;
  p_click_l13_open: boolean = false;
  orderModel: any = {
    wbtm_seats: [
      {
        wbtm_seat_name: '1',
      },
      {
        wbtm_seat_name: '2',
      },
    ],
    wbtm_start_stops: 'Korunamoyee',
    wbtm_end_stops: 'Burdwan',
    wbtm_journey_date: '2021-03-27',
    wbtm_journey_time: '6.00',
    wbtm_bus_time: '6.00',
    wbtm_total_seats: '0',
    wbtm_seat_original_fare: '200',
    wbtm_seat_return_fare: '200',
    is_return: '',
    wbtm_billing_type: '',
    wbtm_city_zone: '',
    wbtm_pickpoint: 'Karunamoyee [6.00]',
    wbtm_passenger_info: [
      {
        wbtm_user_name: 'Shourya',
        wbtm_user_email: 'magentoshourya@gmail.com',
        wbtm_user_phone: '9104438925',
        wbtm_extra_bag_qty: '0',
        wbtm_extra_bag_price: '0',
      },
      {
        wbtm_user_name: 'Shourya',
        wbtm_user_email: 'magentoshourya@gmail.com',
        wbtm_user_phone: '9104438925',
        wbtm_extra_bag_qty: '0',
        wbtm_extra_bag_price: '0',
      },
    ],
    wbtm_single_passenger_info: [
      {
        wbtm_user_name: 'Shourya',
        wbtm_user_email: 'magentoshourya@gmail.com',
        wbtm_user_phone: '9104438925',
        wbtm_extra_bag_qty: '0',
        wbtm_extra_bag_price: '0',
      },
      {
        wbtm_user_name: 'Shourya',
        wbtm_user_email: 'magentoshourya@gmail.com',
        wbtm_user_phone: '9104438925',
        wbtm_extra_bag_qty: '0',
        wbtm_extra_bag_price: '0',
      },
    ],
    wbtm_basic_passenger_info: [
      {
        wbtm_seat_fare: '100',
        wbtm_passenger_type: 'Adult',
      },
      {
        wbtm_seat_fare: '100',
        wbtm_passenger_type: 'Adult',
      },
    ],
    wbtm_tp: '200',
    wbtm_bus_id: '55',
    line_total: '200',
    line_subtotal: '200',
    bus_id: '55',
  };
  constructor(
    public activatedRoute: ActivatedRoute,
    private router: Router,
    private api: ApiService,
    public util: UtilService,
    private storage: Storage
  ) {}

  ngOnInit() {
    console.log('static', this.orderModel);

    this.activatedRoute.queryParams.subscribe((params) => {
      if (params && params.special) {
        //store the temp in data
        this.data = JSON.parse(params.special);
      }
    });
    this.storage.get('orderModel').then((data) => {
      if (data) {
        this.orderModel = data;
      }
    });
    let arr = [];
    for (let i in this.data) {
      let obj = { wbtm_seat_name: this.data[i] };
      arr.push(obj);
    }
    this.orderModel.wbtm_seats = arr;
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

  payWithRazorpay() {
    var options = {
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: 'INR', // your 3 letter currency code
      key: 'rzp_test_oOGrPMPR1muNai', // your Key Id from Razorpay dashboard
      amount: 100, // Payment amount in smallest denomiation e.g. cents for USD
      name: 'Razorpay',

      prefill: {
        email: 'test@razorpay.com',
        contact: '9990009991',
        name: 'Razorpay',
      },
      theme: {
        color: '#F37254',
      },
      modal: {
        ondismiss: function () {
          alert('dismissed');
        },
      },
    };

    var successCallback = (payment_id) => {
      console.log('razor success', payment_id);
      this.storage.set('payment_id', payment_id);
      //this.createOrder();
    };

    var cancelCallback = function (error) {
      alert(error.description + ' (Error ' + error.code + ')');
    };

    RazorpayCheckout.open(options);
    RazorpayCheckout.on('payment.success', successCallback);
    RazorpayCheckout.on('payment.cancel', cancelCallback);
  }

  p_click_l1() {
    this.p_click_l1_open = !this.p_click_l1_open;
  }
  p_click_l13() {
    this.p_click_l13_open = !this.p_click_l13_open;
  }
}
