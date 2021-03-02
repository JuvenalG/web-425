import { TestBed } from '@angular/core/testing';

import { ServicePurchasedArrayService } from './service-purchased-array.service';

describe('ServicePurchasedArrayService', () => {
  let service: ServicePurchasedArrayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicePurchasedArrayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
