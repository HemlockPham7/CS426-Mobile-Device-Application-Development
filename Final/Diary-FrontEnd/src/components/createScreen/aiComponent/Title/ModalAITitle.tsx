import { StyleSheet, Image, Platform, Button, Alert } from "react-native";
import Modal from "react-native-modal";
import React, { useState } from "react";
import TypeWriterEffect from "react-native-typewriter-effect";
import { TypingAnimation } from "react-native-typing-animation";
import { useMutation } from "@tanstack/react-query";

import MyView from "../../../global/MyView";
import MyPressable from "../../../global/MyPressable";
import MyAppText from "../../../global/MyAppText";
import Icon from "../../../global/Icon";
import TextIntroAITypeWriter from "../TextIntroAITypeWriter";
import ButtonModalContainer from "../ButtonModalContainer";
import { textInputGenerate } from "../../../../api/ai/ai";
import { useAppSelector, useAppDispatch } from "../../../../redux store/hook";
import { changeTitle } from "../../../../redux store/createDiarySlice";
import { createPromptTitleDiary } from "../../../../api/ai/ai";
import ChooseLanguageAI from "./ChooseLanguageAI";

function ModalAITitle({ isVisible, setModalVisible }: any) {
  const diary = useAppSelector((state) => state.createDiary.diary);
  const dispatch = useAppDispatch();

  const [boldText, setBoldText] = useState(false);
  const [secondLine, setSecondLine] = useState(false);
  const [title, setTitle] = useState("");
  const [language, setLanguage] = useState("Vietnamese");
  const [isRegenerate, setIsRegenerate] = useState(false);

  const mutation = useMutation({
    mutationFn: async () => {
      setIsRegenerate(true);

      const prompt = createPromptTitleDiary(language, diary);
      let text = await textInputGenerate(prompt);

      if (text.includes("##")) {
        text = text.replace("## ", "");
      }

      if (text.includes("**")) {
        var parts = text.split(/\*\*/);
        return parts[1];
      }
      return text;
    },
    onSuccess: (data: any) => {
      setTitle(data);
    },
    onError: () => {
      Alert.alert("Error", "Failed to save diary");
    },
  });

  function beforeRenderUI() {
    setBoldText(false);
    setSecondLine(false);
    setTitle("");
    setIsRegenerate(false);
  }
  function generateTitleHandler() {
    setTitle("");
    if (diary == "") {
      return;
    }
    mutation.mutate();
  }
  function doneHandler() {
    dispatch(changeTitle(title));
    setModalVisible(false);
  }

  return (
    <>
      <Modal
        isVisible={isVisible}
        onModalWillShow={beforeRenderUI}
        onBackdropPress={() => setModalVisible(false)}
        animationInTiming={400}
        animationOutTiming={500}
        backdropOpacity={0.5}
        style={{ margin: 0, justifyContent: "flex-end" }}
      >
        <MyView isBorder color="background" style={styles.modalContainer}>
          <MyPressable
            onPress={() => setModalVisible(false)}
            style={styles.buttonClose}
          >
            <Icon
              size={30}
              source={require("../../../../../assets/icons/x.png")}
            ></Icon>
          </MyPressable>

          <MyView style={{ zIndex: 5 }}>
            <MyView style={styles.animationContainer}>
              <TextIntroAITypeWriter
                boldText={boldText}
                setBoldText={setBoldText}
                secondLine={secondLine}
                setSecondLine={setSecondLine}
                firstMessage="Hi! I'm "
                boldMessage="an AI"
                secondMessage="I'll generate a title for your diary"
              />
              <Image
                style={styles.image}
                source={require("../../../../../assets/robot2.gif")}
              ></Image>
            </MyView>
            <ChooseLanguageAI language={language} setLanguage={setLanguage} />
          </MyView>

          {!isRegenerate && (
            <>
              {diary == "" && (
                <MyView>
                  <TypeWriterEffect
                    style={styles.textStyle}
                    content="Please write your diary first!"
                  />
                </MyView>
              )}
              <MyPressable
                onPress={generateTitleHandler}
                color="primary200"
                style={styles.buttonModal}
                isStylePress
              >
                <Icon
                  size={24}
                  color="black"
                  source={require("../../../../../assets/icons/generate.png")}
                />
                <MyAppText
                  style={{
                    marginLeft: 8,
                    fontSize: 14,
                    fontFamily: "Poppins-SemiBold",
                  }}
                >
                  Generate
                </MyAppText>
              </MyPressable>
            </>
          )}

          {isRegenerate && (
            <>
              <MyView style={styles.textContainer}>
                {mutation.isPending ? (
                  <MyView style={{ marginRight: 24 }}>
                    <TypingAnimation
                      dotMargin={6}
                      dotAmplitude={4}
                      dotSpeed={0.1}
                    />
                  </MyView>
                ) : (
                  <TypeWriterEffect style={styles.textStyle} content={title} />
                )}
              </MyView>

              <ButtonModalContainer
                onPressDone={doneHandler}
                onPressRegenerate={generateTitleHandler}
              />
            </>
          )}
        </MyView>
      </Modal>
    </>
  );
}

export default ModalAITitle;

const styles = StyleSheet.create({
  modalContainer: {
    borderRadius: 16,
    borderWidth: 2,
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 32,
    paddingBottom: 32,
    height: "70%",
  },
  buttonClose: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 10,
    end: 10,
  },
  animationContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  image: {
    height: 180,
    width: Platform.OS == "android" ? 200 : 160,
  },
  buttonModal: {
    width: 140,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 140,
  },
  pressButton: {
    color: "black",
  },

  textContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
    height: 120,
    marginTop: -20,
  },
  textStyle: {
    textAlign: "center",
    fontFamily: "Poppins-Light",
    fontSize: 17,
    marginHorizontal: 20,
  },
});
