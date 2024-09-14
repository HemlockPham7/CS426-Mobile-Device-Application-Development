import { Alert, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

import MyView from "../global/MyView";
import MyAppText from "../global/MyAppText";
import MyPressable from "../global/MyPressable";
import MyTextInput from "../global/MyTextInput";

import { useAppDispatch } from "../../redux store/hook";
import {
  updateName,
  updateIntroduction,
} from "../../redux store/informationSlice";
import {
  saveNameDatabase,
  saveIntroductionDatabase,
} from "../../api/userData/informationUser";
import ModalLoading from "../global/ModalLoading";

function ModalInfo({ title, isModalVisible, setModalVisible }: any) {
  const [input, setInput] = useState("");
  const dispatch = useAppDispatch();

  const { mutate: mutateName, isPending: ispendingName } = useMutation({
    mutationFn: (newName: string) => saveNameDatabase(newName),
    onError: () => {
      Alert.alert("UPDATE NAME FAILED", "Please update name again");
    },
    onSettled: () => {
      cancelModal();
    },
    onSuccess: () => {
      dispatch(updateName({ name: input }));
    },
  });
  const { mutate: mutateIntroduction, isPending: isPendingIntroduction } =
    useMutation({
      mutationFn: (newIntro: string) => saveIntroductionDatabase(newIntro),
      onError: () => {
        Alert.alert(
          "UPDATE INTRODUCTION FAILED",
          "Please update introduction again"
        );
      },
      onSettled: () => {
        cancelModal();
      },
      onSuccess: () => {
        dispatch(updateIntroduction({ introduction: input }));
      },
    });

  function cancelModal() {
    setInput("");
    setModalVisible(false);
  }

  async function confirmPressedHandler() {
    if (input == "") return;
    if (title == "Name") {
      mutateName(input);
    } else {
      mutateIntroduction(input);
    }
  }
  function inputTextHandler(text: string) {
    if (title == "Name") {
      if (text.length <= 16) {
        setInput(text);
      }
    } else {
      if (text.length <= 26) {
        setInput(text);
      }
    }
  }

  return (
    <Modal
      isVisible={isModalVisible}
      animationInTiming={400}
      animationIn={"pulse"}
      animationOutTiming={400}
      backdropOpacity={0.4}
      avoidKeyboard={true}
    >
      {ispendingName || isPendingIntroduction ? (
        <ModalLoading isLoading={true} message="Please wait" />
      ) : (
        <MyView isBorder color="background" style={styles.modalStyle}>
          <MyAppText style={{ fontSize: 16, fontFamily: "Poppins-Medium" }}>
            Modify {title}
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
      )}
    </Modal>
  );
}

export default ModalInfo;

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
