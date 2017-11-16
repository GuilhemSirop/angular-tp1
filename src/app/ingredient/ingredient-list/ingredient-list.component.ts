import {Component, OnInit} from '@angular/core';

import {IngredientService} from '../../shared/services/ingredient/ingredient.service';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent implements OnInit {

  listIngredient = [];
  result: any;

  constructor(private ingredientService: IngredientService) {
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
        console.log(this.listIngredient);
        this.result = {
          success: true,
          message: `L'ingrédient a été supprimé.`
        };
      },
      () => this.result = {
        success: false,
        message: `Un problème a été rencontré durant la suppression de l'ingredient.`
      }
    );

    /* AVANT on supprimer mais cela n'est pas l'idéal puisque sinon on devrait supprimer pour chaque pizza qui possède cet ingredient, l'ingrédient
    this.ingredientService.deleteById(id).subscribe(
      () => {
        this.listIngredient = this.listIngredient.filter(aIngredient => aIngredient._id !== id);
        this.result = {
          success: true,
          message: `L'ingredient a été supprimée.`
        };
      },
      () => this.result = {
        success: false,
        message: `Un problème a été rencontré durant la suppression de l'ingredient.`
      }
    ); */

  }

}
