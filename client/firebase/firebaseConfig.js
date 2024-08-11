// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAl8oteOOLdrvFz6Yhb7RZu_C_79tZ_q0U",
    authDomain: "chat-map-6729a.firebaseapp.com",
    projectId: "chat-map-6729a",
    storageBucket: "chat-map-6729a.appspot.com",
    messagingSenderId: "397974488633",
    appId: "1:397974488633:web:68f3b0c8a6fee15ce36fe8",
    measurementId: "G-5KK6L0TNV4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);