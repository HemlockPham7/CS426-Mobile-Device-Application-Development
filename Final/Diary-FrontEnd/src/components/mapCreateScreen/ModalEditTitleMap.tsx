import { Alert, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

import MyView from "../global/MyView";
import MyAppText from "../global/MyAppText";
import MyPressable from "../global/MyPressable";
import MyTextInput from "../global/MyTextInput";

function ModalEditTitleMap({ isVisible, setModalVisible, setTitle }: any) {
  const [input, setInput] = useState("");

  function cancelModal() {
    setInput("");
    setModalVisible(false);
  }

  function confirmPressedHandler() {
    if (input == "") return;
    setTitle(input);
    setModalVisible(false);
    setInput("");
  }
  function inputTextHandler(text: string) {
    if (text.length <= 16) {
      setInput(text);
    }
  }

  return (
    <Modal
      isVisible={isVisible}
      animationInTiming={400}
      animationIn={"pulse"}
      animationOutTiming={400}
      backdropOpacity={0.4}
      avoidKeyboard={true}
    >
      <MyView isBorder color="background" style={styles.modalStyle}>
        <MyAppText style={{ fontSize: 16, fontFamily: "Poppins-SemiBold" }}>
          Edit Title
        </MyAppText>

        <MyTextInput
          isBorder
          color="white"
          value={input}
          onChangeText={inputTextHandler}
          style={styles.textInput}
          autoFocus
        ></MyTextInput>

        <MyView style={styles.buttonModalContainer}>
          <MyPressable
            onPress={cancelModal}
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
            onPress={confirmPressedHandler}
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
    </Modal>
  );
}

export default ModalEditTitleMap;

const styles = StyleSheet.create({
  modalStyle: {
    height: 180,
    borderRadius: 12,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "space-evenly",
    marginHorizontal: 40,
    paddingHorizontal: 16,
  },
  textInput: {
    height: 40,
    width: "100%",
    borderRadius: 12,
    borderWidth: 1,
    paddingHorizontal: 12,
  },
  buttonModalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  buttonModal: {
    alignItems: "center",
    borderRadius: 12,
    paddingVertical: 8,
    width: 80,
  },
});
