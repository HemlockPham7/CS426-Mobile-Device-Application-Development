import { StyleSheet } from "react-native";
import Modal from "react-native-modal";

import MyView from "../global/MyView";
import MyAppText from "../global/MyAppText";
import Icon from "../global/Icon";
import AnimatedLoader from "react-native-animated-loader";

export const ModalForgetPassword = ({ isVisible, setVisibleModal }: any) => {
  return (
    <Modal
      isVisible={isVisible}
      animationIn={"pulse"}
      backdropOpacity={0.6}
     
      onBackdropPress={() => setVisibleModal(false)}
    >
      <MyView color="white" style={styles.container}>
        <MyAppText style={styles.text}>
          Please check your email to reset your password
        </MyAppText>
      </MyView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
 
    marginBottom: 20,
    alignItems: "center",
    borderRadius: 16,
    marginHorizontal: 12,
  },
  text: {
    fontSize: 14,
    fontFamily: "Poppins-Medium",
    width: "70%",
    textAlign: "center",
  },
  lottie: {
    width: 300,
    height: 300,
  },
});
