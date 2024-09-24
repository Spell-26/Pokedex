import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrucetaService {

  private directionSubject = new Subject<string>();
  private actionSubject = new Subject<string>();

  direction$ = this.directionSubject.asObservable();
  action$ = this.actionSubject.asObservable();

  constructor() { }

  public emitDirection(direction : string) {
    this.directionSubject.next(direction);
  }

  public emitABAction(action : string){
    this.actionSubject.next(action);
  }
}
