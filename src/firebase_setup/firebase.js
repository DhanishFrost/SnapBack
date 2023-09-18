import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAxYBlB9fQlXNIPfkhlb5PR4MbEvdnFs08",
  authDomain: "snapback-b2084.firebaseapp.com",
  projectId: "snapback-b2084",
  storageBucket: "snapback-b2084.appspot.com",
  messagingSenderId: "362009039741",
  appId: "1:362009039741:web:ad400dbe0b1e8b021e7214",
  measurementId: "G-Z3BBRJ77WG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, analytics, storage };
