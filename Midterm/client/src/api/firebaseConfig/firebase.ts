import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBm-TX1wYFpTzp6xFOzr5Ak4FphufGgKc4",
  authDomain: "cs426-midterm-6f5e5.firebaseapp.com",
  projectId: "cs426-midterm-6f5e5",
  storageBucket: "cs426-midterm-6f5e5.appspot.com",
  messagingSenderId: "150580111510",
  appId: "1:150580111510:web:e5f8d5a3df3eedf86b7ab7"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

const db = getFirestore(app);
const storage = getStorage();

export { auth, db, storage };