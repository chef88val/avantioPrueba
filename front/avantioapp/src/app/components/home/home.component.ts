import { Component, OnInit } from '@angular/core';
import { Route, Router } from "@angular/router";
import {ApiServeService} from '../../services/api-serve.service';
//import { Publisher } from "../../publisher.enum";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private data:any = [];
  private publisher:any = [];
  private itemSelected:any = {};
  private nav: any ={total:null, page:1, pages:null};
  constructor( private _route: Router, private _api: ApiServeService) { }

  ngOnInit() {
    this._api.getFeeds().then((feeds)=>{
      console.log('feeds'+Object.keys(feeds));
      this.nav.total= feeds.feedstotal;
      this.nav.pages= feeds.pages;
      this.data = feeds.feeds
    });
    this.publisher = this._api.getPublishers();
    console.log(this.publisher.elpais)
  }

  selectItem(i) {
    this.itemSelected = i
    console.log(i)
  }

}
