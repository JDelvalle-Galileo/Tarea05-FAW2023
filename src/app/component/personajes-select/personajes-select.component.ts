import { Component } from '@angular/core';
import { PersonajeSelectorService } from 'src/app/services/personaje-selector.service';

@Component({
  selector: 'app-personajes-select',
  templateUrl: './personajes-select.component.html',
  styleUrls: ['./personajes-select.component.scss']
})
export class PersonajesSelectComponent {
  personaje:string = "Arquero";
  
  constructor(private selector:PersonajeSelectorService){

  }

  generarImagen(){
    this.selector.setPersonaje(this.personaje);
  }
}
