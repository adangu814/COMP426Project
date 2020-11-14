import firebase from "firebase";
import "firebase/auth"

const config = {
    apiKey: "AIzaSyA4BerkNz0aKaJPI8g4fXjujO9WzCsydRQ",
    authDomain: "hosting-demo-ab9bb.firebaseapp.com",
    databaseURL: "https://hosting-demo-ab9bb.firebaseio.com",
    projectId: "hosting-demo-ab9bb",
    storageBucket: "hosting-demo-ab9bb.appspot.com",
    messagingSenderId: "853968662016",
    appId: "1:853968662016:web:37be375349b58b029cb2e5",
    measurementId: "G-0QWCWG9MBX"
}

const fire = firebase.initializeApp(config);
export const auth = fire.auth();
export default fire;
