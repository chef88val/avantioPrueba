import { TestBed, inject } from '@angular/core/testing';

import { ApiServeService } from './api-serve.service';

describe('ApiServeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiServeService]
    });
  });

  it('should be created', inject([ApiServeService], (service: ApiServeService) => {
    expect(service).toBeTruthy();
  }));
});
