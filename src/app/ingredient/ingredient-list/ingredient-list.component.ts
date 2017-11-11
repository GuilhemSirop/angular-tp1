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
    });
  }

  deleteIngredient(id) {
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
    );

  }

}
