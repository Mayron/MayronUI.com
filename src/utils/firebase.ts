import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_JCD_R2aE4db5om5fa4ojXG7dvLgIwE0",
  authDomain: "openspark-1e4bc.firebaseapp.com",
  databaseURL: "https://openspark-1e4bc.firebaseio.com",
  projectId: "openspark-1e4bc",
  storageBucket: "openspark-1e4bc.appspot.com",
  messagingSenderId: "796619354810",
  appId: "1:796619354810:web:b3131ddba5e630c8d78883",
  measurementId: "G-GB1B7T2KEF",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (
  userAuth: firebase.User | null,
  additionalData: any = {},
): Promise<firebase.firestore.DocumentReference | undefined> => {
  if (!userAuth) return;

  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        lastOnline: createdAt,
        isOnline: true,
        ...additionalData,
      });
    } catch (error) {
      console.error("error creating user", (error as Error).message);
    }
  }

  return userRef;
};

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
googleAuthProvider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle: any = () => auth.signInWithPopup(googleAuthProvider);

export default firebase;
