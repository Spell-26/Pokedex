import { Component } from '@angular/core';
import { CrucetaService } from '../../services/cruceta.service';

@Component({
  selector: 'app-a-b-buttons',
  templateUrl: './a-b-buttons.component.html',
  styleUrl: './a-b-buttons.component.css'
})
export class ABButtonsComponent {
  constructor(
    private crucetaService : CrucetaService,
  ){}

  public emitAction(action : string){
    this.crucetaService.emitABAction(action);
  }
}
