import { Component, OnInit } from '@angular/core';
import { PersonajeSelectorService } from 'src/app/services/personaje-selector.service';

@Component({
  selector: 'app-personajes-display',
  templateUrl: './personajes-display.component.html',
  styleUrls: ['./personajes-display.component.scss']
})
export class PersonajesDisplayComponent {
  personaje:string = "";
  imgSrc:string = ""

  constructor(private selector:PersonajeSelectorService){
    
  }
  
  ngOnInit(){
    this.selector.currentPersonaje.subscribe(personaje => this.personaje = personaje);
    this.selector.currentImagen.subscribe(imagen => this.imgSrc = "../../../assets/img/"+imagen)
  }

}
