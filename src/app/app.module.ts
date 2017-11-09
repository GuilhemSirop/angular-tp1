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
    ContactModule
  ],
  providers: [ContactService, PizzaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
