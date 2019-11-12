import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAieJccsv025TKhY4vTa2q_2unDzJbyqF0",
  authDomain: "how-leftable.firebaseapp.com",
  databaseURL: "https://how-leftable.firebaseio.com",
  projectId: "how-leftable",
  storageBucket: "how-leftable.appspot.com",
  messagingSenderId: "843645624674",
  appId: "1:843645624674:web:6e655c73166c6428794c3b",
  measurementId: "G-PM42B0XCRE"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const db = firebase.firestore();
