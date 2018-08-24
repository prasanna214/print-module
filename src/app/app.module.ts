import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {FormsModule} from '@angular/forms';
import {FilterPipe} from './filter.pipe';
import { FormComponent } from './form/form.component';
import {AppRoutingModule} from './app-routing.module';
import { ElementComponent } from './form/element.component';
import { ConceptComponent } from './form/concept.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FilterPipe,
    FormComponent,
    ElementComponent,
    ConceptComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
