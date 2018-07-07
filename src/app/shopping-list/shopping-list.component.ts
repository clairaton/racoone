import { Component, OnInit, Input, Output, EventEmitter, OnChanges  } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
  
})
export class ShoppingListComponent implements OnInit, OnChanges {
  	ingredients:Ingredient[]=[]; // @TODO:=> Service shoppingList
  	@Input() shopElement:string='New Element';
  	@Input() shopElementQty:number=1;
    @Input('ing') ing:Ingredient; 

  constructor(private shoppingListService: ShoppingListService) { 
  }
  
  ngOnChanges(){

    if(!!this.ing){
      this.shoppingListService.ingredientCheckBeforeAdd(this.ing);
      this.ing=null;
    }

  }

  ngOnInit() {
    this.ingredients = this.shoppingListService.ingredients;
  }

  onAddingElement=(ingredientData)=>{
    if (!!ingredientData && !!ingredientData.name){
      ingredientData.amount=!!ingredientData.amount?ingredientData.amount:1;
      let ing=new Ingredient(ingredientData.name,ingredientData.amount);
      this.shoppingListService.ingredientCheckBeforeAdd(ing);
    } 
    this.shopElement='New Element';
    this.shopElementQty=1;
  }

  onChangeElement=(e)=>{
    let elemName=e.target.parentNode.parentNode.querySelector(".elem-name").innerHTML;
    let elemAmount=e.target.parentNode.parentNode.querySelector(".elem-qty").innerHTML;
    this.shoppingListService.ingredientChange(new Ingredient(elemName,elemAmount));
  }

  onDeleteElement=(e)=>{
    let elemName=e.target.parentNode.parentNode.querySelector(".elem-name").innerHTML;
    let elemAmount=e.target.parentNode.parentNode.querySelector(".elem-qty").innerHTML;
    this.shoppingListService.ingredientDelete(new Ingredient(elemName,elemAmount));
  }

  clearList=()=>{
    this.shoppingListService.ingredientClearList();
    this.ingredients = this.shoppingListService.ingredients;
  }

}
