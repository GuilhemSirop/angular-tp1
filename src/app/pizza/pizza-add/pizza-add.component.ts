import {Component, OnInit} from '@angular/core';
import {Validators, FormControl, FormGroup} from '@angular/forms';
import {PizzaService} from '../../shared/services/pizza/pizza.service';

@Component({
  selector: 'app-pizza-add',
  templateUrl: './pizza-add.component.html',
  styleUrls: ['./pizza-add.component.css']
})
export class PizzaAddComponent implements OnInit {
  result: any;

  private form: FormGroup;

  constructor(private pizzaService: PizzaService) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
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
  }

}
