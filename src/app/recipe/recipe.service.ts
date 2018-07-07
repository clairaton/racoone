import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

export class RecipeService{
	
  recipes:Recipe[]=[
    new Recipe('darth_vador','Darth Vador','Worst DAD ever!!!!','https://vignette.wikia.nocookie.net/characterprofile/images/f/f6/Darth_vader_9_render_by_aracnify-d92wamu.png/revision/latest/scale-to-width-down/190?cb=20160203192012', [new Ingredient('Strength',100),new Ingredient('Wisdom',60), new Ingredient('Agility',80), new Ingredient('Cruelty',75)]),
    new Recipe('yoda','Yoda','Best Master ever ever ...','https://www.komar.de/media/catalog/product/cache/4/image/780x/17f82f742ffe127f42dca9de82fb58b1/1/4/14721_star_wars_yoda_ma_1.jpg', [new Ingredient('Strength',75),new Ingredient('Wisdom',100), new Ingredient('Agility',100), new Ingredient('Goodwill',75)])
  ];
  
  addRecipe=(recipe:Recipe)=>{
  	this.recipes.push(recipe);
  }
  
  recipeSearch=(recipe:Recipe)=>{
	for(let i=0;i<this.recipes.length;i++){
      if(this.recipes[i].title==recipe.title){
        return i;
      };
    }
  }

recipeDelete=(recipe:Recipe)=>{
  let i=this.recipeSearch(recipe);
  this.recipes.splice(i,1);
}

  recipeCheckBeforeAdd=(recipe:Recipe)=>{
    let alreadyHere=false;
    if(!!recipe){
      if(this.recipeSearch(recipe)>=0){
        alreadyHere=true;
      }
      if(!alreadyHere)this.addRecipe(recipe);
    }
  }

}