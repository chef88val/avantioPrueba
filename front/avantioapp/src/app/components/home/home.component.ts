import { Component, OnInit, ComponentRef } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ApiServeService } from '../../services/api-serve.service';

import { Modal } from 'ngx-modialog/plugins/bootstrap';
import { MyComponent } from '../my-component/my-component.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MyComponent]
})
/*
class MyModalComponent implements IModalDialog {
  actionButtons: IModalDialogButton[];

  constructor() {
    this.actionButtons = [
      { text: 'Close' }, // no special processing here
      { text: 'I will always close', onAction: () => true },
      { text: 'I never close', onAction: () => false }
    ];
  }

  dialogInit(reference: ComponentRef<IModalDialog>, options: Partial<IModalDialogOptions<any>>) {
    // no processing needed
  }
}*/
export class HomeComponent implements OnInit {
  private data: any = [];
  private publisher: any = [];
  private itemSelected: any = {};
  private nav: any = { totalitems: 0, itemspage: 0, total: null, page: 1, pages: null };
  constructor(private _route: Router, private _api: ApiServeService, public modal: Modal) { }

  ngOnInit() {
    this.getData(this.nav.page);
    this.publisher = this._api.getPublishers();
    console.log(this.publisher.elpais);
  }
  getData(page?: number) {
    this._api.getFeeds(page).then((feeds) => {
      console.log('feeds' + Object.keys(feeds));
      this.nav.totalitems = feeds.totalItems;
      this.nav.itemspage = feeds.itemspage;
      this.nav.total = feeds.feedstotal;
      this.nav.pages = feeds.pages;
      this.data = feeds.feeds;
    });
  }

  selectItem(i) {
    this.itemSelected = i;
    console.log(i);
  }

  first() {
    this.nav.page = 1;
    this._api.getFeeds(this.nav.page).then((feeds) => {
      console.log('feeds' + feeds);
      this.data = feeds.feeds;
    });
  }

  previous() {
    this.nav.page--;
    this._api.getFeeds(this.nav.page).then((feeds) => {
      console.log('feeds' + feeds);
      this.data = feeds.feeds;
    });
  }

  next() {
    this.nav.page++;
    this._api.getFeeds(this.nav.page).then((feeds) => {
      console.log('feeds' + feeds);
      this.data = feeds.feeds;
    });
  }

  last() {
    this.nav.page = this.nav.pages;
    this._api.getFeeds(this.nav.page).then((feeds) => {
      console.log('feeds' + feeds);
      this.data = feeds.feeds;
    });
  }

  newFeed() {
    // modal

  }

  editFeed(row: any) {
    this._route.navigate(['feed', row]);
    /*this._api.updateFeed(row).then((res) => {
      this.getData(this.nav.page);

      alert(`Message: ${res.message}`)

    });;*/
  }




}
