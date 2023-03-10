import { Component } from '@angular/core';

@Component({ // This is a TypeScript Decorator - one which we're passing a JS object
  selector: 'app-root', // Equivilent of an HTML tag. *MAKE SURE* it's unique
  // Note: the following are examples of other formulations of selectors - the proper declaration of each is reflected in the component.html (commented-out)
  // selector: 'appRoot', // Note that you can use kabab, camel, or even snake casings
  // selector: '[app-root]', // This targets the css *attribute*
  // selector: '.app-root', // This targets the css *class*

  templateUrl: './app.component.html',
  // template: `<app-server></app-server>Some stuff here<another-component></another-component>`, // Note: you *can* use your components directly, but it isn't adviseable beyond three lines of code ... maybe there would be a reason to have a parent component that combines three child components in this way? But in general, it seems messy

  styleUrls: ['./app.component.css'] // Notice that this is an array - you could, in theory, use multiple style sheets

  // Note that, here again, you can write css in your component
  // styles: [`
  //   h3 {
  //     color: blue
  //   }
  // `]
})
export class AppComponent { // This is a normal TypeScript class. Without the above import & decorator, Angular doesn't know what to do with it
  title = 'my-first-app'; // This is a property of our class. We can use it to store data, function logic, etc. and even bind its contents/output to elements in our .html.
  name = 'James' 
}
