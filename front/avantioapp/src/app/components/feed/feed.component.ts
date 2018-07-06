import { Component, OnInit, Input, Inject } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ApiServeService } from '../../services/api-serve.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  private feed: any = {};
  private id: String;
  private isNew: Boolean = false;
  constructor(private route: ActivatedRoute, private _route: Router, private _api: ApiServeService) { }
  ngOnInit() {
    this.route.params.subscribe(params => {
      // (+) converts string 'id' to a number
      console.log(params);
      if (params.row != 'new') {
      this.id = params.row;
        // In a real app: dispatch action to load the details here.
        console.log(this._api.getFeed(params.row).then((params) => { this.setFeed(params); console.log(params) }));
      } else this.isNew = true;
    });
    //this._api.getFeed(this.id).then((params)=>{console.log(params);return params}) 
  }
  setFeed(data) {
    this.feed = data;
  }

  submitted = false;

  onSubmit() { this.submitted = true; }

  editFeed(row: any) {

    this._api.updateFeed(row).then((res) => {


      alert(`Message: ${res.message}`)
      this._route.navigate(['']);

    });
  }

  newFeed(row: any) {

    this._api.newFeed(row).then((res) => {


      alert(`Message: ${res.message}`)
      this._route.navigate(['']);

    });
  }

  deleteFeed(row: any) {
    this._api.deleteFeed(row).then((res) => {
      /*this.getData(this.nav.page);
      if(!res.status) alert(`Error: ${res.value.message}`)
      else alert(`OK: ${res.value.message}`)*/
      alert(`Message: ${res.message}`);
      this._route.navigate(['']);

    });;
  }

}
