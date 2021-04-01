import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { AppComponent } from './app.component';
import {
  HttpClientModule,
  HttpClient,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './all-components/global/header/header.component';
import { MenuComponent } from './all-components/global/header/menu/menu.component';
import { FooterComponent } from './all-components/global/footer/footer.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, MenuComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
    HttpClientModule,
    IonicStorageModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [
    HTTP,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
