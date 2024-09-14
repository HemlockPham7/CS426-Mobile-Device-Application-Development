import { Keyboard, StyleSheet, Alert } from "react-native";
import Modal from "react-native-modal";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { v4 as uuidv4 } from "uuid";

import Icon from "../../global/Icon";
import MyView from "../../global/MyView";
import MyPressable from "../../global/MyPressable";
import MyAppText from "../../global/MyAppText";
import HashtagComponent from "./HashtagComponent";
import ChooseEmoji from "./ChooseEmoji";
import DashLine from "./DashedLine";

import {
  saveNewDiaryDatabase,
  generateTimestamp,
} from "../../../api/userData/diary";
import { useAppSelector, useAppDispatch } from "../../../redux store/hook";
import { createNewDiary } from "../../../redux store/createDiarySlice";
import { addDiary } from "../../../redux store/diarySlice";
import { nameScreen } from "../../../constants/globalVariables";
import ModalLoading from "../../global/ModalLoading";
import { DetailDirary, GeneralDiary } from "../../../ClassObject/DiaryClass";
import { uploadImagesDiaryToStorage } from "../../../api/storage/storageImage";
import { uploadRecordingsToStorage } from "../../../api/storage/storageAudio";

function DoneButton() {
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();
  const navigation = useNavigation<any>();

  const {
    day,
    month,
    year,
    title,
    diary,
    imagesTemporary,
    hashTag,
    emoji,
    recordings,
    locations,
    bookmark,
  } = useAppSelector((state) => state.createDiary);
  const [isVisible, setModalVisible] = useState(false);

  const mutation = useMutation({
    mutationFn: async (): Promise<any> => {
      const id = uuidv4();
      const timestamp = generateTimestamp(day, month, year);

      const urlImage = await uploadImagesDiaryToStorage(
        imagesTemporary,
        id,
        year
      );

      const recordingsUrl = await uploadRecordingsToStorage(recordings, id);

      await saveNewDiaryDatabase(
        id,
        timestamp,
        title,
        diary,
        hashTag,
        urlImage,
        emoji,
        recordingsUrl,
        locations,
        bookmark,
        false,
        []
      );
      return {
        id: id,
        timestamp: timestamp,
        urlImage: urlImage,
        recordings: recordingsUrl,
        locations: locations,
      };
    },
    onSuccess: (data) => {
      dispatch(
        addDiary(
          new GeneralDiary(
            data.id,
            data.timestamp,
            title,
            hashTag,
            emoji,
            bookmark,
            false,
            []
          )
        )
      );

      console.log(data.id);

      const newDetailedDiary = new DetailDirary(
        data.id,
        data.timestamp,
        title,
        diary,
        hashTag,
        data.urlImage,
        emoji,
        data.recordings,
        data.locations,
        bookmark
      );
      navigation.navigate(nameScreen.diary, {
        id: data.id,
        newDiary: newDetailedDiary,
      });
    },
    onError: () => {
      setModalVisible(false);
      Alert.alert("Error", "Failed to save diary");
    },
    onSettled: () => {
      dispatch(createNewDiary());
      setModalVisible(false);
      queryClient.invalidateQueries({ queryKey: ["general-diaries"] });
    },
  });

  function saveButtonHandler() {
    mutation.mutate();
  }
  function donePress() {
    setModalVisible(true);
  }

  return (
    <>
      <MyPressable
        isStylePress
        color="primary200"
        style={styles.doneButton}
        onPress={donePress}
      >
        <MyAppText style={{ fontFamily: "Poppins-Medium" }}>Done</MyAppText>
      </MyPressable>

      <Modal
        isVisible={isVisible}
        onBackdropPress={() => setModalVisible(false)}
        animationInTiming={400}
        animationOutTiming={500}
        avoidKeyboard={true}
        style={{ justifyContent: "flex-end", margin: 0 }}
      >
        <MyPressable
          onPress={() => Keyboard.dismiss()}
          color="white"
          style={styles.modalInnerContainer}
        >
          <MyPressable
            onPress={() => setModalVisible(false)}
            isBorder
            color="white"
            style={styles.buttonClose}
          >
            <Icon
              size={24}
              source={require("../../../../assets/icons/Arrow_Down.png")}
            ></Icon>
          </MyPressable>

          <MyView style={{ paddingHorizontal: 16, paddingTop: 32 }}>
            <ChooseEmoji />
            <DashLine />
            <HashtagComponent />
          </MyView>

          <MyView style={styles.bottomContainer}>
            <MyPressable
              onPress={saveButtonHandler}
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

          <ModalLoading
            isLoading={mutation.isPending}
            message="Saving diary..."
          />
        </MyPressable>
      </Modal>
    </>
  );
}

export default DoneButton;

const styles = StyleSheet.create({
  doneButton: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  modalInnerContainer: {
    height: 450,
    borderTopEndRadius: 16,
    borderTopLeftRadius: 16,
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
