import {
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";
import { auth, db } from "../firebaseConfig/firebase";
import { updateProfile } from "firebase/auth";

// profile name
export async function saveNameDatabase(name: string) {
  if (auth.currentUser) {
    await updateProfile(auth.currentUser, {
      displayName: name,
    });
    console.log("1")

    const docRef = doc(db, "users", auth.currentUser.uid);
    try {
      await setDoc(
        docRef,
        {
          name: name,
        },
        { merge: true }
      );
    } catch (err) {
      console.log(err);
    }
  }
}

// introduction
export async function saveIntroductionDatabase(introduction: string) {
  if (auth.currentUser) {
    const docRef = doc(db, "users", auth.currentUser.uid);
    try {
      await setDoc(
        docRef,
        {
          introduction: introduction,
        },
        { merge: true }
      );
    } catch (err) {
      console.log(err);
    }
  }
}
export async function getUserDatabase() {
  if (auth.currentUser) {
    const docRef = doc(db, "users", auth.currentUser.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log("No such document!");
    }
  }
  return null
}

// email
export async function saveEmailDatabase(email: string) {
  if (auth.currentUser) {
    const docRef = doc(db, "users", auth.currentUser.uid);
    try {
      await setDoc(
        docRef,
        {
          email: email,
        },
        { merge: true }
      );
    } catch (err) {
      console.log(err);
    }
  }
}

//image url
export async function saveImageUrlDatabase(urlImage: string) {
  if (auth.currentUser) {
    await updateProfile(auth.currentUser, {
      photoURL: urlImage,
    });

    const docRef = doc(db, "users", auth.currentUser.uid);
    try {
      await setDoc(
        docRef,
        {
          urlImage: urlImage,
        },
        { merge: true }
      );
    } catch (err) {
      console.log(err);
    }
  }
}

