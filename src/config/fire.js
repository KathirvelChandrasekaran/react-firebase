import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBQj8LCfYMtMZgcejlgb889RVyb094oQrI",
  authDomain: "efarmer-08051998.firebaseapp.com",
  databaseURL: "https://efarmer-08051998.firebaseio.com",
  projectId: "efarmer-08051998",
  storageBucket: "efarmer-08051998.appspot.com",
  messagingSenderId: "970646718219",
  appId: "1:970646718219:web:e55e51b2f65306171cc40e",
  measurementId: "G-JTXCSZB640"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
