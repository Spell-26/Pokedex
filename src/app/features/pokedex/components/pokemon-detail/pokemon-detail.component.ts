import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CapitalizeService } from '../../services/capitalize.service';
import { PokemonTypeColorsService } from '../../services/pokemon-type-colors.service';
import { CrucetaService } from '../../services/cruceta.service';
import { DescriptionGeneratorService } from '../../services/description-generator.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  @Input() pokemonDetail : any;
  private directionSubscription !: Subscription;
  private actionSubscription !: Subscription;

  //Señal para saber cuando se va a cerrar el modal
  @Output() modalStatus = new EventEmitter<boolean>();

  constructor(
    public capitalizeService : CapitalizeService,
    private pokemonTypeColorService : PokemonTypeColorsService,
    private crucetaService : CrucetaService,
    private descriptionGenerator : DescriptionGeneratorService,
  ) { }

  ngOnInit() {
    this.getPokemonDescription(this.pokemonDetail.name);

    // Subscripción a las acciones de la cruceta
    this.directionSubscription = this.crucetaService.direction$.subscribe(direction => {
      this.handleCrucetaDirection(direction);
    });

    //Subscripcion a las acciones de los botones A, B
    this.actionSubscription = this.crucetaService.action$.subscribe(action => {
      this.handleActionInput(action);
    })
  }


  private handleCrucetaDirection(direction : string){
    switch (direction) {
      case 'up':
        break;
      case 'down':
        break;
      case 'left':
        break;
      case 'right':
        break;
      default:
        break;
    }
  }

  private handleActionInput(action : string){
    switch(action){
      case 'a':
        break;
      case 'b':
        //acción para cerrar el modal
        this.closeModal();
        break;
      default:
        break;
    }
  }

  private closeModal(): void{
    //desubscribirse de las acciones
    this.actionSubscription.unsubscribe();
    this.directionSubscription.unsubscribe();
    //enviar señal para cerrar el modal
    this.modalStatus.emit();
  }

  public getTypeColor(typeName : string) : string {
    return this.pokemonTypeColorService.getColorByType(typeName)
  }

  public divideHeightInTen(height : string) : string {
    const numericHeight : number = parseInt(height);

    const result : number = numericHeight / 10;

    return result.toString();
  }

  private getPokemonDescription(pokemonName : string) : void {
    this.descriptionGenerator.getPokemonDescription(pokemonName)
      .subscribe(
        result => console.log(result)
      )
  }
}
