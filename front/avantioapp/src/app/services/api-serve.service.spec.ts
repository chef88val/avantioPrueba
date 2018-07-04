import { TestBed, inject, async } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { RestangularModule, Restangular, RestangularHttp } from 'ngx-restangular';
import { ApiServeService } from './api-serve.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ApiServeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RestangularModule],
      providers: [ Restangular,ApiServeService]
    });
  });

  //it('should be created', inject([Restangular,ApiServeService], ( _Restangular:Restangular, service: ApiServeService) => {
  it('should be created', inject([ Restangular ,HttpTestingController,ApiServeService], ( _RestangularHttp:Restangular ,_HttpTestingController:HttpTestingController,  service: ApiServeService) => {
    expect(service).toBeTruthy();
  }));
});
