import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAUYA0UwNPA9iyWYOmJRoTaCPuiR6ZAeRo",
    authDomain: "ezspa-a30d1.firebaseapp.com",
    projectId: "ezspa-a30d1",
    storageBucket: "ezspa-a30d1.appspot.com",
    messagingSenderId: "302171667250",
    appId: "1:302171667250:web:d4c0b8d3adb85dcec3b52b",
    measurementId: "G-10SVK4QHWQ"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);
export { auth, database };