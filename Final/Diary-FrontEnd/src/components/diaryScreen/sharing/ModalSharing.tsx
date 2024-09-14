import { Alert, Keyboard, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

import MyView from "../../global/MyView";
import MyPressable from "../../global/MyPressable";
import MyAppText from "../../global/MyAppText";
import ChooseElement from "./ChooseElement";
import InputEmailSharing from "./InputEmailSharing";
import {
  checkIfEmailExists,
  sharingDiary,
  updateShareStatus,
} from "../../../api/sharing/sharingAPI";
import { SuccessModalShaing } from "./SuccessModalSharing";
import { useAppSelector } from "../../../redux store/hook";

function ModalSharing({ isVisible, setModalVisible, diary }: any) {
  const diaries = useAppSelector((state) => state.diaries.diaries);
  const [elements, setElements] = useState<number[]>([1, 2, 3, 7]);
  const [email, setEmail] = useState("");
  const [isSuccess, setSuccess] = useState(false);

  const mutationSharing = useMutation({
    mutationFn: () => sharingDiary(email, elements, diary),
    onSuccess: (data) => {
      console.log(data);
      mutationUpdateShareStatus.mutate();
    },
    onError: (error) => {
      Alert.alert("Error", "Error sharing diary");
      console.log(error);
    },
  });

  const mutationUpdateShareStatus = useMutation({
    mutationFn: async () => {
      let generalDiary = diaries.find((item) => {
        return item.id === diary.id;
      })!;

      if (!generalDiary.whoShare.includes(email)) {
        generalDiary.whoShare.push(email);
        await updateShareStatus(diary.id, true, generalDiary.whoShare);
      }
    },
    onSuccess: () => {
      diaries.map((_diary) => {
        if (_diary.id === diary.id) {
          _diary.share = true;
          if (!_diary.whoShare.includes(email)) {
            _diary.whoShare.push(email);
          }
        }
      });
      setEmail("");
      setSuccess(true);
    },
    onError: (error) => {
      Alert.alert("Error", "Error sharing diary");
      console.log(error);
      setEmail("");
    },
  });

  async function onPressShare() {
    if (elements.length <= 3) {
      Alert.alert("Error", "Please choose at least three elements to share");
      return;
    }

    const exist = await checkIfEmailExists(email);
    if (!exist) {
      setEmail("");
      setSuccess(true);
      return;
    }

    mutationSharing.mutate();
  }

  return (
    <Modal
      isVisible={isVisible}
      animationInTiming={300}
      animationOutTiming={300}
      onBackdropPress={() => setModalVisible(false)}
      backdropOpacity={0}
      onModalHide={() => {
        setEmail("");
        setElements([1, 2, 3, 7]);
      }}
      style={{ margin: 0, justifyContent: "flex-end" }}
    >
      <MyPressable
        isBorder
        color="background"
        style={styles.container}
        onPress={() => Keyboard.dismiss()}
      >
        <InputEmailSharing
          email={email}
          setEmail={setEmail}
          onPressShare={onPressShare}
        />
        <MyAppText style={styles.titleText}>
          Choose what to share from your Diary
        </MyAppText>

        <MyView style={styles.chooseList}>
          <ChooseElement id={1} elements={elements} setElements={setElements} />
          <ChooseElement id={2} elements={elements} setElements={setElements} />
        </MyView>
        <MyView style={[styles.chooseList, { marginRight: -20 }]}>
          <ChooseElement id={3} elements={elements} setElements={setElements} />
          <ChooseElement id={4} elements={elements} setElements={setElements} />
        </MyView>
        <MyView style={[styles.chooseList, { marginRight: 30 }]}>
          <ChooseElement id={5} elements={elements} setElements={setElements} />
          <ChooseElement id={6} elements={elements} setElements={setElements} />
        </MyView>
      </MyPressable>
      <SuccessModalShaing isVisible={isSuccess} setVisibleModal={setSuccess} />
    </Modal>
  );
}

export default ModalSharing;

const styles = StyleSheet.create({
  container: {
    height: "65%",
    borderRadius: 16,
    alignItems: "center",
    paddingTop: 30,
  },
  titleText: {
    fontSize: 15,
    fontFamily: "Poppins-Medium",
    marginBottom: 20,
    marginTop: 10,
  },
  chooseList: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
});
