import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('food', 'something tasty', 'https://i.ndtvimg.com/i/2017-10/diwali-food-menu_620x350_71507898681.jpg?down' +
      'size=630:380&output-quality=70&output-format=webp'),
    new Recipe('more food', 'another tasty thing', 'https://i.ndtvimg.com/i/2017-10/diwali-food-menu_620x350_71507898681.jpg?down' +
      'size=630:380&output-quality=70&output-format=webp')
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  constructor() {
  }

  ngOnInit() {
    //this.onRecipeSelect(this.recipes[0]);
  }

  onRecipeSelect(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
