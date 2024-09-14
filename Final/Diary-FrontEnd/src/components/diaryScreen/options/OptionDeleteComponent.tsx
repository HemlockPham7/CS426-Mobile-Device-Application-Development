import { Alert, StyleSheet } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import MyView from "../../global/MyView";
import MyPressable from "../../global/MyPressable";
import Icon from "../../global/Icon";
import MyAppText from "../../global/MyAppText";
import ModalConfirm from "../../global/ModalConfirm";

import { deleteDiaryFromDatabase } from "../../../api/userData/diary";
import { useAppDispatch, useAppSelector } from "../../../redux store/hook";
import { deleteDiary } from "../../../redux store/diarySlice";
import { nameScreen } from "../../../constants/globalVariables";
import { deleteDataInStorage } from "../../../api/storage/storageImage";
import {
  deleteShareDiary,
  updateShareStatus,
} from "../../../api/sharing/sharingAPI";
import { GeneralDiary } from "../../../ClassObject/DiaryClass";

function OptionDeleteComponent({ id, urlImage, recordings }: any) {
  const queryClient = useQueryClient();
  const diaries = useAppSelector((state) => state.diaries.diaries);
  const dispatch = useAppDispatch();
  const navigation = useNavigation<any>();
  const [isConfirm, setIsConfirm] = useState(false);

  const mutation = useMutation({
    mutationFn: async (id: string) => {
      if (urlImage.length > 0) {
        await deleteDataInStorage(urlImage);
      }
      if (recordings.length > 0) {
        await deleteDataInStorage(recordings);
      }
      await deleteDiaryFromDatabase(id);
    },
    onSuccess: () => {
      const diary = diaries.find((diary) => diary.id === id)!;
      if (diary.share) {
        mutationDeleteSharing.mutate(diary);
      } else {
        dispatch(deleteDiary(id));
        navigation.navigate(nameScreen.home);
      }
    },
    onError: () => {
      Alert.alert("Error", "Error deleting diary");
    },
    onSettled: () => {
      setIsConfirm(false);
      queryClient.invalidateQueries({ queryKey: ["general-diaries"] });
    },
  });

  const mutationDeleteSharing = useMutation({
    mutationFn: async (diary: GeneralDiary) => {
      await deleteShareDiary(diary.id, diary.whoShare);
    },
    onSuccess: () => {
      dispatch(deleteDiary(id));
      navigation.navigate(nameScreen.home);
    },
    onError: (error) => {
      Alert.alert("Error", "Error deleting diary");
    },
  });

  async function onPress() {
    mutation.mutate(id);
  }

  return (
    <MyView style={styles.buttonContainer}>
      <MyPressable
        onPress={() => setIsConfirm(true)}
        color="primary200"
        isBorder
        style={styles.button}
      >
        <Icon
          color="black"
          size={22}
          source={require("../../../../assets/icons/delete.png")}
        ></Icon>
      </MyPressable>
      <MyAppText style={styles.text}>Delete</MyAppText>

      <ModalConfirm
        isVisible={isConfirm}
        setModalVisible={setIsConfirm}
        message="Do you want to delete this diary?"
        onPress={onPress}
      ></ModalConfirm>
    </MyView>
  );
}

export default OptionDeleteComponent;

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
  },
  text: {
    fontSize: 14,
    textAlign: "center",
    fontFamily: "Poppins-Medium",
    flexWrap: "wrap",
  },
});
