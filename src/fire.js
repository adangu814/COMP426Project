import firebase from "firebase";
import "firebase/auth"

const config = {
  apiKey: "AIzaSyBOzmUnLyXKmpdizByjhZqhwQ9TU8xejj0",
  authDomain: "hosting-demo-62001.firebaseapp.com",
  databaseURL: "https://hosting-demo-62001.firebaseio.com",
  projectId: "hosting-demo-62001",
  storageBucket: "hosting-demo-62001.appspot.com",
  messagingSenderId: "224261366308",
  appId: "1:224261366308:web:417b650798c9c8db9caeb1",
  measurementId: "G-VYDK7YHD9Z"
};

const fire = firebase.initializeApp(config);
export const auth = fire.auth();
export default fire;
