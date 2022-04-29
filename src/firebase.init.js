// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAPpgzQGgqdO55j0F1LP3zbXqM0hDxbXc8",
    authDomain: "unpaid-worker.firebaseapp.com",
    projectId: "unpaid-worker",
    storageBucket: "unpaid-worker.appspot.com",
    messagingSenderId: "930397714619",
    appId: "1:930397714619:web:730748ffefbf614448119e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;