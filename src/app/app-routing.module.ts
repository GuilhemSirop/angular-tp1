import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ContactDetailComponent} from './contact/contact-detail/contact-detail.component';
import {ContactListComponent} from './contact/contact-list/contact-list.component';

import {PizzaListComponent} from './pizza/pizza-list/pizza-list.component';
import {PizzaDetailComponent} from './pizza/pizza-detail/pizza-detail.component';
import {PizzaFormComponent} from './pizza/pizza-form/pizza-form.component';

import {PizzaIngredientListComponent} from './pizza/ingredient/ingredient-list/ingredient-list.component';
import {PizzaIngredientDetailComponent} from './pizza/ingredient/ingredient-detail/ingredient-detail.component';
import {PizzaIngredientFormComponent} from './pizza/ingredient/ingredient-form/ingredient-form.component';

const appRoutes: Routes = [
  {path: 'contacts', component: ContactListComponent},
  {path: 'contacts/:id', component: ContactDetailComponent},

  {path: 'pizzas', component: PizzaListComponent},
  {path: 'pizzas/add', component: PizzaFormComponent},
  {path: 'pizzas/update/:id', component: PizzaFormComponent},
  {path: 'pizzas/:id', component: PizzaDetailComponent},

  {path: 'pizzas/ingredients', component: PizzaIngredientListComponent},
  {path: 'pizzas/ingredients/add', component: PizzaIngredientFormComponent},
  {path: 'pizzas/ingredients/update/:id', component: PizzaIngredientFormComponent},
  {path: 'pizzas/ingredients/:id', component: PizzaIngredientDetailComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes,
      {enableTracing: false} // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
