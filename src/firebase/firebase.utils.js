import firebase from 'firebase/compat/app';

import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyBhRg-xRnzkDKlvR5ScKcZWIaYNp9bpreM',
  authDomain: 'crwn-db-b841a.firebaseapp.com',
  projectId: 'crwn-db-b841a',
  storageBucket: 'crwn-db-b841a.appspot.com',
  messagingSenderId: '547222939773',
  appId: '1:547222939773:web:ce8e5757328b869080e914',
  measurementId: 'G-W6RJRES537',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;

  console.log(snapshot);
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
