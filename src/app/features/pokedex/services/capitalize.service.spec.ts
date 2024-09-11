/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CapitalizeService } from './capitalize.service';

describe('Service: Capitalize', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CapitalizeService]
    });
  });

  it('should ...', inject([CapitalizeService], (service: CapitalizeService) => {
    expect(service).toBeTruthy();
  }));
});
