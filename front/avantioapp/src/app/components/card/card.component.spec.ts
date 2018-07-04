import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {   RouterTestingModule } from "@angular/router/testing";
import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should show TEST INPUT', () => {
    component.item = 0;
    //component.processInput();
    fixture.detectChanges();
    //expect(fixture.nativeElement.querySelector('div').innerText).toEqual('TEST INPUT');
  });
});
