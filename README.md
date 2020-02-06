# ngChangeDetectionTutorial

Source: [Angular 9/8 Change Detection Tutorial with Example](https://www.positronx.io/understand-angular-change-detection-strategy/)
Date: 02/06/2020

---

Notes:

### app.component.html

```
<input #newFruit type='text' placeholder='Enter a new fruit'>
<button (click)='addFruit(newFruit.value)'>
	Add Fruit
</button>

<app-child [data]="fruits"></app-child>

```

- #newFruit: 
	- template reference variable: allows us to access the values of a DOM element properties
	- so in this case #newFruit is going to have a value property (whatever we enter into the input field)

- (click): 
	- event binding 
	- runs addFruit() method

- [data]: 
	- Property binding: updates the value of a certain variable in component(model) and displays it in the view
	- So this is binding data to the fruits array.


### child.component.ts

```
	export class ChildComponent {

		@Input() data: string[];
		constructor() { }  

	}
	
```

- @Input() 
	- A decorator used for obtaining the data that is passed from a component. 
	- We must import Input from @angular/core
	- Used to transmit data from parent component to the child component
	- We can alias, or rename the variable, the decorator
		- `@Input('data') newVariableName: type;
	