import {Ingredient} from '../shared/ingredient.model';

export class Recipe {
  /*public name: string;
  public description: string;
  public imagePath: string; // url to the image from the web
  public ingredients: Ingredient[];*/

  constructor(
    public name: string,
    public description: string,
    public imagePath: string,
    public ingredients: Ingredient[]) {
    /*    this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.ingredients = ingredients;*/
  }
}
