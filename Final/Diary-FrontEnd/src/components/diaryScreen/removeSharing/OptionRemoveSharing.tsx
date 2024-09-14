import { Alert, StyleSheet } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import MyView from "../../global/MyView";
import MyPressable from "../../global/MyPressable";
import Icon from "../../global/Icon";
import MyAppText from "../../global/MyAppText";
import ModalRemoveSharing from "./ModalRemoveSharing";

function OptionRemoveSharing({ diary }: any) {
  const [isVisible, setModalVisible] = useState(false);

  return (
    <MyView style={styles.buttonContainer}>
      <MyPressable
        onPress={() => setModalVisible(true)}
        color="primary200"
        isBorder
        style={styles.button}
      >
        <Icon
          color="black"
          size={30}
          source={require("../../../../assets/icons/noShare.png")}
        ></Icon>
      </MyPressable>
      <MyAppText style={styles.text}>Stop Sharing</MyAppText>

      <ModalRemoveSharing
        diary={diary}
        isVisible={isVisible}
        setModalVisible={setModalVisible}
      />
    </MyView>
  );
}

export default OptionRemoveSharing;

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    paddingHorizontal: 12,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    height: 55,
    width: 55,
    borderRadius: 100,
    marginBottom: 8,
    paddingBottom: 4,
  },
  text: {
    fontSize: 14,
    width: 70,
    textAlign: "center",
    fontFamily: "Poppins-Medium",
    flexWrap: "wrap",
  },
});
