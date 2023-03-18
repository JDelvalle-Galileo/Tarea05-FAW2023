import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonajeSelectorService {

  constructor() { }

  private personaje = new BehaviorSubject<string>("Arquero");
  currentPersonaje = this.personaje.asObservable();
  private imagen = new BehaviorSubject<string>("robin-hood.png");
  currentImagen = this.imagen.asObservable();

  setPersonaje(newPersonaje:string){
    this.personaje.next(newPersonaje);
    if(newPersonaje == "Hada"){
      this.imagen.next("fairy.png");
    }else if(newPersonaje == "Fantasma"){
      this.imagen.next("ghost.png");
    }else if(newPersonaje == "Arquero"){
      this.imagen.next("robin-hood.png");
    }else if(newPersonaje == "Bruja"){
      this.imagen.next("witch.png");
    }else if(newPersonaje == "Hechicero"){
      this.imagen.next("wizard.png");
    }
  }
}
