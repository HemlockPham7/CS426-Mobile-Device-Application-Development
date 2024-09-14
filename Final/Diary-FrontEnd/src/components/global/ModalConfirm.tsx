import { ActivityIndicator, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import { useState } from "react";
import AnimatedLoader from "react-native-animated-loader";

import MyPressable from "./MyPressable";
import MyAppText from "./MyAppText";
import MyView from "./MyView";

function ModalConfirm({
  isVisible,
  setModalVisible,
  message,
  onPress,
  noLoading,
}: any) {
  const [isLoading, setIsLoading] = useState(false);

  function onPressConfirm() {
    if (noLoading) {
      onPress();
      return;
    }
    setIsLoading(true);
    onPress();
  }

  return (
    <Modal
      isVisible={isVisible}
      animationInTiming={400}
      animationOutTiming={400}
      animationIn={"pulse"}
      avoidKeyboard={true}
      backdropOpacity={0.4}
      onModalHide={() => setIsLoading(false)}
    >
      {isLoading ? (
        <MyView isBorder style={styles.loadingStyle}>
          <AnimatedLoader
            visible={true}
            overlayColor="rgba(255,255,255,0)"
            source={require("../../../assets/loading2.json")}
            animationStyle={styles.lottie}
            speed={1}
          ></AnimatedLoader>
        </MyView>
      ) : (
        <MyView isBorder color="white" style={styles.modalStyle}>
          <MyAppText
            style={{
              fontSize: 15,
              fontFamily: "Poppins-Medium",
              textAlign: "center",
            }}
          >
            {message}
          </MyAppText>

          <MyView style={styles.buttonModalContainer}>
            <MyPressable
              onPress={() => setModalVisible(false)}
              color="#ff4a4a"
              style={styles.buttonModal}
            >
              <MyAppText
                color="white"
                style={{
                  fontFamily: "Poppins-SemiBold",
                  fontSize: 13,
                }}
              >
                Cancel
              </MyAppText>
            </MyPressable>

            <MyPressable
              onPress={onPressConfirm}
              color="primary500"
              style={styles.buttonModal}
            >
              <MyAppText
                color="white"
                style={{
                  fontFamily: "Poppins-SemiBold",
                  fontSize: 13,
                }}
              >
                OK
              </MyAppText>
            </MyPressable>
          </MyView>
        </MyView>
      )}
    </Modal>
  );
}
export default ModalConfirm;

const styles = StyleSheet.create({
  modalStyle: {
    height: 130,
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
    marginTop: 8,
  },
  buttonModal: {
    alignItems: "center",
    borderRadius: 12,
    paddingVertical: 8,
    width: 80,
  },

  loadingStyle: {
    height: 120,
    borderRadius: 12,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 32,
  },
  loadingTextStyle: {
    fontSize: 16,
    fontFamily: "Poppins-SemiBold",
    marginBottom: 12,
  },
  lottie: {
    width: 300,
    height: 300,
  },
});
