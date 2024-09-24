import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { CapitalizeService } from '../../services/capitalize.service';
import { PokemonList } from '../../interfaces/pokemonList';
import { PokemonTypeColorsService } from '../../services/pokemon-type-colors.service';
import { Subscription } from 'rxjs';
import { CrucetaService } from '../../services/cruceta.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  public pokemonList! : PokemonList;
  public pokemonDetails : any[] = [];
  public pokemonPreview : any = null;

  // PAGINATION CONFIG
  currentPage : number = 1;
  private pokemonPerPage : number = 20;
  private maxPokemonId : number = 649;

  // ELEMENTO ACTUALMENTE SELECCIONADO
  public selectedIndex : number = 0;

  //SUBSCRIPCION A LAS ACCIONES DE LA CRUCETA
  private directionSubscription !: Subscription;
  @ViewChildren('listItem') listItems!: QueryList<ElementRef>;

  //SUBSCRIPCION A LOS BOTONES DE ACCION (A,B)
  private actionButtonSubscription !: Subscription;

  // VARIABLES MODAL DETALLES POKEMON
  public showPokemonDetails : boolean = false;

  constructor(
    private pokemonService : PokemonService,
    public capitalizeService : CapitalizeService,
    private pokemonTypeColorService : PokemonTypeColorsService,
    private crucetaService : CrucetaService,
  ) { }

  ngOnInit(): void {
    this.getPokemonPage();
    //subscribirse a las acciones
    this.subscribeToActions();
  }

  handleCrucetaDirection(direction : string) {
    switch (direction) {
      case 'up':
        this.moveSelection(-1);
        // Scroll al elemento seleccionado
        this.scrollToSelected();
        break;
      case 'down':
        this.moveSelection(1);
        // Scroll al elemento seleccionado
        this.scrollToSelected();
        break;
      case 'center':
        this.confirmSelection();
        break;
      case 'left':
        if(this.currentPage > 1){
          this.changePage(this.currentPage - 1)
        }
        break;
      case 'right':
        if(this.currentPage != this.getTotalPages()){
          this.changePage(this.currentPage + 1)
        }
        break;
      default:
        console.log(`SE APRETÓ LA CRUCETA EN LA DIRECCIÓN: ${direction}`);
    }
  }

  private handleActionInput(action : string){
    switch(action){
      case 'a':
        this.confirmSelection();
        break;
      case 'b':
        break;
      default:
        break;
    }
  }

  private scrollToSelected(): void {
    const selectedItem = this.listItems.toArray()[this.selectedIndex];
    selectedItem.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  private moveSelection(change: number) {
    const newIndex = this.selectedIndex + change;
    if (newIndex >= 0 && newIndex < this.pokemonDetails.length) {
      this.selectedIndex = newIndex;
      this.pokemonPreview = this.pokemonDetails[this.selectedIndex]; // Mostrar en preview el seleccionado
    }
  }

  //función para cerrar el modal de pokemon detail
  public closePokemonDetail(){
    //cerrar el modal
    this.showPokemonDetails = false;
    //subscribirse a las acciones
    this.subscribeToActions();
  }

  private confirmSelection() {
    if (this.pokemonPreview) {
      if(this.pokemonPreview){
        this.showPokemonDetails = true;
        //desuscribirse de las acciones
        this.actionButtonSubscription.unsubscribe();
        this.directionSubscription.unsubscribe();
      }
    }
  }

  private getPokemonPage() : void {
    const offset : string = ((this.currentPage - 1) * this.pokemonPerPage).toString();

    this.pokemonService.pokemonPagination(offset).subscribe(
      (result) => {
        this.pokemonList = result;
        this.pokemonDetails = [];
        this.getPokemonDetails();
      }, error => {
        console.log(error)
      }
    )
  }

  private subscribeToActions(){
    this.directionSubscription = this.crucetaService.direction$.subscribe(direction => {
      this.handleCrucetaDirection(direction);
    });

    this.actionButtonSubscription = this.crucetaService.action$.subscribe(action => {
    this.handleActionInput(action);
    });
  }

  private getPokemonDetails() : void {
    this.pokemonList.results.forEach(pokemon => {
      this.pokemonService.getPokemonDetail(pokemon.url).subscribe(
        (result) => {
          this.pokemonDetails.push(result)
          this.pokemonDetails.sort((a,b) => a.id - b.id)
          //console.log(result)
          if(this.pokemonDetails.length === 1){
            this.selectedIndex = 0; // Seleccionar el primer Pokémon al cargar
            this.pokemonPreview = this.pokemonDetails[0];
          }
        },(error) => {
          console.log(error);
        }
      )
    })
  }

  // Funciones para cargar y descargar la preview de un pokemon
  public hoveringPokemon(pokemon : any, index: number) : void {
    this.selectedIndex = index
    this.pokemonPreview = pokemon;
  }
  public getTypeColor(typeName : string) : string {
    return this.pokemonTypeColorService.getColorByType(typeName)
  }

  public  changePage(pageNumber : number): void {
    if(pageNumber > 0 && (pageNumber - 1) * this.pokemonPerPage < this.maxPokemonId){
      this.currentPage = pageNumber;
      this.getPokemonPage();
    }
  }

  public getTotalPages(): number {
    return Math.ceil(this.maxPokemonId / this.pokemonPerPage);
  }
}
