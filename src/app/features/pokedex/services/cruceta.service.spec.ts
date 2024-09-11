/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CrucetaService } from './cruceta.service';

describe('Service: Cruceta', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrucetaService]
    });
  });

  it('should ...', inject([CrucetaService], (service: CrucetaService) => {
    expect(service).toBeTruthy();
  }));
});
