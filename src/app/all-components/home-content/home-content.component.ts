import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { UtilService } from '../../services/util.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.scss'],
})
export class HomeContentComponent implements OnInit {
  active: boolean = false;
  active2: boolean = false;
  active3: boolean = false;
  active4: boolean = false;
  bookSelected: boolean = false;
  slideOptsLocation = {
    initialSlide: 0,
    autoplay: true,
    freeMode: false,
    speed: 400,
    slidesPerView: 1,
    watchSlidesProgress: true,
    grabCursor: true,
    spaceBetween: 0,
  };

  slideOptsOffar = {
    slidesPerView: 1,
    spaceBetween: 0,
    grabCursor: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 35,
      depth: 0,
      modifier: 1,
      slideShadows: true,
    },
  };

  slideOptsBooking = {
    slidesPerView: 1.2,
    spaceBetween: 10,
    grabCursor: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 35,
      depth: 0,
      modifier: 1,
      slideShadows: true,
    },
  };

  busFilter: {
    start: any;
    end: any;
    date: any;
  } = {
    start: '',
    end: '',
    date: '',
  };
  navCtrl: any;

  constructor(
    private router: Router,
    private api: ApiService,
    public util: UtilService
  ) {}

  ngOnInit() {}
  acClick() {
    this.active = true;
    this.active2 = false;
    this.active3 = false;
    this.active4 = false;
  }
  nonAcClick() {
    this.active = false;
    this.active2 = true;
    this.active3 = false;
    this.active4 = false;
  }
  sleeperClick() {
    this.active = false;
    this.active2 = false;
    this.active3 = true;
    this.active4 = false;
  }
  seaterClick() {
    this.active = false;
    this.active2 = false;
    this.active3 = false;
    this.active4 = true;
  }

  findBus() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(this.busFilter),
      },
    };
    this.router.navigate(['bus-list'], navigationExtras);

    /* */
  }

  cardBookNow() {
    this.bookSelected = true;
    this.busFilter.start = 'Korunamoyee';
    this.busFilter.end = 'Burdwan';
    //this.findBus();
  }
}
