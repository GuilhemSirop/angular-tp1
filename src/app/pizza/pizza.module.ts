import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { PizzaAddComponent } from './pizza-add/pizza-add.component';
import { PizzaDetailComponent } from './pizza-detail/pizza-detail.component';
import { PizzaService } from '../shared/services/pizza/pizza.service';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [PizzaListComponent, PizzaAddComponent, PizzaDetailComponent],
  exports: [
    PizzaListComponent,
  ],
  providers: [
    PizzaService
  ]
})
export class PizzaModule { }
