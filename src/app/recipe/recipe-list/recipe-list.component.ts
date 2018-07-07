import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import { RecipeService } from '../recipe.service';


import { Observable } from 'rxjs/Observable'; 


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  providers:[RecipeService]
})
export class RecipeListComponent implements OnInit {

	recipes:Recipe[];
  recipeObservable: Observable<any[]>;
	@Output() recipeWasSelected= new EventEmitter <Recipe>()

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.recipes=this.recipeService.recipes;
  }

  onRecipeSelected=(recipe: Recipe)=>{
    this.recipeWasSelected.emit(recipe);
  }


}
