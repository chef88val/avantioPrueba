import { TestBed, inject, async } from '@angular/core/testing';
import { ValueHeadersPipe } from './value-headers.pipe';
import {ApiServeService} from '../services/api-serve.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RestangularModule, Restangular, RestangularHttp } from 'ngx-restangular';
describe('ValueHeadersPipe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RestangularModule],
      providers: [ Restangular,ApiServeService]
    });
  });
  it('create an instance', inject([ Restangular ,HttpTestingController,ApiServeService ], (_RestangularHttp:Restangular ,_HttpTestingController:HttpTestingController,_ApiServeService: ApiServeService) => {
    const pipe = new ValueHeadersPipe(_ApiServeService);
    expect(pipe).toBeTruthy();
  }));
});
