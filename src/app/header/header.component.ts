import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() items:any=[{name:'Home Control',route:'home-control'},{name:'Shopping List',route:'shopping-list'}, {name:'Recipe',route:'recipe'} , {name:'Calendar',route:'calendar'}];
  selection:string='Home Control';
  @Output() itemSelected=new EventEmitter<{item:string}>();

  menuSelection=(e)=>{
  	this.selection=(<HTMLInputElement>e.target).innerHTML;
  	this.itemSelected.emit({item:this.selection});
  }

  constructor() {}

  ngOnInit() {
  }

}
