import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAbDphoQLIaSS9kdyIiCH4x9ohnm_KpNn0",
    authDomain: "marline-react.firebaseapp.com",
    projectId: "marline-react",
    storageBucket: "marline-react.appspot.com",
    messagingSenderId: "757325116164",
    appId: "1:757325116164:web:62933114ae268721e85651",
    measurementId: "G-CLDRDKQ5S7"
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export { firestore };