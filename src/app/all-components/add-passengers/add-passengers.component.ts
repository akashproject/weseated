import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { UtilService } from '../../services/util.service';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
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
  seatfare = '';
  busDetail: any = [];
  selectedSeat: any = [];
  p_click_l1_open: boolean = false;
  p_click_l13_open: boolean = false;
  totalPrice: '';
  orderModel: any = {
    wbtm_seats: [],
    wbtm_start_stops: 'Korunamoyee',
    wbtm_end_stops: 'Burdwan',
    wbtm_journey_date: '2021-03-27',
    wbtm_journey_time: '6.00',
    wbtm_bus_time: '6.00',
    wbtm_total_seats: '0',
    wbtm_seat_original_fare: '',
    wbtm_seat_return_fare: '',
    is_return: '',
    wbtm_billing_type: '',
    wbtm_city_zone: '',
    wbtm_pickpoint: 'Karunamoyee [6.00]',
    wbtm_passenger_info: [],
    wbtm_single_passenger_info: [],
    wbtm_basic_passenger_info: [],
    wbtm_tp: '',
    wbtm_bus_id: '',
    line_total: '',
    line_subtotal: '',
    bus_id: '',
  };
  constructor(
    public activatedRoute: ActivatedRoute,
    private router: Router,
    private api: ApiService,
    public util: UtilService,
    private storage: Storage,
    private formBuilder: FormBuilder
  ) {}

  newPassegner() {
    let pass: any = {
      wbtm_user_name: 'Test',
      wbtm_user_email: 'Test@example.com',
      wbtm_user_phone: '9836555023',
      wbtm_extra_bag_qty: '0',
      wbtm_extra_bag_price: '0',
    };
    return pass;
  }
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params && params.seat) {
        //store the temp in data
        this.data = JSON.parse(params.seat);
        this.seatfare = JSON.parse(params.price);
      }
    });
    let seatArray = [];
    let priceArray = [];
    let totalP: number = 0;
    for (let i in this.data) {
      totalP = totalP + parseInt(this.seatfare);
      let seatobj = { wbtm_seat_name: this.data[i] };
      let priceObj = {
        wbtm_seat_fare: this.seatfare,
        wbtm_passenger_type: 'Adult',
      };
      seatArray.push(seatobj);
      priceArray.push(priceObj);
      this.orderModel.wbtm_single_passenger_info.push(this.newPassegner());
    }
    this.orderModel.wbtm_seats = seatArray;
    this.orderModel.wbtm_basic_passenger_info = priceArray;
    this.orderModel.wbtm_tp = this.orderModel.line_total = this.orderModel.line_subtotal = this.orderModel.wbtm_seat_original_fare = totalP;
    console.log(this.orderModel);
  }

  createOrder() {
    this.orderModel.wbtm_passenger_info = this.orderModel.wbtm_single_passenger_info;
    this.storage.get('orderModel').then((data) => {
      if (data) {
        for (let i in data) {
          this.orderModel[i] = data[i];
          // console.log('stor', i, data[i]);
        }
      }
    });
    let formData = { orderdata: this.orderModel };

    console.log('sub', formData);
    this.api.post('create-order', formData).subscribe(
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
      amount: this.orderModel.wbtm_tp * 100, // Payment amount in smallest denomiation e.g. cents for USD
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
      this.createOrder();
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
