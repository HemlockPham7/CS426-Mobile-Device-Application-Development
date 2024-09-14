import { StyleSheet, Linking, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";

import MyPressable from "../../global/MyPressable";
import Icon from "../../global/Icon";
import { useAppSelector, useAppDispatch } from "../../../redux store/hook";
import { addImage } from "../../../redux store/createDiarySlice";

function CameraComponent() {
  const dispatch = useAppDispatch();
  const imagesTemporary = useAppSelector(
    (state) => state.createDiary.imagesTemporary
  );

  async function pickImage(usedCamera: boolean) {
    if (imagesTemporary.length >= 5) {
      Alert.alert("Error", "You can only upload 5 images");
    }
    let pickerResult;

    if (usedCamera) {
      const isPermission = await ImagePicker.getCameraPermissionsAsync();
      if (isPermission.status != "granted") {
        // Linking.openSettings();
        await ImagePicker.requestCameraPermissionsAsync();
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
      dispatch(addImage(pickerResult.assets[0].uri));
    }
  }

  return (
    <>
      <MyPressable style={{ marginBottom: 2 }} onPress={() => pickImage(true)}>
        <Icon
          size={50}
          color="none"
          source={require("../../../../assets/gifs/camera.gif")}
        ></Icon>
      </MyPressable>
    </>
  );
}

export default CameraComponent;

const styles = StyleSheet.create({
  modalPickerStyle: {
    height: 160,
    borderRadius: 12,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "space-evenly",
    marginHorizontal: 40,
    paddingHorizontal: 16,
  },
  buttonModalContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  buttonModal: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    borderWidth: 1,
    paddingVertical: 4,
    width: 100,
  },
});
