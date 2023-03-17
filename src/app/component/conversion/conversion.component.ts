import { Component } from '@angular/core';
import { Conversion } from 'src/app/models/Conversion';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.scss']
})
export class ConversionComponent {
  list:Array<Conversion> = [];

  nuevaConversion(newConversion:Conversion){
    this.list.push(newConversion);
    console.log(newConversion);
  }

}
