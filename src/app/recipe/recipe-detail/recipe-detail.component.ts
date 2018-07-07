import { Component, OnInit, Input, Output, EventEmitter, NgZone } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../../shopping-list.service';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})

export class RecipeDetailComponent implements OnInit {
  @Input() recipe:Recipe;
  @Output() ingredientAdded=new EventEmitter<Ingredient>();

  constructor(private _ngZone: NgZone,private shoppingListService: ShoppingListService ) { }

  ngOnInit() {
  }

  addIngredientToShopList=(ing: Ingredient)=>{
  	this.ingredientAdded.emit(ing);
    this.shoppingListService.ingredientCheckBeforeAdd(ing);
  	this.addingMessage("Ingredient has just been added to the Shopping List")
  }

  addAll=(ings:Ingredient[])=>{
    for(let i=0;i<ings.length;i++){  
      this.shoppingListService.ingredientCheckBeforeAdd(ings[i]);
    }
    this.addingMessage("All ingredients has been added to the Shopping List");
  }

  addingMessage=(message:string)=>{

    this._ngZone.runOutsideAngular(()=>{  
      const addedMsg=document.createElement("p");
      addedMsg.innerHTML=message //"Ingredient has just been added to the Shopping List";
      addedMsg.id="temp-message";
      let tableu=document.querySelector('app-recipe-detail table');
      !!tableu&&!!tableu.querySelector('p')?tableu.removeChild(tableu.querySelector('p')):'';
      tableu.appendChild(addedMsg);
      setTimeout(()=>{
        tableu=document.querySelector('app-recipe-detail table');
        !!tableu.querySelector('p')?tableu.removeChild(tableu.querySelector('p')):'';
      },2000);
      return "message added";
    });
  }


}
