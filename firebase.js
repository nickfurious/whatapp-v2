import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDRSFKpLAdSYmU_4LuhU_ECCS7hf4HkkRc",
  authDomain: "whatsapp-2-755a0.firebaseapp.com",
  projectId: "whatsapp-2-755a0",
  storageBucket: "whatsapp-2-755a0.appspot.com",
  messagingSenderId: "997923122326",
  appId: "1:997923122326:web:20841814e542ba34eaa6b7",
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };