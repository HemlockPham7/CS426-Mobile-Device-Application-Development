import { Keyboard, StyleSheet } from "react-native";
import { useState } from "react";
import Modal from "react-native-modal";

import MyPressable from "../global/MyPressable";
import MyAppText from "../global/MyAppText";
import ModalConfirm from "../global/ModalConfirm";
import MyView from "../global/MyView";
import Icon from "../global/Icon";
import ChooseEmoji from "../createScreen/headerRightButton/ChooseEmoji";
import DashLine from "../createScreen/headerRightButton/DashedLine";
import HashtagComponent from "../createScreen/headerRightButton/HashtagComponent";
import ModalLoading from "../global/ModalLoading";

function HeaderRightButton({ onPressFinish, onPressCancel }: any) {
  const [isVisibleCancel, setModalVisibleCancel] = useState(false);
  const [isDoneVisible, setModalDoneVisible] = useState(false);
  const [isPending, setIsPending] = useState(false);

  function cancelHandler() {
    setModalVisibleCancel(true);
  }
  function finishHandler() {
    setIsPending(true);
    onPressFinish();
  }

  return (
    <MyView style={styles.container}>
      <MyPressable onPress={cancelHandler} style={styles.buttonHeader}>
        <MyAppText style={{ fontFamily: "Poppins-Medium" }}>Cancel</MyAppText>
      </MyPressable>
      <MyPressable
        color="primary200"
        isStylePress={true}
        onPress={() => setModalDoneVisible(true)}
        style={styles.buttonHeader}
      >
        <MyAppText style={{ fontFamily: "Poppins-Medium" }}>Done</MyAppText>
      </MyPressable>

      <ModalConfirm
        isVisible={isVisibleCancel}
        setModalVisible={setModalVisibleCancel}
        message="Do you want to cancel?"
        onPress={onPressCancel}
        noLoading
      />

      <Modal
        isVisible={isDoneVisible}
        onBackdropPress={() => setModalDoneVisible(false)}
        animationInTiming={400}
        animationOutTiming={500}
        avoidKeyboard={true}
        style={{ justifyContent: "flex-end", margin: 0 }}
      >
        <MyPressable
          onPress={() => Keyboard.dismiss()}
          isBorder
          color="white"
          style={styles.modalInnerContainer}
        >
          <MyPressable
            onPress={() => setModalDoneVisible(false)}
            isBorder
            color="white"
            style={styles.buttonClose}
          >
            <Icon
              size={24}
              source={require("../../../assets/icons/Arrow_Down.png")}
            ></Icon>
          </MyPressable>

          <MyView style={{ paddingHorizontal: 16, paddingTop: 32 }}>
            <ChooseEmoji />
            <DashLine />
            <HashtagComponent />
          </MyView>

          <MyView style={styles.bottomContainer}>
            <MyPressable
              onPress={finishHandler}
              color="primary500"
              style={styles.buttonOK}
              isStylePress
            >
              <MyAppText
                color="white"
                style={{ fontSize: 16, fontFamily: "Poppins-SemiBold" }}
              >
                Save
              </MyAppText>
            </MyPressable>
          </MyView>

          {isPending && (
            <ModalLoading
              isLoading={isPending}
              message="Updating diary"
            ></ModalLoading>
          )}
        </MyPressable>
      </Modal>
    </MyView>
  );
}

export default HeaderRightButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  buttonHeader: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 6,
    borderRadius: 12,
    paddingHorizontal: 12,
  },

  modalInnerContainer: {
    height: 450,
    borderTopEndRadius: 30,
    borderTopLeftRadius: 30,
    borderWidth: 2,
    justifyContent: "space-between",
  },
  buttonClose: {
    justifyContent: "center",
    alignItems: "center",
    height: 30,
    width: 30,
    position: "absolute",
    top: -15,
    end: 30,
    borderWidth: 2,
    borderRadius: 12,
  },
  bottomContainer: {
    height: 100,
    justifyContent: "flex-start",
    paddingTop: 12,
  },
  buttonOK: {
    alignItems: "center",
    borderRadius: 12,
    marginHorizontal: 16,
    paddingVertical: 12,
    borderColor: "black",
  },
});
