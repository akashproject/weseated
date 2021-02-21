import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  slideOpts = {
    slidesPerView: 1.3,
  };
  search_result: any[] = ['abe', 'abe'];
  constructor() {}

  ngOnInit() {}
}
