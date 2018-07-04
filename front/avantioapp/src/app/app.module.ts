
import 'reflect-metadata';
import '../polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http'; 
import { Http, Response } from '@angular/http';
// NG Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CardComponent } from './components/card/card.component';

import { KeysPipe } from './pipes/keys.pipe';
import { ValueHeadersPipe } from './pipes/value-headers.pipe';

import {ApiServeService} from './services/api-serve.service';
// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
import { RestangularModule, Restangular } from 'ngx-restangular';

// Function for setting the default restangular configuration
export function RestangularConfigFactory (RestangularProvider) {
  RestangularProvider.setBaseUrl('http://127.0.0.1:3800/api/');
  //RestangularProvider.setDefaultHeaders({'Authorization': 'Bearer UDXPx-Xko0w4BRKajozCVy20X11MRZs1'});
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    KeysPipe,
    ValueHeadersPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      }
    }),
    
    RestangularModule.forRoot(RestangularConfigFactory)
  ],
  providers: [ApiServeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
