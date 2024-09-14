import { StyleSheet } from "react-native";
import { useState } from "react";

import MyAppText from "../../global/MyAppText";
import MyPressable from "../../global/MyPressable";
import ModalConfirm from "../../global/ModalConfirm";
import { useAppDispatch } from "../../../redux store/hook";
import { createNewDiary } from "../../../redux store/createDiarySlice";

function NewButton() {
  const [isVisible, setModalVisible] = useState(false);
  const dispatch = useAppDispatch();

  function newDiaryHandler() {
    dispatch(createNewDiary());
    setModalVisible(false);
  }

  return (
    <>
      <MyPressable
        style={styles.newButton}
        onPress={() => setModalVisible(true)}
      >
        <MyAppText style={{ fontFamily: "Poppins-Medium" }}>New</MyAppText>
      </MyPressable>
      <ModalConfirm
        isVisible={isVisible}
        setModalVisible={setModalVisible}
        message="Do you want to write a new diary?"
        onPress={newDiaryHandler}
      />
    </>
  );
}

export default NewButton;

const styles = StyleSheet.create({
  newButton: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 6,
    paddingHorizontal: 12,

    marginRight: 4,
  },
  modalContainer: {
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 12,
    paddingVertical: 24,
    paddingHorizontal: 16,
    marginHorizontal: 4,
  },
});
