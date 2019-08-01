import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDY0rCNZNZQuNlbahrpoyAaFAmV5yxDOSo",
  authDomain: "crwn-db-8bc6c.firebaseapp.com",
  databaseURL: "https://crwn-db-8bc6c.firebaseio.com",
  projectId: "crwn-db-8bc6c",
  storageBucket: "",
  messagingSenderId: "799273656673",
  appId: "1:799273656673:web:85dda45d5236e799"
};

export const createUserProfileDocument = async (userAuthenticated, additionalData) => {
  if(!userAuthenticated) return;
  
  const userRef = firestore.doc(`users/${userAuthenticated.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const {displayName, email} = userAuthenticated;
    const createdAt = new Date();
    
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;