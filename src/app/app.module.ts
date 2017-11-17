import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

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

import {ToastModule} from 'ng2-toastr/ng2-toastr';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastModule.forRoot(),
    PizzaModule,
    IngredientModule,
    ContactModule
  ],
  providers: [ContactService, PizzaService, IngredientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
