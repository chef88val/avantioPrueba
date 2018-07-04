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
  constructor( private _route: Router, private _api: ApiServeService) { }

  ngOnInit() {
    this._api.getFeeds().then((feeds)=>{
      console.log('feeds'+feeds);
      this.data = feeds
    });
    this.publisher = this._api.getPublishers();
    console.log(this.publisher.elpais)
  }

  selectItem(i) {
    this.itemSelected = i
    console.log(i)
  }

}
