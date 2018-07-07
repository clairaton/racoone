import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { RecipeService } from './recipe.service';
import { ActivatedRoute } from '@angular/router';
 

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  providers:[RecipeService]
})

export class RecipeComponent implements OnInit {
  selectedRecipe: Recipe;
  @Output() ingredientAddToSL=new EventEmitter<Ingredient>();
  @Output() allIngredientAddToSL=new EventEmitter<Ingredient[]>();

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { 
  }

  ingredientAdd=(ing: Ingredient)=>{
  	this.ingredientAddToSL.emit(ing);
  }

  selectionOnLoad=()=>{
    const rec=this.recipeService.recipes;
    const id=!!this.route.snapshot.params.id?this.route.snapshot.params.id:null;
    if(!!id){
      for (let i=0;i<rec.length;i++){
        if (rec[i].id === id) return this.selectedRecipe=rec[i];
      }
    }
  }

  recipeSelection=(rec: Recipe)=>{
    this.selectedRecipe=rec;
  }

  ngOnInit() {
    this.selectionOnLoad();
  }


}