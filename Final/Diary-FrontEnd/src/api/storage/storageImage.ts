import {
  getDownloadURL,
  ref,
  uploadBytes,
  deleteObject,
  listAll,
} from "firebase/storage";
import { storage, auth } from "../firebaseConfig/firebase";

export async function uploadAvatarToStorage(uri: string) {
  const blob = await new Promise<Blob>((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      resolve(xhr.response);
    };
    xhr.onerror = function (e) {
      reject(new TypeError("Network request failed"));
    };
    xhr.responseType = "blob";
    xhr.open("GET", uri, true);
    xhr.send(null);
  });

  if (blob.size >= 2000000) {
    return "error";
  }

  if (auth.currentUser) {
    const fileRef = ref(storage, auth.currentUser.uid + "/avatar/avatar");
    await uploadBytes(fileRef, blob).then((snapshot) => {
      console.log("Uploaded");
    });
    return await getDownloadURL(fileRef);
  }
}

export async function uploadImagesDiaryToStorage(
  uri: string[],
  diaryId: string,
  year: number
) {
  let urls: string[] = [];
  for (let i = 0; i < uri.length; i++) {
    const blob = await new Promise<Blob>((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", uri[i], true);
      xhr.send(null);
    });

    if (blob.size >= 2000000) {
      return urls;
    }

    if (auth.currentUser) {
      const fileRef = ref(
        storage,
        auth.currentUser.uid + "/diaries/" + year + "/" + diaryId + i
      );
      await uploadBytes(fileRef, blob)
        .then((snapshot) => {
          console.log("Uploaded");
        })
        .catch((err) => {
          console.log(err);
        });
      const url = await getDownloadURL(fileRef);
      urls.push(url);
    }
  }
  return urls;
}

export async function deleteDataInStorage(url: string[]) {
  if (auth.currentUser) {
    for (let i = 0; i < url.length; i++) {
      const fileRef = ref(storage, url[i]);
      await deleteObject(fileRef);
    }
  }
}

export async function getImageByYear(year: number) {
  if (!auth.currentUser) return;

  const listRef = ref(
    storage,
    auth.currentUser.uid + "/diaries/" + year.toString()
  );

  let urls: string[] = [];

  const res = await listAll(listRef);
  return res.items;
}
