import {Component, OnInit} from '@angular/core';
import {Validators, FormControl, FormGroup} from '@angular/forms';
import {PizzaService} from '../../shared/services/pizza/pizza.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-pizza-add',
  templateUrl: './pizza-form.component.html',
  styleUrls: ['./pizza-form.component.css']
})
export class PizzaFormComponent implements OnInit {
  result: any;
  actual_form: string;
  id_to_update: number;
  selectedPizza: any;

  private form: FormGroup;

  constructor(private pizzaService: PizzaService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {

    this.actual_form = this.activatedRoute.snapshot.url[1].path;
  }

  ngOnInit() {

    // SI ON AJOUTE
    if (this.actual_form === 'add') {
      this.form = new FormGroup({
        name: new FormControl('', Validators.required),
        description: new FormControl('', Validators.required),
        price: new FormControl('', Validators.required)
      });

    } else {
      // On récupère l'objet courant
      this.id_to_update = this.activatedRoute.snapshot.params['id'];
      this.pizzaService.getById(this.id_to_update).subscribe(
        data => {
          this.selectedPizza = data;

          // On initialise le form
          this.form = new FormGroup({
            id_to_update: new FormControl(this.id_to_update, Validators.required),
            name: new FormControl(this.selectedPizza.name, Validators.required),
            description: new FormControl(this.selectedPizza.description, Validators.required),
            price: new FormControl(this.selectedPizza.price, Validators.required)
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
          success: true,
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
          success: true,
          message: 'Un problème a été rencontré durant l\'enregistrement de la pizza.'
        }
      );
    }

  }

}
