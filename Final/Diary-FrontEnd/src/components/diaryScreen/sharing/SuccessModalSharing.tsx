import { StyleSheet } from "react-native";
import Modal from "react-native-modal";

import MyView from "../../global/MyView";
import MyAppText from "../../global/MyAppText";
import Icon from "../../global/Icon";

export const SuccessModalShaing = ({ isVisible, setVisibleModal }: any) => {
  return (
    <Modal
      isVisible={isVisible}
      animationIn={"pulse"}
      backdropOpacity={0.6}
      animationOut={"fadeOut"}
      onBackdropPress={() => setVisibleModal(false)}
    >
      <MyView color="white" style={styles.container}>
        <Icon
          color="none"
          size={50}
          source={require("../../../../assets/icons/yes.png")}
          style={{ marginBottom: 12 }}
        />
        <MyAppText style={styles.text}>AWESOME!</MyAppText>
        <MyAppText>Shared Successfully</MyAppText>
      </MyView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 50,
    borderRadius: 16,
  },
  text: {
    fontSize: 16,
    fontFamily: "Poppins-SemiBold",
    marginBottom: 4,
  },
});
