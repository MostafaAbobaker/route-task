import { TestBed } from '@angular/core/testing';

import { CustomarsService } from './customars.service';

describe('CustomarsService', () => {
  let service: CustomarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
