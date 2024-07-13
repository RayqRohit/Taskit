
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {getAuth, GoogleAuthProvider, onAuthStateChanged,
    signInWithPopup,
    signOut} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBgSDjIF6RnZykUPHLryIgGB0WsqEAyJcM",
  authDomain: "taskit-dev.firebaseapp.com",
  projectId: "taskit-dev",
  databaseURL : "https://taskit-dev-default-rtdb.firebaseio.com/",
  storageBucket: "taskit-dev.appspot.com",
  messagingSenderId: "386826932735",
  appId: "1:386826932735:web:fd1228bb0daefc896e17ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export default app;
export { auth, provider, onAuthStateChanged, signInWithPopup, signOut };
