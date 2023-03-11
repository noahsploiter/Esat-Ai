// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAz1AJIasQEcAAJauxkW0bX_bpQspAJIQE",
  authDomain: "esat-ai-ba93c.firebaseapp.com",
  projectId: "esat-ai-ba93c",
  storageBucket: "esat-ai-ba93c.appspot.com",
  messagingSenderId: "14937439625",
  appId: "1:14937439625:web:35562fb435d070ac373558",
  measurementId: "G-71Y248QVS1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


export const initFirebase = () => {
    return app;
}
