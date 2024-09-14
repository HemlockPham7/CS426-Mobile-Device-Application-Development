import { StyleSheet, Image, Platform, Button, Alert } from "react-native";
import Modal from "react-native-modal";
import React, { useState } from "react";
import TypeWriterEffect from "react-native-typewriter-effect";
import { useMutation } from "@tanstack/react-query";

import MyView from "../../../global/MyView";
import MyPressable from "../../../global/MyPressable";
import MyAppText from "../../../global/MyAppText";
import Icon from "../../../global/Icon";
import TextIntroAITypeWriter from "../TextIntroAITypeWriter";
import { textInputGenerate } from "../../../../api/ai/ai";
import { useAppSelector, useAppDispatch } from "../../../../redux store/hook";
import { changeDiary } from "../../../../redux store/createDiarySlice";
import { ScrollView } from "react-native-gesture-handler";
import SliderSummaryDiary from "./SliderSummaryDiary";
import GenerateDiaryComponent from "./GenerateDiaryComponent";
import { createPromptSummaryDiary } from "../../../../api/ai/ai";
import ChooseLanguageAI from "../Title/ChooseLanguageAI";

function ModalAISummary({ isVisible, setModalVisible }: any) {
  const diary = useAppSelector((state) => state.createDiary.diary);
  const dispatch = useAppDispatch();

  const [boldText, setBoldText] = useState(false);
  const [secondLine, setSecondLine] = useState(false);
  const [summarizedDiary, setSummarizedDiary] = useState("");
  const [language, setLanguage] = useState("Vietnamese");
  const [valueSlider, setValueSlider] = useState(1);
  const [isRegenerate, setIsRegenerate] = useState(false);

  const mutation = useMutation({
    mutationFn: async () => {
      setIsRegenerate(true);

      const prompt = createPromptSummaryDiary(language, valueSlider, diary);
      const text = await textInputGenerate(prompt);
      if (text.includes("**")) {
        var parts = text.split(/\*\*/);
        return parts[1];
      }
      return text;
    },
    onSuccess: (data: any) => {
      setSummarizedDiary(data);
    },
    onError: () => {
      Alert.alert("Error", "Failed to save diary");
    },
  });

  function beforeRenderUI() {
    setBoldText(false);
    setSecondLine(false);
    setSummarizedDiary("");
    setIsRegenerate(false);
    setValueSlider(1);
  }
  function generateTitleHandler() {
    setSummarizedDiary("");
    setIsRegenerate(false);
    if (diary == "") {
      return;
    }
    mutation.mutate();
  }
  function doneHandler() {
    dispatch(changeDiary(summarizedDiary));
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

          <ScrollView
            alwaysBounceVertical={false}
            showsVerticalScrollIndicator={false}
            alwaysBounceHorizontal={false}
            contentContainerStyle={[
              styles.scrollViewContainer,
              !isRegenerate && {
                flex: 1,
              },
            ]}
          >
            <MyView style={{ zIndex: 5 }}>
              <MyView style={styles.animationContainer}>
                <TextIntroAITypeWriter
                  boldText={boldText}
                  setBoldText={setBoldText}
                  secondLine={secondLine}
                  setSecondLine={setSecondLine}
                  firstMessage="Hi! I'm "
                  boldMessage="an AI"
                  secondMessage="I'll help you summary your diary"
                />
                <Image
                  style={styles.image}
                  source={require("../../../../../assets/robot3.gif")}
                ></Image>
              </MyView>

              <ChooseLanguageAI language={language} setLanguage={setLanguage} />

              <MyView style={styles.sliderContainer}>
                <SliderSummaryDiary
                  value={valueSlider}
                  setValue={setValueSlider}
                />
              </MyView>
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
                    Summary
                  </MyAppText>
                </MyPressable>
              </>
            )}

            {isRegenerate && (
              <GenerateDiaryComponent
                ispending={mutation.isPending}
                onPressDone={doneHandler}
                onPressRegenerate={generateTitleHandler}
                content={summarizedDiary}
              />
            )}
          </ScrollView>
        </MyView>
      </Modal>
    </>
  );
}

export default ModalAISummary;

const styles = StyleSheet.create({
  modalContainer: {
    borderRadius: 16,
    borderWidth: 2,
    paddingTop: 32,
    paddingBottom: 32,
    height: "80%",
  },
  scrollViewContainer: {
    justifyContent: "space-between",
    alignItems: "center",
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
    marginBottom: 12,
  },
  image: {
    height: 180,
    width: Platform.OS == "android" ? 200 : 160,
  },

  sliderContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
    marginTop: 12,
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
  textStyle: {
    fontFamily: "Poppins-Light",
    fontSize: 15,
    marginHorizontal: 20,
    marginBottom: 20,
  },
});
