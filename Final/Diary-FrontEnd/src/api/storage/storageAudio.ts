import {
    getDownloadURL,
    ref,
    uploadBytes,
    deleteObject,
  } from "firebase/storage";
  import { storage, auth } from "../firebaseConfig/firebase";

export async function uploadRecordingsToStorage(
    uri: string[],
    diaryId: string,
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
          auth.currentUser.uid +
            "/recordings/" +
            diaryId +
            i
        );
        await uploadBytes(fileRef, blob)
          .then((snapshot) => {
            console.log("Uploaded");
          })
          .catch((err) => {
            console.log(err);
          });
        const url = await getDownloadURL(fileRef);
        console.log(url);
        urls.push(url);
      }
    }
    return urls;
  }