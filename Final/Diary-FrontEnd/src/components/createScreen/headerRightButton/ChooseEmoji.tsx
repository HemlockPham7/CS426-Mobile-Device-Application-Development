import { StyleSheet, ScrollView } from "react-native";
import Modal from "react-native-modal";
import { useEffect, useState } from "react";
import TypeWriterEffect from "react-native-typewriter-effect";

import MyPressable from "../../global/MyPressable";
import MyAppText from "../../global/MyAppText";
import MyView from "../../global/MyView";
import Icon from "../../global/Icon";
import {
  getImageIcon,
  getEmojiName,
  getColorIcon,
} from "../../../constants/imageList";
import { useAppSelector, useAppDispatch } from "../../../redux store/hook";
import { changeEmoji } from "../../../redux store/createDiarySlice";
import { useMutation } from "@tanstack/react-query";
import {
  createPromptSuggestEmoji,
  textInputGenerate,
} from "../../../api/ai/ai";
import ModalLoading from "../../global/ModalLoading";

export const textEmoji = [
  "I can tell that you're angry",
  "It looks like you want to cry",
  "I'm sorry to hear you're feeling sad",
  "I see you're feeling neutral",
  "It's great to see you happy",
  "You seem very excited today!",
];

function EmojiComponent({ id, pressedEmoji }: any) {
  const dispatch = useAppDispatch();

  return (
    <MyPressable
      onPress={() => dispatch(changeEmoji(id))}
      style={styles.emojiContainer}
    >
      <Icon
        size={42}
        color={getColorIcon(id)}
        source={getImageIcon(id)}
        style={{ opacity: pressedEmoji == id ? 1 : 0.4 }}
      ></Icon>
      <MyAppText
        style={{
          fontSize: 12,
          textAlign: "center",
          fontFamily: "Poppins-Medium",
          marginTop: 8,
          opacity: pressedEmoji == id ? 1 : 0.4,
        }}
      >
        {getEmojiName(id)}
      </MyAppText>
    </MyPressable>
  );
}

function ChooseEmoji() {
  const dispatch = useAppDispatch();
  const { emoji, diary, title } = useAppSelector((state) => state.createDiary);
  const [isVisible, setModalVisible] = useState(false);

  const mutationEmoji = useMutation({
    mutationFn: async () => {
      if(diary == "" || title == "") return;
      
      const prompt = createPromptSuggestEmoji(diary, title);
      const result = await textInputGenerate(prompt);

      return result;
    },
    onSuccess: (data) => {
      console.log(data);
      if (
        data == "1" ||
        data == "2" ||
        data == "3" ||
        data == "4" ||
        data == "5" ||
        data == "6"
      ) {
        dispatch(changeEmoji(parseInt(data)));
      }
    },
  });

  useEffect(() => {
    mutationEmoji.mutate();
  }, []);

  return (
    <MyView>
      <ModalLoading
        isLoading={mutationEmoji.isPending}
        message="Suggestions for emoji..."
      />

      <MyPressable
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: 4,
        }}
        onPress={() => setModalVisible(true)}
      >
        <Icon
          size={40}
          color={getColorIcon(emoji)}
          source={getImageIcon(emoji)}
        ></Icon>
        {!mutationEmoji.isPending && (
          <TypeWriterEffect
            style={{
              fontFamily: "Poppins-Light",
              fontSize: 18,
              marginLeft: 12,
            }}
            minDelay={100}
            content={textEmoji[emoji - 1]}
          />
        )}
      </MyPressable>

      <Modal
        isVisible={isVisible}
        animationIn={"pulse"}
        animationInTiming={400}
        animationOutTiming={400}
        onBackdropPress={() => setModalVisible(false)}
        backdropOpacity={0.7}
      >
        <MyView isBorder color="white" style={styles.modalContainer}>
          <MyAppText
            style={{
              fontSize: 18,
              fontFamily: "Poppins-SemiBold",
              marginBottom: 8,
            }}
          >
            How are you today?
          </MyAppText>
          <ScrollView
            horizontal
            contentContainerStyle={{ marginTop: 12 }}
            showsHorizontalScrollIndicator={false}
          >
            <EmojiComponent id={6} pressedEmoji={emoji} />
            <EmojiComponent id={5} pressedEmoji={emoji} />
            <EmojiComponent id={4} pressedEmoji={emoji} />
            <EmojiComponent id={3} pressedEmoji={emoji} />
            <EmojiComponent id={2} pressedEmoji={emoji} />
            <EmojiComponent id={1} pressedEmoji={emoji} />
          </ScrollView>
        </MyView>
      </Modal>
    </MyView>
  );
}

export default ChooseEmoji;

const styles = StyleSheet.create({
  emojiName: {
    fontSize: 13,
    fontFamily: "Poppins-Light",
    marginRight: 4,
  },
  modalContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 12,
    paddingVertical: 24,
  },
  emojiContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 6,
  },
});
