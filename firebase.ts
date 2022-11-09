// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjXnIXlltDfYo4UXPXipQH97qxUgZosB0",
  authDomain: "netflix-clone-df95e.firebaseapp.com",
  projectId: "netflix-clone-df95e",
  storageBucket: "netflix-clone-df95e.appspot.com",
  messagingSenderId: "957339343528",
  appId: "1:957339343528:web:b2b1d211f3ea16a36ec09d"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth,db }
