import { StyleSheet } from "react-native";
import Modal from "react-native-modal";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FlatList } from "react-native-gesture-handler";

import MyView from "../../global/MyView";
import MyPressable from "../../global/MyPressable";
import MyAppText from "../../global/MyAppText";
import { useAppSelector } from "../../../redux store/hook";
import { GeneralDiary } from "../../../ClassObject/DiaryClass";
import ChooseEmail from "./ChooseEmail";
import {
  deleteShareDiary,
  updateShareStatus,
} from "../../../api/sharing/sharingAPI";
import ModalLoading from "../../global/ModalLoading";

function ModalRemoveSharing({ isVisible, setModalVisible, diary }: any) {
  const queryClient = useQueryClient();
  const diaries = useAppSelector((state) => state.diaries.diaries);
  const [generalDiary, setGeneralDiary] = useState<GeneralDiary>();
  const [listShareEmail, setListShareEmail] = useState<string[]>([]);

  const mutationDelete = useMutation({
    mutationFn: async () => {
      const deleteList = generalDiary?.whoShare.filter(
        (email) => !listShareEmail.includes(email)
      );

      if (!deleteList) return;
      await deleteShareDiary(diary.id, deleteList);
      await updateShareStatus(
        diary.id,
        listShareEmail.length == 0 ? false : true,
        listShareEmail
      );
    },
    onSuccess: () => {
      diaries.map((_diary) => {
        if (_diary.id === diary.id) {
          _diary.share = listShareEmail.length == 0 ? false : true;
          _diary.whoShare = listShareEmail;
        }
      });

      setModalVisible(false);
    },
    onError: (error) => {
      console.log(error);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["general-diaries"] });
    },
  });

  function getGeneralDiary() {
    let tmp = diaries.find((item) => item.id === diary.id);
    if (!tmp) return;

    setGeneralDiary(tmp);
    // console.log(tmp.whoShare.length);
    setListShareEmail(tmp.whoShare);
  }

  function updateHandler() {
    mutationDelete.mutate();
  }

  return (
    <Modal
      isVisible={isVisible}
      animationInTiming={300}
      animationOutTiming={300}
      onBackdropPress={() => setModalVisible(false)}
      backdropOpacity={0}
      onModalWillShow={getGeneralDiary}
      style={{ margin: 0, justifyContent: "flex-end" }}
    >
      <ModalLoading
        isLoading={mutationDelete.isPending}
        message="Please wait"
      />
      {generalDiary?.whoShare.length === 0 ? (
        <MyPressable
          isBorder
          color="background"
          style={{
            height: "30%",
            borderRadius: 16,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MyAppText style={{ fontSize: 16 }}>
            You have not shared this diary with anyone
          </MyAppText>
        </MyPressable>
      ) : (
        <MyPressable isBorder color="background" style={styles.container}>
          <MyView>
            <MyAppText style={styles.titleText}>
              You have shared this diary with {listShareEmail.length} people
            </MyAppText>

            <FlatList
              data={listShareEmail}
              renderItem={(item) => (
                <ChooseEmail
                  email={item.item}
                  listShareEmail={listShareEmail}
                  setListShareEmail={setListShareEmail}
                />
              )}
              keyExtractor={(item) => item}
              alwaysBounceVertical={false}
            />
          </MyView>

          <MyView style={styles.buttonContainer}>
            <MyPressable
              color="primary500"
              style={styles.buttonStyle}
              onPress={() => setModalVisible(false)}
            >
              <MyAppText
                color="white"
                style={{ fontFamily: "Poppins-Medium", fontSize: 14 }}
              >
                Cancel
              </MyAppText>
            </MyPressable>

            <MyPressable
              color="primary500"
              style={styles.buttonStyle}
              onPress={updateHandler}
            >
              <MyAppText
                color="white"
                style={{ fontFamily: "Poppins-Medium", fontSize: 14 }}
              >
                Update
              </MyAppText>
            </MyPressable>
          </MyView>
        </MyPressable>
      )}
    </Modal>
  );
}

export default ModalRemoveSharing;

const styles = StyleSheet.create({
  container: {
    height: "55%",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 30,
    paddingBottom: "24%",
  },
  titleText: {
    fontSize: 15,
    fontFamily: "Poppins-Medium",
    marginBottom: 32,
    marginTop: 10,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
  },
  buttonStyle: {
    width: 110,
    paddingVertical: 12,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
});
