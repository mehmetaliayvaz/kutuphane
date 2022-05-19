// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnp_XERXf_Cduh_xzUBeRU2EhOILehT2Q",
  authDomain: "kutuphanemapp-ff649.firebaseapp.com",
  projectId: "kutuphanemapp-ff649",
  storageBucket: "kutuphanemapp-ff649.appspot.com",
  messagingSenderId: "930407350237",
  appId: "1:930407350237:web:39614f88cd830155290034",
  measurementId: "G-HHV70E7N6J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);





