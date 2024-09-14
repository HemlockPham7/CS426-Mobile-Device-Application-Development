import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getStorage } from "firebase/storage";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyCYOTMte2DR1fZC_b-5NYHqMENQz-8cL58",
  authDomain: "thesis-c7e87.firebaseapp.com",
  databaseURL: "https://thesis-c7e87-default-rtdb.firebaseio.com",
  projectId: "thesis-c7e87",
  storageBucket: "thesis-c7e87.appspot.com",
  messagingSenderId: "963518398108",
  appId: "1:963518398108:web:f4253fd0b7b9d0736ef759",
  measurementId: "G-D7YPFJ84QJ"
};



const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
const db = getFirestore(app);
const storage = getStorage();

export { auth, db, storage };
