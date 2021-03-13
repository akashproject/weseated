import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { UtilService } from '../../services/util.service';
@Component({
  selector: 'app-login-content',
  templateUrl: './login-content.component.html',
  styleUrls: ['./login-content.component.scss'],
})
export class LoginContentComponent implements OnInit {
  mobile: any = '';
  loggedIn: boolean;
  showOtp = false;
  otp_value: any = '';
  hidden_otp_value: any = '';
  constructor(private api: ApiService, public util: UtilService) {}

  ngOnInit() {}

  sendOtp(resend) {
    if (!this.mobile) {
      this.util.showToast(
        this.util.getString('Mobile number are required'),
        'dark',
        'bottom'
      );
      return false;
    }
    let mobile = new String(this.mobile);
    console.log(mobile);
    console.log('Length ' + mobile.length);
    if (mobile.length != 10) {
      this.util.showToast(
        this.util.getString('invalid Mobile number'),
        'dark',
        'bottom'
      );
      return false;
    }

    const param = {
      mobile: this.mobile,
    };

    this.api.post('sendLoginOtp', param).subscribe(
      (data: any) => {
        //  console.log('response', data, data.status, data.data.otp_value);

        if (data && data.status === 200) {
          if (!resend) {
            this.showOtp = true;
          }
          this.hidden_otp_value = data.data.otp_value;
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
        this.loggedIn = false;
        this.util.errorToast(this.util.getString('Something went wrong'));
      }
    );
  }

  verifyOtp() {
    if (this.hidden_otp_value == this.otp_value) {
      this.login();
    } else {
      this.util.errorToast('invalid one time password');
    }
  }

  login() {
    console.log('login');
    this.loggedIn = true;
    const param = {
      mobile: this.mobile,
    };
  }
}
