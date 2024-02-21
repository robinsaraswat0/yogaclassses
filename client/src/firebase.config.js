// Import the functions you need from the SDKs you need
import {initializeApp}from 'firebase/app';
import  {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUq-rWy2nKhl6ybYIFkEC27KeWT-CPhD4",
  authDomain: "yoga-6bfde.firebaseapp.com",
  projectId: "yoga-6bfde",
  storageBucket: "yoga-6bfde.appspot.com",
  messagingSenderId: "118671987055",
  appId: "1:118671987055:web:034c86a391aec406fed89a"
};

// Initialize Firebase
const app=initializeApp(firebaseConfig);
 const auth=getAuth(app);
export default auth;