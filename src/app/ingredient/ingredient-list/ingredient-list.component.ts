import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';

import {IngredientService} from '../../shared/services/ingredient/ingredient.service';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent implements OnInit {

  listIngredient = [];
  result: any;

  constructor(public toaster: ToastsManager,
              public vcr: ViewContainerRef,
              private ingredientService: IngredientService) {

    this.toaster.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.ingredientService.get().subscribe(data => {
      this.listIngredient = data;
      console.log(this.listIngredient);
    });
  }

  deleteIngredient(ingredient) {
    ingredient.deleted = true;

    this.ingredientService.update(ingredient._id, ingredient).subscribe(
      () => {
        this.listIngredient = this.listIngredient.filter(aIngredient => aIngredient._id !== ingredient._id);
        this.toaster.success(`L'ingredient a été supprimé.`, 'Supprimé !');
      },
      () => this.toaster.error(`Un problème a été rencontré durant la suppression de l'ingredient.`, 'Oups !')
    );


  }

}
