import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";

import { MatButtonModule, MatToolbarModule } from "@angular/material";

import { AppComponent } from "./app.component";
import { AuthService } from "./services/auth.service";

import { firebaseConfig } from "../config";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
