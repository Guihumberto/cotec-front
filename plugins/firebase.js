import firebase from "firebase/app";
require("firebase/auth");
require("firebase/firestore");
require("firebase/storage");


const firebaseConfig = {
    apiKey: "AIzaSyAovyPBe3KEEfRrAIOpiWjK5tS-QFA9pnk",
    authDomain: "nuxt-cotec.firebaseapp.com",
    projectId: "nuxt-cotec",
    storageBucket: "nuxt-cotec.appspot.com",
    messagingSenderId: "451473874685",
    appId: "1:451473874685:web:179257ef2954fa79272894"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}


const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {firebase, db, auth, storage}