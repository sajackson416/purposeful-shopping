import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('Tasty Schitzel', 'A super tasty schitzel - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Oscar_schnitzel_at_Grilli_Toro.jpg/1280px-Oscar_schnitzel_at_Grilli_Toro.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe('Big Fat Burger', 'What else do you need to say?',
      'https://aht.seriouseats.com/images/20100331-fatburger-primary.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Buns', 2)
      ])
  ];

  getRecipes(): Recipe[] {
    return this.recipes.slice(); // Returns a copy, not a reference
  }
}
