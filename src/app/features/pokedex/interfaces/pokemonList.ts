import {PokemonBasicInfo} from "./pokemonBasicInfo";

export interface PokemonList{
  count : number;
  next : string | null;
  previous : string | null;
  results : PokemonBasicInfo[];
}
