import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PokemonList} from "../interfaces/pokemonList";
import {PokemonDetail} from "../interfaces/pokemonDetail";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private readonly  OFFSET : string = '0';
  private readonly LIMIT : string = '20'; // LA CANTIDAD DE POKEMONES 5 GEN SON: 649
  private readonly MAX_POKEMON_ID : number = 649;
  private readonly  URL_LIST_ALL_POKEMON = `https://pokeapi.co/api/v2/pokemon?offset=${this.OFFSET}&limit=${this.LIMIT}`
  constructor(
    private http : HttpClient
  ) { }

  public listAllPokemon() : Observable<PokemonList> {
    return this.http.get<PokemonList>(this.URL_LIST_ALL_POKEMON);
  }

  public pokemonPagination(offset : string = '0', limit : string = '20') : Observable<PokemonList>{
    //verify offset does not exced pokemon number 649
    if(parseInt(offset) + parseInt(limit) > this.MAX_POKEMON_ID){
      limit = (this.MAX_POKEMON_ID - parseInt(offset)).toString(); // ajust limit to do not exced the maximum pokemon number
    }
    return this.http.get<PokemonList>(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
  }

  public getPokemonDetail(pokemonUrl : string) : Observable<any>{
    return this.http.get<any>(pokemonUrl);
  }
}
