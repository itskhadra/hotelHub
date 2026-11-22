import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC5efKQ2-yt2o-ng5kYnja2lMDfzv3GQ4I",
  authDomain: "hotelhub-d01cf.firebaseapp.com",
  projectId: "hotelhub-d01cf",
  storageBucket: "hotelhub-d01cf.firebasestorage.app",
  messagingSenderId: "410000774842",
  appId: "1:410000774842:web:2d49ab82138cacbf38d483",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);