import firebase from "firebase";
import "./index"

var id = (window.location.href.slice(window.location.href.indexOf("?id=") + 4, window.location.href.length));
const ref = firebase.database().ref(encodeURIComponent(id).split('.').join('%2E'));
ref.remove();

