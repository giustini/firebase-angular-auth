import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AngularFireModule } from "@angular/fire";
import { MatButtonModule, MatToolbarModule } from "@angular/material";

import { firebaseConfig } from "../config";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
