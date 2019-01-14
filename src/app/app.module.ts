import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AngularFireModule } from "@angular/fire";
import { MatToolbarModule } from "@angular/material";

import { firebaseConfig } from "../config";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  exports: [
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
