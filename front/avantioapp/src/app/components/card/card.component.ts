import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, OnChanges {
  @Input() item = 0;
  constructor() { }

  ngOnInit() {
    console.log("CARD", this.item)
  }

  ngOnChanges(changes: SimpleChanges): void {
    //throw new Error("Method not implemented.");
  }

}
