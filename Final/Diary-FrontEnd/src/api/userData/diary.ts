import "react-native-get-random-values";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  Timestamp,
  query,
  orderBy,
  deleteDoc,
} from "firebase/firestore";
import { auth, db } from "../firebaseConfig/firebase";

export function generateTimestamp(day: number, month: number, year: number) {
  const today = new Date();
  const hour = today.getHours();
  const minutes = today.getMinutes();
  const date = new Date(year, month - 1, day, hour, minutes);
  return Timestamp.fromDate(date);
}

export async function saveNewDiaryDatabase(
  id: string,
  timestamp: Timestamp,
  titleText: string,
  diaryText: string,
  hashTag: string[],
  urlImage: string[],
  emoji: number,
  recordings: string[],
  locations: {}[],
  bookmark: boolean,
  isShare: boolean,
  whoShare: string[]
) {
  if (auth.currentUser) {
    const docGeneralRef = doc(
      db,
      "users",
      auth.currentUser.uid,
      "generalDiaries",
      id
    );
    const docDetailedRef = doc(
      db,
      "users",
      auth.currentUser.uid,
      "detailedDiaries",
      id
    );
    try {
      await setDoc(
        docDetailedRef,
        {
          id: id,
          timestamp: timestamp,
          title: titleText,
          diary: diaryText,
          hashTag: hashTag,
          urlImage: urlImage,
          recordings: recordings,
          emoji: emoji,
          locations: locations,
          bookmark: bookmark,
          uid: auth.currentUser.uid,
        },
        { merge: true }
      );
      await setDoc(docGeneralRef, {
        id: id,
        timestamp: timestamp,
        title: titleText,
        hashTag: hashTag,
        emoji: emoji,
        bookmark: bookmark,
        share: isShare,
        whoShare: whoShare,
      });

      console.log("Document successfully written!");
      return id;
    } catch (err) {
      console.log(err);
      return null;
    }
  } else return null;
}

export async function getGeneralDiaryFromDatabase() {
  if (auth.currentUser) {
    const docRef = collection(
      db,
      "users",
      auth.currentUser.uid,
      "generalDiaries"
    );

    const q = query(docRef, orderBy("timestamp"));
    try {
      const docSnap = await getDocs(q);
      return docSnap;
    } catch (err) {
      console.log(err);
      return null;
    }
  }
}

export async function getDetailedDiaryFromDatabase(id: string) {
  if (auth.currentUser) {
    const docDetailedRef = doc(
      db,
      "users",
      auth.currentUser.uid,
      "detailedDiaries",
      id
    );
    const docSnap = await getDoc(docDetailedRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log("No such document!");
    }
  }
}

export async function deleteDiaryFromDatabase(id: string) {
  if (auth.currentUser) {
    const docGeneralRef = doc(
      db,
      "users",
      auth.currentUser.uid,
      "generalDiaries",
      id
    );
    const docDetailedRef = doc(
      db,
      "users",
      auth.currentUser.uid,
      "detailedDiaries",
      id
    );
    try {
      await deleteDoc(docGeneralRef);
      await deleteDoc(docDetailedRef);
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  } else return false;
}
