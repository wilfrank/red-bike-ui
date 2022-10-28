import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { MockHttpClient } from '../shared/helper/mock-http-client';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserService,
        { provide: HttpClient, useClass: MockHttpClient }
      ]
    });
  });
  beforeEach(() => {
    service = TestBed.inject(UserService);
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
