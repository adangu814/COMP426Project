import firebase from "firebase";
import "./index"

var id = (window.location.href.slice(window.location.href.indexOf("?id=") + 4, window.location.href.length))
const ref = firebase.database().ref(id);
ref.remove();

