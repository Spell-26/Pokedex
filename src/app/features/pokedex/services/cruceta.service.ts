import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrucetaService {

  private directionSubject = new Subject<string>();

  direction$ = this.directionSubject.asObservable();

  constructor() { }

  public emitDirection(direction : string) {
    this.directionSubject.next(direction);
  }
}
