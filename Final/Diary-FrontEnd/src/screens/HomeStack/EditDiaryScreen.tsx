import { Alert, Keyboard, StyleSheet } from "react-native";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { v4 as uuidv4 } from "uuid";

import MyPressable from "../../components/global/MyPressable";
import HeaderRightButton from "../../components/editScreen/HeaderRightButton";
import HeaderLeftButton from "../../components/createScreen/headerLeftButton/HeaderLeftButton";
import TopComponent from "../../components/createScreen/TopComponent";
import DiaryRecordComponent from "../../components/createScreen/DiaryRecordComponent";

import { useAppDispatch, useAppSelector } from "../../redux store/hook";
import { createNewDiary } from "../../redux store/createDiarySlice";
import {
  deleteDiaryFromDatabase,
  generateTimestamp,
  saveNewDiaryDatabase,
} from "../../api/userData/diary";
import {
  deleteDataInStorage,
  uploadImagesDiaryToStorage,
} from "../../api/storage/storageImage";
import { addDiary, deleteDiary } from "../../redux store/diarySlice";
import { DetailDirary, GeneralDiary } from "../../ClassObject/DiaryClass";
import { nameScreen } from "../../constants/globalVariables";
import ModalLoading from "../../components/global/ModalLoading";
import { uploadRecordingsToStorage } from "../../api/storage/storageAudio";
import RecordingAndLocation from "../../components/createScreen/RecordingAndLocation";
import { useEffect, useLayoutEffect } from "react";
import MyAppText from "../../components/global/MyAppText";

let isShare = false;
let whoShare: string[] = [];

function EditDiaryScreen({ navigation, route }: any) {
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();
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
  const diaries = useAppSelector((state) => state.diaries.diaries);
  const { detailedDiary } = route.params;

  useEffect(() => {
    console.log(detailedDiary.id);
    const _sharedDiary = diaries.find((diary) => diary.id === detailedDiary.id);

    isShare = _sharedDiary?.share ? true : false;
    whoShare = _sharedDiary?.whoShare ? _sharedDiary.whoShare : [];
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      gestureEnabled: false,
      headerTitle: () => <MyAppText></MyAppText>,
      headerBackVisible: false,
      headerLeft: () => <HeaderLeftButton />,
      headerRight: () => {
        return (
          <HeaderRightButton
            onPressFinish={onPressFinish}
            onPressCancel={onPressCancel}
          />
        );
      },
    });
  }, []);

  const mutationDelete = useMutation({
    mutationFn: async () => {
      const removeImages = detailedDiary?.urlImage.filter(
        (image: any) => imagesTemporary.includes(image) === false
      );
      const removeRecordings = detailedDiary?.recordings.filter(
        (audio: any) => recordings.includes(audio) === false
      );

      if (removeImages.length > 0) {
        await deleteDataInStorage(removeImages);
      }
      if (removeRecordings.length > 0) {
        await deleteDataInStorage(removeRecordings);
      }
      await deleteDiaryFromDatabase(detailedDiary?.id);
    },
    onSuccess: () => {
      dispatch(deleteDiary(detailedDiary?.id));
      mutationUpload.mutate();
    },
    onError: () => {
      Alert.alert("Error", "Error editng diary");
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["general-diaries"] });
    },
  });

  const mutationUpload = useMutation({
    mutationFn: async (): Promise<any> => {
      const id = uuidv4();
      const timestamp = generateTimestamp(day, month, year);

      // save local images to storage and then merge with the existing images
      const urlWillSavedImages = imagesTemporary.filter(
        (image) => image[0] != "h"
      );
      const urlSavedImages = imagesTemporary.filter((image) => image[0] == "h");
      let urlImages = await uploadImagesDiaryToStorage(
        urlWillSavedImages,
        id,
        year
      );
      urlImages = urlImages.concat(urlSavedImages);

      // save local recordings to storage and then merge with the existing recordings
      const urlWillSavedRecordings = recordings.filter(
        (image) => image[0] != "h"
      );
      const urlSavedRecordings = recordings.filter((image) => image[0] == "h");
      let urlRecordings = await uploadRecordingsToStorage(
        urlWillSavedRecordings,
        id
      );
      urlRecordings = urlRecordings.concat(urlSavedRecordings);

      await saveNewDiaryDatabase(
        id,
        timestamp,
        title,
        diary,
        hashTag,
        urlImages,
        emoji,
        urlRecordings,
        locations,
        bookmark,
        isShare,
        whoShare
      );
      return {
        id: id,
        timestamp: timestamp,
        urlImage: urlImages,
        recordings: urlRecordings,
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
            isShare,
            whoShare
          )
        )
      );

      const newDetailedDiary = new DetailDirary(
        data.id,
        data.timestamp,
        title,
        diary,
        hashTag,
        data.urlImage,
        emoji,
        data.recordings,
        locations,
        bookmark
      );
      navigation.navigate(nameScreen.diary, {
        id: data.id,
        newDiary: newDetailedDiary,
      });
    },
    onError: () => {
      Alert.alert("Error", "Failed to edit diary");
    },
    onSettled: () => {
      dispatch(createNewDiary());
      queryClient.invalidateQueries({ queryKey: ["general-diaries"] });
    },
  });

  function onPressCancel() {
    dispatch(createNewDiary());
    navigation.navigate(nameScreen.diary, { id: detailedDiary.id });
  }
  function onPressFinish() {
    mutationDelete.mutate();
  }

  return (
    <>
      <MyPressable
        onPress={() => Keyboard.dismiss()}
        color="background"
        style={styles.container}
      >
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          style={{ paddingHorizontal: 4 }}
        >
          {/* <ChooseEmoji /> */}
          <TopComponent />
          <RecordingAndLocation edit />
          <DiaryRecordComponent />
        </KeyboardAwareScrollView>
      </MyPressable>

      <ModalLoading
        isLoading={mutationDelete.isPending || mutationUpload.isPending}
        message="Please wait.."
      />
    </>
  );
}

export default EditDiaryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    marginTop: 12,
    marginBottom: 30,
  },
  hashtagAndEmoji: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },
});
