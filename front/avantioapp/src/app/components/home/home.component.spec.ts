import { inject, async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from './home.component';
import { CardComponent } from '../card/card.component';
import { RestangularModule, Restangular, RestangularHttp } from 'ngx-restangular';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, CardComponent],
      imports: [RouterTestingModule, RestangularModule],
      providers: [Restangular]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', inject([Restangular], (_RestangularHttp: Restangular) => {
    expect(component).toBeTruthy();
  }));
});
