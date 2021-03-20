/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { HTTP } from '@ionic-native/http/ngx';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { map, switchMap, tap } from 'rxjs/operators';
//import Swal from "sweetalert2";
import { BehaviorSubject, forkJoin, from } from 'rxjs';
// import { CartService } from './cart.service';
const JWT_KEY = 'A4uFgVMExg6kCfwb';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private user = new BehaviorSubject(null);
  baseUrl: any = '';
  mediaURL: any = '';
  constructor(
    private http: HttpClient,
    private nativeHttp: HTTP,
    private storage: Storage,
    private plt: Platform
  ) {
    this.plt.ready().then(() => {
      this.storage.get(JWT_KEY).then((data) => {
        if (data) {
          this.user.next(data);
        }
      });
    });
    this.baseUrl = environment.baseURL;
    this.mediaURL = environment.mediaURL;
  }

  /*alerts(title, message, type) {
    Swal.fire(title, message, type);
  }*/

  uploadFile(files: File[]) {
    const formData = new FormData();
    Array.from(files).forEach((f) => formData.append('userfile', f));
    return this.http.post(this.baseUrl + 'users/upload_image', formData);
  }

  getCurrencyCode() {
    return environment.general.code;
  }

  getCurrecySymbol() {
    return environment.general.symbol;
  }

  createOrderNotification(stores) {
    const ids = [...new Set(stores.map((item) => item.token))];
    const apiCalls = [];
    ids.forEach((element) => {
      apiCalls.push(
        this.sendNotification(
          'You have received new order',
          'New Order Received',
          element
        )
      );
    });
    forkJoin(apiCalls).subscribe(
      (data) => {
        console.log('fork result', data);
      },
      (error) => {
        console.log('fork error', error);
      }
    );
  }
  sendNotification(arg0: string, arg1: string, element: unknown): any {
    throw new Error('Method not implemented.');
  }

  signIn(username, password) {
    return this.http
      .post(`${this.baseUrl}/jwt-auth/v1/token`, { username, password })
      .pipe(
        switchMap((data) => {
          return from(this.storage.set(JWT_KEY, data));
        }),
        tap((data) => {
          this.user.next(data);
        })
      );
  }

  getCurrentUser() {
    return this.user.asObservable();
  }

  getUserValue() {
    return this.user.getValue();
  }

  // sendNotification(msg, title, id) {
  //   const body = {
  //     app_id: environment.onesignal.appId,
  //     include_player_ids: [id],
  //     headings: { en: title },
  //     contents: { en: msg },
  //     data: { task: msg },
  //   };
  //   const header = {
  //     headers: new HttpHeaders()
  //       .set('Content-Type', 'application/json')
  //       .set('Authorization', `Basic ${environment.onesignal.restKey}`),
  //   };
  //   return this.http.post(
  //     'https://onesignal.com/api/v1/notifications',
  //     body,
  //     header
  //   );
  // }

  JSON_to_URLEncoded(element, key?, list?) {
    let new_list = list || [];
    if (typeof element === 'object') {
      for (let idx in element) {
        this.JSON_to_URLEncoded(
          element[idx],
          key ? key + '[' + idx + ']' : idx,
          new_list
        );
      }
    } else {
      new_list.push(key + '=' + encodeURIComponent(element));
    }
    return new_list.join('&');
  }

  post(url, body) {
    const header = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set('Basic', `${environment.authToken}`),
    };
    const param = this.JSON_to_URLEncoded(body);
    return this.http.post(this.baseUrl + url, param, header);
  }

  createOrder(params) {
    const orderObj = {
      payment_method: 'bacs',
      payment_method_title: 'Direct Bank Transfer',
      set_paid: true,
      billing: {
        first_name: 'John',
        last_name: 'Doe',
        address_1: '969 Market',
        address_2: '',
        city: 'San Francisco',
        state: 'CA',
        postcode: '94103',
        country: 'US',
        email: 'john.doe@example.com',
        phone: '(555) 555-5555',
      },
      line_items: [
        {
          product_id: 93,
          quantity: 1,
        },
      ],
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    const order = this.JSON_to_URLEncoded(orderObj);

    return new Promise((resolve) => {
      this.http
        .post(
          `${environment.absUrl}/wp-json/wc/v3/orders/?consumer_key=${environment.wookey.key}&consumer_secret=${environment.wookey.secret}`,
          order,
          { headers }
        )
        .subscribe((data) => {
          resolve(data);
        });
    });
  }

  externalPost(url, body, key) {
    const header = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set('Authorization', `Bearer ${key}`),
    };
    const order = this.JSON_to_URLEncoded(body);
    console.log(order);
    return this.http.post(url, order, header);
  }

  get(url) {
    const header = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set('Basic', `${environment.authToken}`),
    };
    return this.http.get(this.baseUrl + url, header);
  }

  externalGet(url) {
    return this.http.get(url);
  }

  httpGet(url, key) {
    const header = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set('Authorization', `Bearer ${key}`),
    };

    return this.http.get(url, header);
  }

  nativePost(url, post) {
    console.log(this.baseUrl + url, post);
    return this.nativeHttp.post(this.baseUrl + url, post, {
      Basic: `${environment.authToken}`,
    });
  }
}
