import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConversionComponent } from './component/conversion/conversion.component';
import { ConversionSelectorComponent } from './component/conversion-selector/conversion-selector.component';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { FormsModule } from '@angular/forms';
import { PersonajesComponent } from './component/personajes/personajes.component';
import { PersonajesSelectComponent } from './component/personajes-select/personajes-select.component';
import { PersonajesDisplayComponent } from './component/personajes-display/personajes-display.component';

@NgModule({
  declarations: [
    AppComponent,
    ConversionComponent,
    ConversionSelectorComponent,
    ToolbarComponent,
    PersonajesComponent,
    PersonajesSelectComponent,
    PersonajesDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
