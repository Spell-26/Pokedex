import { Component,OnInit } from '@angular/core';
import { CrucetaService } from '../../services/cruceta.service';

@Component({
  selector: 'app-cruceta',
  templateUrl: './cruceta.component.html',
  styleUrls: ['./cruceta.component.css']
})
export class CrucetaComponent implements OnInit {


  constructor(
    private crucetaService : CrucetaService,
  ) { }


  ngOnInit() {
  }

  emitDirection(direction: string) {
    this.crucetaService.emitDirection(direction);
  }
}
