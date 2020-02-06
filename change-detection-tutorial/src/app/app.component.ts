import { Component } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fruits = ['Mango', 'Orange', 'Banana'];
	
	
	constructor(){}
	
	addFruit(item){
		// add fruit to fruits array

		this.fruits = [...this.fruits, item];
		
	}
	
	
}
