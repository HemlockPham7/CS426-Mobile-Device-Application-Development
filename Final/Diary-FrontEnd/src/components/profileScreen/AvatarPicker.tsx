import { StyleSheet, Alert, Linking } from "react-native";
import { useRef, useState } from "react";
import * as ImagePicker from "expo-image-picker";

import MyPressable from "../global/MyPressable";
import ModalPickerImage from "./ModalPickerImage";
import { uploadAvatarToStorage } from "../../api/storage/storageImage";
import { saveImageUrlDatabase } from "../../api/userData/informationUser";
import Icon from "../global/Icon";
import MyFastImage from "../global/MyFastImage";
import { MyFastImageRef } from "../global/MyFastImage";

import { useAppDispatch, useAppSelector } from "../../redux store/hook";
import { updateImage } from "../../redux store/informationSlice";

function AvatarPicker() {
  const urlImage = useAppSelector((state) => state.information.urlImage);
  const [isModalVisible, setModalVisible] = useState(false);
  const [image, setImage] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const ref = useRef<MyFastImageRef>(null);
  const dispatch = useAppDispatch();

  async function pickImage(usedCamera: boolean) {
    let pickerResult;

    if (usedCamera) {
      const isPermission = await ImagePicker.getCameraPermissionsAsync();
      if (isPermission.status != "granted") {
        Linking.openSettings();
      } else {
        await ImagePicker.requestCameraPermissionsAsync();
      }

      pickerResult = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.7,
      });
    } else {
      pickerResult = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.7,
      });
    }
    if (!pickerResult.canceled) {
      setImage(pickerResult.assets[0].uri);
    }
  }

  async function uploadImage() {
    setIsLoading(true);

    try {
      const uploadUrl = await uploadAvatarToStorage(image);
      if (uploadUrl == "error") {
        Alert.alert("UPLOAD FAILED", "Please choose another image");
      } else {
        await saveImageUrlDatabase(uploadUrl!);
        dispatch(updateImage({ urlImage: "" }));
        dispatch(updateImage({ urlImage: uploadUrl }));
        if (urlImage != "") {
          ref.current?.function();
        }
      }
    } catch (e) {
      console.log(e);
      Alert.alert("UPLOAD FAILED", "Please try again");
    }

    setIsLoading(false);
    setImage("");
    setModalVisible(false);
  }

  return (
    <>
      <MyPressable
        isBorder={urlImage == ""}
        style={styles.avatarButton}
        onPress={() => setModalVisible(true)}
      >
        {!urlImage ? (
          <Icon
            size={60}
            source={require("../../../assets/icons/Profile.png")}
          ></Icon>
        ) : (
          <MyFastImage
            ref={ref}
            cacheKey="avatar"
            style={styles.avatar}
            source={urlImage}
          ></MyFastImage>
        )}
      </MyPressable>

      <ModalPickerImage
        pickImage={pickImage}
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}
        uploadImage={uploadImage}
        image={image}
        setImage={setImage}
        isLoading={isLoading}
      />
    </>
  );
}

export default AvatarPicker;

const styles = StyleSheet.create({
  avatarButton: {
    height: 100,
    width: 100,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 32,
    marginTop: 32,
  },
  avatar: {
    height: "100%",
    width: "100%",
    borderRadius: 50,
  },
});
