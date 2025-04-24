import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCkzz_iroJM_ZocSCE6MEgs6yUb7xbhYbA",
    authDomain: "fortuneteller-cfaf7.firebaseapp.com",
    projectId: "fortuneteller-cfaf7",
    storageBucket: "fortuneteller-cfaf7.firebasestorage.app",
    messagingSenderId: "821868219535",
    appId: "1:821868219535:web:cc45efd2b0093df3e134fa"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };