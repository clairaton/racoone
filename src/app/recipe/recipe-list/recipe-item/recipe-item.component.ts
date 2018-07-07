import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input('rec') recipe: Recipe;
  @Output() recipeSelected= new EventEmitter <void>()

  constructor(private router : Router) { }

  onRecipeSelect=()=>{
    this.router.navigate(['/recipe',this.recipe.id],);
    this.recipeSelected.emit();
  }


  ngOnInit() {
  }

}