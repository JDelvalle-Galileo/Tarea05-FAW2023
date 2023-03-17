import { Component, EventEmitter, Output } from '@angular/core';
import { Conversion } from 'src/app/models/Conversion';

@Component({
  selector: 'app-conversion-selector',
  templateUrl: './conversion-selector.component.html',
  styleUrls: ['./conversion-selector.component.scss']
})
export class ConversionSelectorComponent {
  grados:number = 0;
  tipo:string = "Cel";  // deja Celsius como default del select.

  @Output() conversionOut = new EventEmitter<Conversion>()

  generarConversion(){
    let newConversion = new Conversion(this.grados, this.tipo);
    this.conversionOut.emit(newConversion);
  }
}
