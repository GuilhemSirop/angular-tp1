import {Component, OnInit} from '@angular/core';

import {PizzaService} from '../../shared/services/pizza/pizza.service';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {

  listPizza = [];
  result: any;

  constructor(private pizzaService: PizzaService) {
  }

  ngOnInit() {

    this.pizzaService.listenOnAddContact().subscribe(data => console.log(data));

    this.pizzaService.get().subscribe(data => {
      this.listPizza = data;
    });
  }

  deletePizza(id) {
    this.pizzaService.deleteById(id).subscribe(
      () => {
        this.listPizza = this.listPizza.filter(aPizza => aPizza._id !== id);
        this.result = {
          success: true,
          message: 'La pizza a été supprimée.'
        };
      },
      () => this.result = {
        success: false,
        message: `Un problème a été rencontré durant la suppression de la pizza.`
      }
    );

  }

}
