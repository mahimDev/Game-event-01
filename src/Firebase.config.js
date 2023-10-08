// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIghvBdTXKBKXi1Ypa2fGx1KJtaS5wn50",
  authDomain: "assingment-9-project-e316b.firebaseapp.com",
  projectId: "assingment-9-project-e316b",
  storageBucket: "assingment-9-project-e316b.appspot.com",
  messagingSenderId: "1004953521797",
  appId: "1:1004953521797:web:513b9f7b346d3d80e4e3ec",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
