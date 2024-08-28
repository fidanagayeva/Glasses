import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "@firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBmC2mT1Nbu15sViIGOirbXCjRFw0rPBQQ",
  authDomain: "next-auth-bcafc.firebaseapp.com",
  projectId: "next-auth-bcafc",
  storageBucket: "next-auth-bcafc.appspot.com",
  messagingSenderId: "380501117499",
  appId: "1:380501117499:web:92c4bc0fcadb533ce1aa1e",
  measurementId: "G-D9P6ZREL8J"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);