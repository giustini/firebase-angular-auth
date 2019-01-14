import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase/app";
import { User } from "../model/user.model";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  public user: User;

  constructor(private angularFireAuth: AngularFireAuth) {
    this.angularFireAuth.user.subscribe(authUser => {
      this.user = authUser ?
        new User(
          authUser.uid,
          authUser.displayName,
          authUser.email,
          authUser.photoURL
        ) : null;
    });

  }

  signIn() {
    return this.angularFireAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  signOut() {
    this.angularFireAuth.auth.signOut();
  }
}
