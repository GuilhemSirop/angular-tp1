import { Component, OnInit } from '@angular/core';

import { PizzaService} from '../../shared/services/pizza/pizza.service';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {

  listPizza = [];

  constructor(
    private pizzaService: PizzaService
  ) { }

  ngOnInit() {
    this.pizzaService.get().subscribe(data => {
      this.listPizza = data;
    });
  }

}
