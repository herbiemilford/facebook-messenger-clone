import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAidY6YD7zlPh3dBp4yDNMAWiuG6BEg2nk",
  authDomain: "facebook-messenger-clone-1a8a2.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-1a8a2.firebaseio.com",
  projectId: "facebook-messenger-clone-1a8a2",
  storageBucket: "facebook-messenger-clone-1a8a2.appspot.com",
  messagingSenderId: "98582952273",
  appId: "1:98582952273:web:9cd4ee7d78b63424effb70",
  measurementId: "G-8DH3B2560H"
});

const db = firebaseApp.firestore();

export default db;
