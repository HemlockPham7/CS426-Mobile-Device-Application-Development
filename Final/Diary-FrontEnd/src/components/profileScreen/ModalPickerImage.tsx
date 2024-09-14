import { StyleSheet, Image, ActivityIndicator } from "react-native";
import Modal from "react-native-modal";

import MyView from "../global/MyView";
import MyPressable from "../global/MyPressable";
import MyAppText from "../global/MyAppText";
import { PickerImageView } from "../global/PickerImageView";
import ModalLoading from "../global/ModalLoading";

function ModalPickerImage({
  pickImage,
  isModalVisible,
  setModalVisible,
  uploadImage,
  image,
  setImage,
  isLoading,
}: any) {

  function ImageReviewView() {
    return (
      <MyView isBorder color="white" style={styles.modalReviewStyle}>
        {image != "" && (
          <Image style={styles.imageStyle} source={{ uri: image }}></Image>
        )}
        <MyView style={styles.buttonModalContainer}>
          <MyPressable
            color="#faedc8"
            style={styles.buttonModal}
            onPress={() => {
              setImage("");
              setModalVisible(false);
            }}
          >
            <MyAppText>Cancel</MyAppText>
          </MyPressable>
          <MyPressable
            onPress={uploadImage}
            color="primary200"
            style={styles.buttonModal}
          >
            <MyAppText>Upload</MyAppText>
          </MyPressable>
        </MyView>
      </MyView>
    );
  }

  return (
    <Modal
      isVisible={isModalVisible}
      onBackdropPress={() => setModalVisible(false)}
      animationInTiming={400}
      animationIn={"pulse"}
      animationOutTiming={500}
      avoidKeyboard={true}
    >
      {isLoading ? (
        <ModalLoading isLoading={isLoading} message="Loading"></ModalLoading>
      ) : image == "" ? (
        <PickerImageView pickImage={pickImage} isAvatar />
      ) : (
        <ImageReviewView />
      )}
    </Modal>
  );
}

export default ModalPickerImage;

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

  modalReviewStyle: {
    height: 250,
    borderRadius: 12,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "space-evenly",
    marginHorizontal: 40,
    paddingHorizontal: 16,
  },
  imageStyle: {
    height: 140,
    width: 140,
    borderRadius: 70,
    borderWidth: 1,
  },
});
