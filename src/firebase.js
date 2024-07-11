
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {getAuth, GoogleAuthProvider, onAuthStateChanged,
    signInWithPopup,
    signOut} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDbEzRit_AgUvWRojvE7RSHs1uGuruLFiU",
    authDomain: "react-aea93.firebaseapp.com",
    projectId: "react-aea93",
    databaseURL: "https://react-aea93-default-rtdb.firebaseio.com/" ,
    storageBucket: "react-aea93.appspot.com",
    messagingSenderId:"621201850536",
    appId: "1:621201850536:web:158192eb52c82295dd029d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export default app;
export { auth, provider, onAuthStateChanged, signInWithPopup, signOut };
