import {Component, OnInit} from '@angular/core';
import {Validators, FormControl, FormGroup} from '@angular/forms';

import {PizzaService} from '../../shared/services/pizza/pizza.service';
import {IngredientService} from '../../shared/services/ingredient/ingredient.service';

import {ActivatedRoute, Router} from '@angular/router';
import {ingredientToArrayIds} from '../../models/pizza';

@Component({
  selector: 'app-pizza-add',
  templateUrl: './pizza-form.component.html',
  styleUrls: ['./pizza-form.component.css']
})
export class PizzaFormComponent implements OnInit {
  result: any;
  actual_form: string;
  title_form: string;

  id_to_update: number;
  selectedPizza: any;

  listIngredient: any;
  selectedIngredients: any;

  private form: FormGroup;

  constructor(private pizzaService: PizzaService,
              private ingredientService: IngredientService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {

    this.actual_form = this.activatedRoute.snapshot.url[1].path;
    this.selectedIngredients = [];
  }

  ngOnInit() {

    // ON charge la liste des INGREDIENTS
    this.ingredientService.get().subscribe(
      data => {
        this.listIngredient = data;
      },
      () => {
        this.listIngredient = [];
      }
    );

    // SI ON AJOUTE
    if (this.actual_form === 'add') {
      this.title_form = 'Ajouter';
      this.form = new FormGroup({
        name: new FormControl('', Validators.required),
        description: new FormControl('', Validators.required),
        price: new FormControl('', Validators.required),
        ingredients: new FormControl(this.selectedIngredients)
      });

    } else {
      this.title_form = 'Modifier';
      // On récupère l'objet courant
      this.id_to_update = this.activatedRoute.snapshot.params['id'];
      this.pizzaService.getById(this.id_to_update).subscribe(
        data => {
          this.selectedPizza = data;
          console.log(this.selectedPizza);
          this.selectedIngredients = ingredientToArrayIds(data);
          console.log(this.selectedIngredients);
          // On initialise le form
          this.form = new FormGroup({
            id_to_update: new FormControl(this.id_to_update, Validators.required),
            name: new FormControl(this.selectedPizza.name, Validators.required),
            description: new FormControl(this.selectedPizza.description, Validators.required),
            price: new FormControl(this.selectedPizza.price, Validators.required),
            ingredients: new FormControl(this.selectedIngredients)
          });
        },
        () => {
          // On redirige
          this.router.navigate(['/pizzas']);
        }
      );
    }
  }

  onSubmit() {
    // SI ON AJOUTE
    if (this.actual_form === 'add') {
      this.pizzaService.create(this.form.value).subscribe(
        () => this.result = {
          success: true,
          message: 'La pizza a été enregistrée.'
        },
        () => this.result = {
          success: false,
          message: 'Un problème a été rencontré durant l\'enregistrement de la pizza.'
        }
      );
    } else {
      // SI ON UPDATE
      this.pizzaService.update(this.id_to_update, this.form.value).subscribe(
        () => this.result = {
          success: true,
          message: 'La pizza a été enregistrée.'
        },
        () => this.result = {
          success: false,
          message: 'Un problème a été rencontré durant l\'enregistrement de la pizza.'
        }
      );
    }

  }

  toggleIngredient(id) {
    const index = this.selectedIngredients.indexOf(id);
    if (index !== -1) {
      this.selectedIngredients.splice(index, 1);
    } else {
      this.selectedIngredients.push(id);
    }
    console.log(this.selectedIngredients);
  }

}
