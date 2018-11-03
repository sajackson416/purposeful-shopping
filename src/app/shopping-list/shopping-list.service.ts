// Manage list, add ingredient
import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter} from '@angular/core';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<void>();
  private ingredients: Ingredient[] = [
    new Ingredient('apple', 5),
    new Ingredient('tomato', 10)
  ];

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  /*  addIngredient(ingredient: Ingredient) {
      this.ingredients.push(ingredient);
      this.ingredientsChanged.emit();
    }*/

  addIngredients(...ingredients: Ingredient[]) {
    this.ingredients.push.apply(null, ingredients);
    this.ingredientsChanged.emit();
  }
}
