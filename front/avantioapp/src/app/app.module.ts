
import 'reflect-metadata';
import '../polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { ModalModule } from 'ngx-modialog';
import { BootstrapModalModule } from 'ngx-modialog/plugins/bootstrap';
// NG Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CardComponent } from './components/card/card.component';
import { MyComponent } from './components/my-component/my-component.component';

import { KeysPipe } from './pipes/keys.pipe';
import { ValueHeadersPipe } from './pipes/value-headers.pipe';

import { ApiServeService } from './services/api-serve.service';
// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
import { RestangularModule, Restangular } from 'ngx-restangular';
import { RouterOutlet, RouterModule } from '@angular/router';
import { FeedComponent } from './components/feed/feed.component';
import { NavbarComponent } from './components/navbar/navbar.component';
// Function for setting the default restangular configuration
export function RestangularConfigFactory(RestangularProvider) {
  RestangularProvider.setBaseUrl('http://127.0.0.1:3800/api/');
  //RestangularProvider.setDefaultHeaders({'Authorization': 'Bearer UDXPx-Xko0w4BRKajozCVy20X11MRZs1'});
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    MyComponent,
    KeysPipe,
    ValueHeadersPipe,
    FeedComponent,
    NavbarComponent
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
    ModalModule.forRoot(),
    BootstrapModalModule,

    RestangularModule.forRoot(RestangularConfigFactory)
  ],
  providers: [ApiServeService, RouterOutlet, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
