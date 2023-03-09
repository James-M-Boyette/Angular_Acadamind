import { Component } from '@angular/core';

@Component({ // This is a TypeScript Decorator - one which we're passing a JS object
  selector: 'app-root', // Equivilent of an HTML tag. *MAKE SURE* it's unique
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { // This is a normal TypeScript class. Without the above import & decorator, Angular doesn't know what to do with it
  title = 'my-first-app'; // This is a property of our class. We can use it to store data, function logic, etc. and even bind its contents/output to elements in our .html.
  name = 'James' 
}
