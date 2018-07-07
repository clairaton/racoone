import { Component, Output, EventEmitter } from '@angular/core';
import { Ingredient } from './shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ShoppingListService]
})
export class AppComponent {
	title:string="Racoon-E | Assist";
	menuItems:any=[{name:'Home Control',route:'home-control'},{name:'Shopping List',route:'shopping-list'}, {name:'Recipe',route:'recipe'} , {name:'Calendar',route:'calendar'}];
	itemMenu:string='Home Control';
	elemToAdd:Ingredient;

	onSelection=(selectionData:{item:string})=>{
		this.itemMenu=selectionData.item;
	}

	onAddingElementFromRecipe(ing:Ingredient){
		this.elemToAdd=ing;
	}
}
