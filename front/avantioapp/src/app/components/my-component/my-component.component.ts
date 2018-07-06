import { Component, Input } from '@angular/core';
import { NgxPopupComponent } from 'ngx-popups';


@Component({
  selector: 'app-my-component',
  template: `
    <div (click)="popup.close()">close</div>
    <p>Message : {{ message }}</p>
  `
})
export class MyComponent {
  @Input() popup: NgxPopupComponent;
  @Input() message: string;
}
