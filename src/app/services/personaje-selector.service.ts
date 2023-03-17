import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonajeSelectorService {

  constructor() { }

  private personaje = new BehaviorSubject<string>("Arquero");
  currentPersonaje = this.personaje.asObservable();

  setPersonaje(newPersonaje:string){
    this.personaje.next(newPersonaje);
  }
}
