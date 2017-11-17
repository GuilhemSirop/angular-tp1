import {Component, OnInit, OnDestroy, ViewContainerRef} from '@angular/core';

import {PizzaService} from '../../shared/services/pizza/pizza.service';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit, OnDestroy {

  listPizza = [];
  result: any;
  connection;

  constructor(private pizzaService: PizzaService,
              public toaster: ToastsManager,
              vcr: ViewContainerRef) {
    this.toaster.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    // Evenement SOCKET
    this.connection = this.pizzaService.listenOnAddContact().subscribe(
      (pizza) => {
        this.listPizza.unshift(pizza);
      },
      () => this.toaster.error(`Un problème a été rencontré durant la récupération des nouvelles pizzas.`, 'Oups !')
      );
    // Récupération des Pizzas
    this.pizzaService.get().subscribe(data => {
      this.listPizza = data;
    });

  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }

  deletePizza(id) {
    this.pizzaService.deleteById(id).subscribe(
      () => {
        this.listPizza = this.listPizza.filter(aPizza => aPizza._id !== id);
        this.toaster.success('La pizza a été supprimée.', 'Supprimée !');
      },
      () => this.toaster.error(`Un problème a été rencontré durant la suppression de la pizza.`, 'Oups !')
    );

  }

}
