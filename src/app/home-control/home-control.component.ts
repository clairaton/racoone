import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-control',
  templateUrl: './home-control.component.html',
  styleUrls: ['./home-control.component.css']
})
export class HomeControlComponent implements OnInit {
  
  domos={
  	lights:{
  		hall:{
  			name:'Hall',
  			status:'On'
  		},
  		living:{
  			name:'Living Room',
  			status:'Off'
  		},
  		kitchen:{
  			name:'Kitchen',
  			status:'Off'
  		}
  	},
  	opening:{
  		door:{
  			name:'Door',
  			status:false
  		},
  		garden:{
  			name:'Garden',
  			status:true
  		}
  	},
  	temperature:{
  		all:{
  			name:'general',
  			value:20
  		}
  	}
  };

  constructor() { }

  ngOnInit() {
  }

  onPlusClicking=(e)=>{
  	return this.domos.temperature.all.value+=1;
  }

  onMinusClicking=(e)=>{
  	return this.domos.temperature.all.value-=1;
  }

  changingLightStatus=(name)=>{
  	let val=this.domos.lights[name].status;
  	return this.domos.lights[name].status=val==='Off'?'On':'Off';
  }
}
