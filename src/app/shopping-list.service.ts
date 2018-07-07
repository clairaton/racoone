import { Ingredient } from './shared/ingredient.model';


export class ShoppingListService{
  
	
  ingredients:Ingredient[]=[];
  //with firebase DB Connection :
  // firebase.database().ref('ingredients/').on('value',(data)=>{data.val()}) 
  
  addIngredient=(ingData:Ingredient)=>{
  	if(!!ingData.name && ingData.name!='New Element'){
      this.ingredients.push(new Ingredient(ingData.name,ingData.amount)); 
    }
  }

  ingredientSearch=(ingData:Ingredient)=>{
  	for(let i=0;i<this.ingredients.length;i++){
      if(this.ingredients[i].name==ingData.name){
        return i;
      };
    }
  }

  ingredientDelete=(ingData:Ingredient)=>{
  	let i=this.ingredientSearch(ingData);
  	this.ingredients.splice(i,1);
  }

  ingredientChange=(ingData:Ingredient)=>{
  	let i=this.ingredientSearch(ingData);
  	this.ingredients[i].name=ingData.name;
  	this.ingredients[i].amount=ingData.amount;
  }

  ingredientCheckBeforeAdd=(ingData:Ingredient)=>{
    let alreadyHere=false;
    if(!!ingData){
      if(this.ingredientSearch(ingData)>=0){
      	this.ingredients[this.ingredientSearch(ingData)].amount+=ingData.amount;
        alreadyHere=true;
      }
      if(!alreadyHere)this.addIngredient(ingData);
    }
  }

  ingredientClearList=()=>{
    this.ingredients=[];
  }

  constructor(){}

}