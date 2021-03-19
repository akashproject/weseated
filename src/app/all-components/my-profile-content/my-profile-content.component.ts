import { Component, OnInit } from '@angular/core';
import { UtilService } from '../../services/util.service';
import { Router, NavigationExtras } from '@angular/router';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-my-profile-content',
  templateUrl: './my-profile-content.component.html',
  styleUrls: ['./my-profile-content.component.scss'],
})
export class MyProfileContentComponent implements OnInit {
  constructor(
    private router: Router,
    public util: UtilService,
    private storage: Storage
  ) {}

  ngOnInit() {}

  logout() {
    console.log('logout');
    this.storage.remove('userinfo');
    this.router.navigate(['login']);
  }
}
