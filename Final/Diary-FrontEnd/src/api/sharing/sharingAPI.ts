import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { auth, db } from "../firebaseConfig/firebase";
import { fetchSignInMethodsForEmail } from "firebase/auth";

export const checkIfEmailExists = async (email: string) => {
  try {
    const methods = await fetchSignInMethodsForEmail(auth, email);
    return methods.length > 0;
  } catch (error) {
    return false;
  }
};

export const sharingDiary = async (
  email: string,
  elements: number[],
  diary: any
) => {
  if (auth.currentUser) {
    const docRef = doc(db, "sharing", email, "sharingDiary", diary.id);

    await setDoc(
      docRef,
      {
        id: diary.id,
        timestamp: diary.timestamp,
        title: elements.includes(1) ? diary.title : "",
        diary: elements.includes(2) ? diary.diary : "",
        hashTag: elements.includes(3) ? diary.hashTag : [],
        urlImage: elements.includes(4) ? diary.urlImage : [],
        recordings: elements.includes(5) ? diary.recordings : [],
        emoji: elements.includes(7) ? diary.emoji : 0,
        locations: elements.includes(6) ? diary.locations : [],
        uid: auth.currentUser.uid,
        from: auth.currentUser.email,
      },
      { merge: true }
    );

    console.log("Document successfully written!");
    return diary.id;
  } else return null;
};

export async function getSharedDiaries(email: string) {
  const collectionRef = collection(db, "sharing", email, "sharingDiary");
  const q = query(collectionRef, orderBy("timestamp", "desc"));

  const querySnapshot = await getDocs(q);
  return querySnapshot;
}

export async function updateShareStatus(
  diaryId: string,
  status: boolean,
  whoShare: string[]
) {
  const docGeneralRef = doc(
    db,
    "users",
    auth.currentUser!.uid,
    "generalDiaries",
    diaryId
  );

  await setDoc(
    docGeneralRef,
    {
      share: status,
      whoShare: whoShare,
    },
    { merge: true }
  );

  console.log("Document successfully written!");
  return diaryId;
}

export async function deleteShareDiary(
  diaryId: string,
  emailFriends: string[]
) {
  for (let email of emailFriends) {
    const docRef = doc(db, "sharing", email, "sharingDiary", diaryId);
    await deleteDoc(docRef);
  }
}
