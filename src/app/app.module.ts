import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import {ContactModule} from './contact/contact.module';

import {ContactService} from './shared/services/contact/contact.service';
import {ReactiveFormsModule} from '@angular/forms';
import {PizzaService} from './shared/services/pizza/pizza.service';
import {PizzaModule} from './pizza/pizza.module';
import {IngredientModule} from './ingredient/ingredient.module';
import {IngredientService} from './shared/services/ingredient/ingredient.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    PizzaModule,
    IngredientModule,
    ContactModule
  ],
  providers: [ContactService, PizzaService, IngredientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
