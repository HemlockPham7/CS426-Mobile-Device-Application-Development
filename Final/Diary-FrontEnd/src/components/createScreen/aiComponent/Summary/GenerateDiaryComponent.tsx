import { StyleSheet } from "react-native";
import { TypingAnimation } from "react-native-typing-animation";
import TypeWriterEffect from "react-native-typewriter-effect";
import ButtonModalContainer from "../ButtonModalContainer";
import { useState } from "react";

import MyView from "../../../global/MyView";
import MyPressable from "../../../global/MyPressable";
import MyAppText from "../../../global/MyAppText";
import Icon from "../../../global/Icon";

function GenerateDiaryComponent({
  ispending,
  onPressDone,
  onPressRegenerate,
  content,
}: any) {
  const [isDoneAnimationGenrateText, setDoneAnimationGenrateText] =
    useState(false);

  function skip() {
    setDoneAnimationGenrateText(true);
  }

  return (
    <>
      <MyView style={styles.textContainer}>
        {ispending ? (
          <MyView style={{ marginRight: 24, marginTop: 50 }}>
            <TypingAnimation dotMargin={6} dotAmplitude={4} dotSpeed={0.1} />
          </MyView>
        ) : (
          <>
            {!isDoneAnimationGenrateText ? (
              <>
                <TypeWriterEffect
                  style={styles.textStyle}
                  content={content}
                  minDelay={3}
                  maxDelay={3}
                  onTypingEnd={() => setDoneAnimationGenrateText(true)}
                />
                <MyPressable
                  onPress={skip}
                  color="primary200"
                  isBorder
                  style={styles.buttonModal}
                  isStylePress
                >
                  <Icon
                    size={24}
                    color="black"
                    source={require("../../../../../assets/icons/fast-forward.png")}
                  />
                  <MyAppText style={{ marginLeft: 8, fontSize: 13 }}>
                    Fast
                  </MyAppText>
                </MyPressable>
              </>
            ) : (
              <MyView style={{ width: "100%" }}>
                <MyAppText style={styles.textStyle}>{content}</MyAppText>
                <ButtonModalContainer
                  onPressDone={onPressDone}
                  onPressRegenerate={onPressRegenerate}
                />
              </MyView>
            )}
          </>
        )}
      </MyView>
    </>
  );
}

export default GenerateDiaryComponent;

const styles = StyleSheet.create({
  textContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
  },
  textStyle: {
    fontFamily: "Poppins-Light",
    fontSize: 15,
    marginLeft: 20,
    marginRight: 12,
    marginBottom: 30,
  },
  buttonModal: {
    width: 100,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 8,
    paddingVertical: 8,
    marginBottom: 50,
  },
});
