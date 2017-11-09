import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ContactDetailComponent} from './contact/contact-detail/contact-detail.component';
import {ContactListComponent} from './contact/contact-list/contact-list.component';
import {PizzaListComponent} from './pizza/pizza-list/pizza-list.component';
import {PizzaDetailComponent} from './pizza/pizza-detail/pizza-detail.component';
import {PizzaAddComponent} from './pizza/pizza-add/pizza-add.component';

const appRoutes: Routes = [
  {path: 'contacts', component: ContactListComponent},
  {path: 'contacts/:id', component: ContactDetailComponent},
  {path: 'pizzas', component: PizzaListComponent},
  {path: 'pizzas/add', component: PizzaAddComponent},
  {path: 'pizzas/:id', component: PizzaDetailComponent}
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
