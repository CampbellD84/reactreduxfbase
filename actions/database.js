import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCYAmEpf0lMsO1uRKvaJp4AyZXqy-ufE78",
  authDomain: "reduxreactfbase.firebaseapp.com",
  databaseURL: "https://reduxreactfbase.firebaseio.com",
  storageBucket: "reduxreactfbase.appspot.com",
  messagingSenderId: "112959826311"
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;
