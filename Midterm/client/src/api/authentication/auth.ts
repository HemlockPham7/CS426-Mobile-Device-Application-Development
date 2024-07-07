import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebaseConfig/firebase";
import { saveEmailDatabase } from "../userData/informationUser";


export async function signUp(email: string, password: string) {
  await createUserWithEmailAndPassword(auth, email, password);
  await saveEmailDatabase(email);
}

export async function signIn(email: string, password: string) {
  await signInWithEmailAndPassword(auth, email, password);
}