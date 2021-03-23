import firebase from '@firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyBI7Xeq_SDrNtGog6dTsvwZFF2Q7_w1vu4",
    authDomain: "let-schat-dc533.firebaseapp.com",
    projectId: "let-schat-dc533",
    storageBucket: "let-schat-dc533.appspot.com",
    messagingSenderId: "321150846901",
    appId: "1:321150846901:web:d47a4a8ee1508509ee3bfc",
    measurementId: "G-5LLRB42W5W"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

const provider1 = new firebase.auth.FacebookAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithFacebook = () => auth.signInWithPopup(provider1);


export default firebase;