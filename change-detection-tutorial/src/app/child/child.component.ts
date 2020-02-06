import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'], 
	changeDetection: ChangeDetectionStrategy.OnPush
})

export class ChildComponent {

	@Input() data: string[];
	@Input() parentCount: number;
	
	@Output() change: EventEmitter<number> = new EventEmitter<number>();
	
	constructor(){}
	
	
	
  
	

}
