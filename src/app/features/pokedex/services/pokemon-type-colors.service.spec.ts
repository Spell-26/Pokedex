/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PokemonTypeColorsService } from './pokemon-type-colors.service';

describe('Service: PokemonTypeColors', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PokemonTypeColorsService]
    });
  });

  it('should ...', inject([PokemonTypeColorsService], (service: PokemonTypeColorsService) => {
    expect(service).toBeTruthy();
  }));
});
