import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAfx2s2fOtnL3pldD4aRE9I-8bWTT36JqY",
    authDomain: "qwitter-8f315.firebaseapp.com",
    projectId: "qwitter-8f315",
    storageBucket: "qwitter-8f315.appspot.com",
    messagingSenderId: "160300601001",
    appId: "1:160300601001:web:e071eebc9b2d110d4423b8"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
let db = firebase.firestore()

export default db