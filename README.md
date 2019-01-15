# Firebase + Angular authentication base project

This is a [Firebase](https://firebase.google.com/) + [Angular](https://angular.io/) base project which provides an OAuth2 Google connection through [Firebase Authentication](https://firebase.google.com/docs/auth/).

## Getting Started

Just clone this project with

```
git clone https://github.com/giustini/firebase-angular-auth.git
```

and start building your awesome Angular app with Google authentication.

## Setting up your app

You must sign in Firebase with your Google account and create your project. Then click the "Add firebase to your web app" button and copy the firebase config it provides, create a `/src/config.ts` file and paste the config in it. This file content should look like this:

```
export const firebaseConfig = {
  apiKey: '<YOU_API_KEY>',
  authDomain: '<YOUR_AUTH_DOMAIN>',
  databaseURL: '<YOUR_DATABASE_URL>',
  projectId: '<YOUR_PROJECT_ID>',
  storageBucket: '<YOUR_STORAGE_BUCKET>',
  messagingSenderId: '<YOUR_MESSAGE_SENDER_ID'
};

```
**Please remember this file must NOT be commited.**

## Installation

### Install npm packages
Install the npm packages described in the `package.json` file:
```
npm install
```

### Run development server

The `npm start` command first compiles the application, then simultaneously re-compiles and runs the `lite-server`. Both the compiler and the server watch for file changes.
```
npm start
```
and navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. You can shut the server down manually with `Ctrl-C`.

## Dependencies

This project uses the official [`angularfire2`](https://github.com/angular/angularfire2) client library for Firebase and Angular by installing the [`firebase`](https://www.npmjs.com/package/firebase) and [`@angular/fire`](https://www.npmjs.com/package/@angular/fire) dependencies.

The UI implementation has been made using [`Angular Material`](https://material.angular.io/) and [`Angular Material Themes`](https://material.angular.io/guide/theming/).

## Deploy

In order to deploy your app in Firebase is necessary to install[`firebase-tools`](https://github.com/firebase/firebase-tools) globally:
```
npm install -g firebase-tools
```

Then you must generate the poduction-ready Angular code. So type
```
ng build --prod
```
and all the build artifacts will be stored in the `dist/` directory.

Finally navigate to the root directory of your project and execute the following commands to deploy it on Firebase Hosting:
```
firebase login
firebase init
firebase deploy
```

## Live example

This base project is also deployed in Firebase and it can be accessed [here](https://fire-ng-auth-b5c2c.firebaseapp.com/).
