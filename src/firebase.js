import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCHqeQholQVgJ5t6-wHbUuCGjNduK9Bg4A",
  authDomain: "farmersdata-7bb7e.firebaseapp.com",
  databaseURL: "https://farmersdata-7bb7e.firebaseio.com",
  projectId: "farmersdata-7bb7e",
  storageBucket: "farmersdata-7bb7e.appspot.com",
  messagingSenderId: "80049219426",
  appId: "1:80049219426:web:d3de597c89431b1bca6e3b",
  measurementId: "G-PHFV7R9MML"
};

var fire = firebase.initializeApp(firebaseConfig);

// export const auth = fire.auth();
// export const db = fire.database();

export default fire;
