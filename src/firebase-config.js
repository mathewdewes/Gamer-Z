import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAZn-qzBagV0lXVo7TeNZVFl7efW6dlrVo",
    authDomain: "gamer-z-cddb1.firebaseapp.com",
    projectId: "gamer-z-cddb1",
    storageBucket: "gamer-z-cddb1.appspot.com",
    messagingSenderId: "396105026841",
    appId: "1:396105026841:web:8cf82728efb852868d0988",
    measurementId: "G-9MSSP8NMGY"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
  export const auth = getAuth(app);