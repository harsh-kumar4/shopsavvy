import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBgCrubmZgWdQI01ue0w8i1cOkAsXxDw9w",
    authDomain: "shop-savvy-fc079.firebaseapp.com",
    projectId: "shop-savvy-fc079",
    storageBucket: "shop-savvy-fc079.appspot.com",
    messagingSenderId: "832470347453",
    appId: "1:832470347453:web:b6cf5c768c04a6be7b51d4",
    measurementId: "G-11XHSM4LQS"
  };
  const  firebaseApp=firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };