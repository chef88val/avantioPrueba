import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { ApiServeService } from '../../services/api-serve.service';
import _ = require('lodash');

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, OnChanges {
  @Input() item = 0;
  private publisher: any = [];
  private isItem: Boolean = false;
  constructor(private _api: ApiServeService) { }

  ngOnInit() {
    this.publisher = this._api.getPublishers();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes.item);
    if (_.findKey(changes.item, '_id')) { this.isItem = true; }
    // throw new Error("Method not implemented.");
  }

}
