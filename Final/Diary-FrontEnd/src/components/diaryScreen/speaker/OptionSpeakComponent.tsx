import { Alert, StyleSheet } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import MyView from "../../global/MyView";
import MyPressable from "../../global/MyPressable";
import Icon from "../../global/Icon";
import MyAppText from "../../global/MyAppText";
import ModalSpeaker from "./ModalSpeaker";

function OptionSpeakComponent({diary}: any) {
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
          size={32}
          source={require("../../../../assets/icons/speak1.png")}
        ></Icon>
      </MyPressable>
      <MyAppText style={styles.text}>Speak</MyAppText>

      <ModalSpeaker diary={diary} isVisible={isVisible} setModalVisible={setModalVisible} />
    </MyView>
  );
}

export default OptionSpeakComponent;

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
    textAlign: "center",
    fontFamily: "Poppins-Medium",
    flexWrap: "wrap",
  },
});