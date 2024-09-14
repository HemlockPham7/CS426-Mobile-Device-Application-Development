import { ActivityIndicator, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import AnimatedLoader from "react-native-animated-loader";

import MyView from "./MyView";
import MyAppText from "./MyAppText";

function ModalLoading({ isLoading, message }: any) {
  return (
    <Modal backdropOpacity={0.5} isVisible={isLoading} animationIn={"pulse"}>
      <MyView  style={styles.loadingStyle}>
        <AnimatedLoader
          visible={true}
          overlayColor="rgba(255,255,255,0)"
          source={require("../../../assets/loading2.json")}
          animationStyle={styles.lottie}
          speed={1}
        ></AnimatedLoader>
      </MyView>
    </Modal>
  );
}

export default ModalLoading;

const styles = StyleSheet.create({
  loadingStyle: {
    height: 150,
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
