// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8PGD4bbWIrjGN_zyEYCLCr-RWIRMSV3g",
  authDomain: "computer-parts-manufactu-88a04.firebaseapp.com",
  projectId: "computer-parts-manufactu-88a04",
  storageBucket: "computer-parts-manufactu-88a04.appspot.com",
  messagingSenderId: "490544009973",
  appId: "1:490544009973:web:b14a179fbec0fd91fdabbc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;