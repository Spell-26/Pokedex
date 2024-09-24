/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DescriptionGeneratorService } from './description-generator.service';

describe('Service: DescriptionGenerator', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DescriptionGeneratorService]
    });
  });

  it('should ...', inject([DescriptionGeneratorService], (service: DescriptionGeneratorService) => {
    expect(service).toBeTruthy();
  }));
});
