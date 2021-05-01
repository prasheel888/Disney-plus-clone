import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBA11lvPC_UpYC0gFN0Fwfhsy_J2TxyEbQ",
  authDomain: "disney-plus-build.firebaseapp.com",
  projectId: "disney-plus-build",
  storageBucket: "disney-plus-build.appspot.com",
  messagingSenderId: "20840876264",
  appId: "1:20840876264:web:d0f4058b5b373a5f13215d",
  measurementId: "G-HTG42EC0QF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
