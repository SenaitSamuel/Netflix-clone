import firebase from "firebase";
import "firebase/firestore"; // for cloud firestore

const firebaseConfig = {
  apiKey: "AIzaSyDo4qzczfwEbCFa5u33UOXsamaIDvZgUQg",
  authDomain: "netflix-clone-b4ddd.firebaseapp.com",
  projectId: "netflix-clone-b4ddd",
  storageBucket: "netflix-clone-b4ddd.appspot.com",
  messagingSenderId: "769672060934",
  appId: "1:769672060934:web:5d582030ed424216fd2387",
  measurementId: "G-NP1EDLMJ9J",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
