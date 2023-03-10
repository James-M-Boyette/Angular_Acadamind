import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms"; // Imported here
// import { HttpModule } from "@angular/http";
// import { HttpClient } from "@angular/common/http";

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { AlertWarningComponent } from './alerts/alert-warning/alert-warning.component';
import { AlertSuccessComponent } from './alerts/alert-success/alert-success.component';
import { AlertAssignmentComponent } from './alerts/alert-assignment/alert-assignment.component';
import { ServerAssignmentFinalComponent } from './server-assignment-final/server-assignment-final.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    AlertWarningComponent,
    AlertSuccessComponent,
    AlertAssignmentComponent,
    ServerAssignmentFinalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, // This allows us to use Angular's ngImport directive (I guess they're baked-in to larger functions?)
    // HttpClient,
  ],
  providers: [],
  bootstrap: [AppComponent, ServerComponent, AlertWarningComponent, AlertSuccessComponent, ] // An array of all components Angular should be aware of at the time of compiling
})
export class AppModule { }
