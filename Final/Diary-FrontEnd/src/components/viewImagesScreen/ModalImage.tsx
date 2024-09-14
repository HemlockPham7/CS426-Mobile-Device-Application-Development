import { StyleSheet, Alert } from "react-native";
import Modal from "react-native-modal";
import { Image } from "expo-image";
import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";

import MyView from "../global/MyView";
import MyPressable from "../global/MyPressable";
import Icon from "../global/Icon";

function ModalImage({ isVisible, setIsVisible, modalImageUrl }: any) {
  const saveImage = async () => {
    try {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Permission not granted",
          "Allow the app to access media library."
        );
        return;
      }

      const fileUri = FileSystem.cacheDirectory + "downloaded-image.jpg";
      const { uri } = await FileSystem.downloadAsync(modalImageUrl, fileUri);

      const asset = await MediaLibrary.createAssetAsync(uri);
      const album = await MediaLibrary.getAlbumAsync("Download");
      if (album == null) {
        await MediaLibrary.createAlbumAsync("Download", asset, false);
      } else {
        await MediaLibrary.addAssetsToAlbumAsync([asset], album, false);
      }

      Alert.alert("Success", "Image saved to your gallery!");
    } catch (error) {
      Alert.alert("Error", "Failed to save image to gallery.");
    }
  };

  return (
    <Modal
      isVisible={isVisible}
      style={{ margin: 0, justifyContent: "flex-end" }}
    >
      <MyView color="background" style={styles.container}>
        <MyView style={styles.buttonContainer}>
          <MyPressable
            style={{ marginBottom: "40%" }}
            onPress={() => setIsVisible(false)}
          >
            <Icon
              color="black"
              size={23}
              source={require("../../../assets/icons/close.png")}
            ></Icon>
          </MyPressable>

          <MyPressable style={{ marginTop: -4 }} onPress={saveImage}>
            <Icon
              color="black"
              size={35}
              source={require("../../../assets/icons/download.png")}
            ></Icon>
          </MyPressable>
        </MyView>

        <Image style={styles.imageStyle} source={{ uri: modalImageUrl }} />
      </MyView>
    </Modal>
  );
}

export default ModalImage;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    paddingTop: "18%",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginLeft: 30,
  },
  imageStyle: {
    width: "100%",
    height: "50%",
  },
});
