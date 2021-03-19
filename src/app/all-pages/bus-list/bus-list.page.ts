import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { UtilService } from '../../services/util.service';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.page.html',
  styleUrls: ['./bus-list.page.scss'],
})
export class BusListPage implements OnInit {
  data: any;
  busResult: any = [];
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

    this.api.post('bussearch', this.data).subscribe(
      (data: any) => {
        console.log('response', data);
        if (data && data.status === 200) {
          this.busResult = data.data;
          console.log(this.busResult);
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
}
