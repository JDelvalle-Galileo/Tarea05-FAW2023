import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConversionComponent } from './component/conversion/conversion.component';
import { PersonajesComponent } from './component/personajes/personajes.component';

const routes: Routes = [
  {path:"conversion", component:ConversionComponent},
  {path:"personajes", component:PersonajesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
