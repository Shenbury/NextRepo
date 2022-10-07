import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCXtJbJBuJFgDSWJ5w98MoVtcvIsV7H9Fc",
  authDomain: "psymons-blog.firebaseapp.com",
  projectId: "psymons-blog",
  storageBucket: "psymons-blog.appspot.com",
  messagingSenderId: "988731557023",
  appId: "1:988731557023:web:645a56938d002a24dc4eaa",
  measurementId: "G-M1B24RT0LS",
};

export const app = initializeApp(firebaseConfig);

export const googleAuthProvider = new GoogleAuthProvider();

export const db = getFirestore(app);

export const auth = getAuth(app);
export const storage = getStorage(app);

let analytics = undefined;

if (app.name && typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export {analytics};
