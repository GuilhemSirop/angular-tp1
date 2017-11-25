import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ContactDetailComponent} from './contact/contact-detail/contact-detail.component';
import {ContactListComponent} from './contact/contact-list/contact-list.component';

import {PizzaListComponent} from './pizza/pizza-list/pizza-list.component';
import {PizzaDetailComponent} from './pizza/pizza-detail/pizza-detail.component';
import {PizzaFormComponent} from './pizza/pizza-form/pizza-form.component';

import {IngredientListComponent} from './ingredient/ingredient-list/ingredient-list.component';
import {IngredientDetailComponent} from './ingredient/ingredient-detail/ingredient-detail.component';
import {IngredientFormComponent} from './ingredient/ingredient-form/ingredient-form.component';

const appRoutes: Routes = [
  {path: '', component: PizzaListComponent},
  {path: 'contacts', component: ContactListComponent},
  {path: 'contacts/:id', component: ContactDetailComponent},

  {path: 'pizzas', component: PizzaListComponent},
  {path: 'pizzas/add', component: PizzaFormComponent},
  {path: 'pizzas/update/:id', component: PizzaFormComponent},
  {path: 'pizzas/:id', component: PizzaDetailComponent},

  {path: 'ingredients', component: IngredientListComponent},
  {path: 'ingredients/add', component: IngredientFormComponent},
  {path: 'ingredients/update/:id', component: IngredientFormComponent},
  {path: 'ingredients/:id', component: IngredientDetailComponent}
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
