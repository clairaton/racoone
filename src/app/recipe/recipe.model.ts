import { Ingredient } from '../shared/ingredient.model';

export class Recipe{
	public id:String;
	public title:String;
	public description:String;
	public imagePath:String;
	public ingredients:Ingredient[];

	constructor(id: string, title: string, desc:string, imagePath:string, ingredients:Ingredient[]){
		this.id=id;
		this.title=title;
		this.description=desc;
		this.imagePath=imagePath;
		this.ingredients=ingredients;
	}
}