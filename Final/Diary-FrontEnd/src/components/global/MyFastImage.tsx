import { useEffect, useState } from "react";
import * as FileSystem from "expo-file-system";
import { Image, ActivityIndicator, Alert } from "react-native";
import { forwardRef, useImperativeHandle } from "react";
import { useIsFocused } from "@react-navigation/native";

import MyView from "./MyView";

import { auth } from "../../api/firebaseConfig/firebase";

// Define the ref type
export type MyFastImageRef = {
  function: () => void;
};

async function cacheImage(uri: string, cacheUri: string, callback: any) {
  try {
    const downloadImage = FileSystem.createDownloadResumable(
      uri,
      cacheUri,
      {},
      callback
    );

    const downloaded = await downloadImage.downloadAsync();
    if (downloaded) {
      return {
        cached: true,
        err: false,
        path: downloaded.uri,
      };
    }
  } catch (error) {
    return {
      cached: false,
      err: true,
      msg: error,
      path: "",
    };
  }
}

const MyFastImage = forwardRef(({ source, cacheKey, style }: any, ref) => {
  const [imgUri, setUri] = useState("");
  const isFocused = useIsFocused();

  useEffect(() => {
    if (source == "") {
      return;
    }
    loadImage();
  }, []);

  useEffect(() => {
    if (source == "") {
      return;
    }
    loadImage();
  }, [isFocused]);

  useImperativeHandle(ref, () => ({
    function: () => {
      changeImage();
    },
  }));

  async function loadImage() {
    if (source == "") {
      setUri("");
      return;
    }
    if (auth.currentUser == null) return;
    const imgDir =
      FileSystem.cacheDirectory + "userImages/" + auth.currentUser.uid + "/";
    const dirInfo = await FileSystem.getInfoAsync(imgDir);
    if (!dirInfo.exists) {
      await FileSystem.makeDirectoryAsync(imgDir, { intermediates: true });
    }

    const filePath = imgDir + cacheKey + ".jpeg";
    const filePathInfo = await FileSystem.getInfoAsync(filePath);
    if (filePathInfo.exists) {
      setUri("");
      setUri(filePath);
    } else {
      let cached = await cacheImage(source, filePath, () => {});
      if (cached?.cached) {
        setUri("");
        setUri(cached.path);
      } else {
        Alert.alert(`Couldn't load Image!`);
      }
    }
  }

  async function changeImage() {
    if (auth.currentUser == null) return;
    const filePath =
      FileSystem.cacheDirectory +
      "userImages/" +
      auth.currentUser.uid +
      "/" +
      cacheKey +
      ".jpeg";
    const filePathInfo = await FileSystem.getInfoAsync(filePath);
    if (filePathInfo.exists) {
      await FileSystem.deleteAsync(filePath);
    }
    loadImage();
  }

  return (
    <>
      {imgUri ? (
        <Image source={{ uri: imgUri }} style={style} />
      ) : (
        <MyView
          style={{ ...style, alignItems: "center", justifyContent: "center" }}
        >
          <ActivityIndicator size={33} />
        </MyView>
      )}
    </>
  );
});

export default MyFastImage;
