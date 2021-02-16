/**
 * Title: sign-in.service.spec.ts
 * Author: Professor Krasso
 * Date: 14 February 2021
 * Modified By: Juvenal Gonzalez
 * Description: Testing for sign-in service component
 */


import { TestBed } from '@angular/core/testing';

import { SignInService } from './sign-in.service';

describe('SignInService', () => {
  let service: SignInService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignInService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
