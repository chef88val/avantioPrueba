import { Component, OnInit } from '@angular/core';
import { Route, Router } from "@angular/router";
import { ApiServeService } from '../../services/api-serve.service';
//import { Publisher } from "../../publisher.enum";
import { ModalDialogService } from "ngx-modal-dialog";
import { ViewContainerRef } from "@angular/core";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private data: any = [];
  private publisher: any = [];
  private itemSelected: any = {};
  private nav: any = { total: null, page: 1, pages: null };
  constructor(private _route: Router, private _api: ApiServeService, private viewRef: ViewContainerRef, private _ModalDialogService: ModalDialogService) { }

  ngOnInit() {
    this._api.getPublisherList();
    this._api.getFeeds().then((feeds) => {
      console.log('feeds' + Object.keys(feeds));
      this.nav.total = feeds.feedstotal;
      this.nav.pages = feeds.pages;
      this.data = feeds.feeds
    });
    this.publisher = this._api.getPublishers();
    console.log(this.publisher.elpais)
  }

  selectItem(i) {
    this.itemSelected = i
    console.log(i)
  }

  first() {
    this.nav.page = 1;
    this._api.getFeeds(this.nav.page).then((feeds) => {
      console.log('feeds' + feeds);
      this.data = feeds
    });
  }

  previous() {
    this.nav.page--;
    this._api.getFeeds(this.nav.page).then((feeds) => {
      console.log('feeds' + feeds);
      this.data = feeds
    });
  }

  next() {
    this.nav.page++;
    this._api.getFeeds(this.nav.page).then((feeds) => {
      console.log('feeds' + feeds);
      this.data = feeds
    });
  }

  last() {
    this.nav.page = this.nav.pages;
    this._api.getFeeds(this.nav.page).then((feeds) => {
      console.log('feeds' + feeds);
      this.data = feeds
    });
  }

  newFeed() {
    //modal
    this._ModalDialogService.openDialog(this.viewRef, {
      title: 'Some modal title'});
  }

  editFeed(row: any) {

  }


}
