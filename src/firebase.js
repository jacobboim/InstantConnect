import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6U9A_AX0kP5MAsMaH-R2tuWqKWK9uITQ",
  authDomain: "whatsapp-react-clone-a11af.firebaseapp.com",
  projectId: "whatsapp-react-clone-a11af",
  storageBucket: "whatsapp-react-clone-a11af.appspot.com",
  messagingSenderId: "709087800469",
  appId: "1:709087800469:web:f7522619c24cf70ac83f9c",
  measurementId: "G-CKGCPSHP2C",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
