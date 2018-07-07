import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@Output() ingredientAdded= new EventEmitter<{name:string,amount:number}>();
//shopElements:any=[];
@Input() shopElement:string;
@Input() shopElementQty:number;

  onAddElement=()=>{
  	if(!!this.shopElement && this.shopElement!='New Element'){
		this.ingredientAdded.emit({name:this.shopElement,amount:this.shopElementQty});
  		this.shopElement='New Element';
  		this.shopElementQty=1;
  	}
  }

  constructor() { }

  ngOnInit() {
  }

}
