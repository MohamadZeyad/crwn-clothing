import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyAtPIi2MKl5wwHKvqhrPUPvzv8EcxEZLHU",
  authDomain: "crwb-db-e6aa5.firebaseapp.com",
  databaseURL: "https://crwb-db-e6aa5.firebaseio.com",
  projectId: "crwb-db-e6aa5",
  storageBucket: "crwb-db-e6aa5.appspot.com",
  messagingSenderId: "247754288325",
  appId: "1:247754288325:web:312e9981e2e9644ca954ac",
  measurementId: "G-N14YW12XNS"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // const userRef = firestore.doc("users/StNMTDwC6sQVTlYjY0qU");
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
      console.log("error creatig user", error.message);
    }
  }
  console.log(snapShot);
  console.log(userRef);
  // console.log(userAuth);
  return userRef;
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
