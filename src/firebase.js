// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCS86io5cZ87ewjm-C0aR8w2hSpfMHn2fU",
  authDomain: "facebook-clone-5aecc.firebaseapp.com",
  // databaseURL: "https://facebook-clone-5aecc.firebaseio.com",
  projectId: "facebook-clone-5aecc",
  storageBucket: "facebook-clone-5aecc.appspot.com",
  messagingSenderId: "342132925314",
  appId: "1:342132925314:web:a4aecea229bb94233ae59b",
  measurementId: "G-2KZ846N9BW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth(); 
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;