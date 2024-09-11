import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {PokemonService} from "../../services/pokemon.service";
import {PokemonList} from "../../interfaces/pokemonList";
import {PokemonDetail} from "../../interfaces/pokemonDetail";
import { CapitalizeService } from '../../services/capitalize.service';

@Component({
  selector: 'app-pokedex-list',
  templateUrl: './pokedex-list.component.html',
  styleUrls: ['./pokedex-list.component.css']
})
export class PokedexListComponent implements OnInit {

  constructor(

  ) { }
  ngOnInit(): void {
  }

}
