import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms"; // Imported here
// import { HttpModule } from "@angular/http";
// import { HttpClient } from "@angular/common/http";

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // This allows us to use Angular's ngImport directive (I guess they're baked-in to larger functions?)
    // HttpClient,
  ],
  providers: [],
  bootstrap: [AppComponent, ServerComponent] // An array of all components Angular should be aware of at the time of compiling
})
export class AppModule { }
