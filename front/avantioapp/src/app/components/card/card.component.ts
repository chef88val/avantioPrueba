import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { ApiServeService } from '../../services/api-serve.service';

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
    if (Object(this.item).keys != undefined) this.isItem = true;
    console.log("CARD", this.item, Object(this.item).keys == undefined)
  }

  ngOnChanges(changes: SimpleChanges): void {
    //throw new Error("Method not implemented.");
  }

}
