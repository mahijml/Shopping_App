import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCT3KTiFzkmHiP-A8jo3hIX9cHSpskSWDw",
  authDomain: "e-shopping-b391c.firebaseapp.com",
  projectId: "e-shopping-b391c",
  storageBucket: "e-shopping-b391c.appspot.com",
  messagingSenderId: "864841497656",
  appId: "1:864841497656:web:21326513c01abe32317acd",
  measurementId: "G-9FVXRRF61M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export default app;