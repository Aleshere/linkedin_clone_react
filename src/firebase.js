import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAJ7GFKdu1Te2LgJoa8S6LJEOayH5dQcQg',
  authDomain: 'linkedin-clone-a323b.firebaseapp.com',
  projectId: 'linkedin-clone-a323b',
  storageBucket: 'linkedin-clone-a323b.appspot.com',
  messagingSenderId: '1069779965734',
  appId: '1:1069779965734:web:d2367c73b514c2bb39d3e7',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
