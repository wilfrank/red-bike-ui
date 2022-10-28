import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { MockHttpClient } from '../shared/helper/mock-http-client';

import { BikeService } from './bike.service';

describe('BikeService', () => {
  let service: BikeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BikeService,
        { provide: HttpClient, useClass: MockHttpClient }
      ]
    });
  });

  beforeEach(()=>{
    service = TestBed.inject(BikeService);
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
