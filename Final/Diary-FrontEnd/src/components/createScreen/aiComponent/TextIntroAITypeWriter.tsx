import { StyleSheet } from "react-native";
import TypeWriterEffect from "react-native-typewriter-effect";

import MyView from "../../global/MyView";

function TextIntroAITypeWriter({
  boldText,
  setBoldText,
  secondLine,
  setSecondLine,
  firstMessage,
  boldMessage,
  secondMessage,
}: any) {
  return (
    <MyView>
      <MyView style={{ flexDirection: "row", marginTop: 4, width: 240 }}>
        <TypeWriterEffect
          style={{
            fontFamily: "Poppins-Light",
            fontSize: 30,
            paddingLeft: 24,
          }}
          minDelay={100}
          onTypingEnd={() => setBoldText(true)}
          content={firstMessage}
        />
        {boldText && (
          <TypeWriterEffect
            style={{
              fontFamily: "Poppins-Bold",
              fontSize: 30,
            }}
            minDelay={100}
            content={boldMessage}
            onTypingEnd={() => setSecondLine(true)}
          />
        )}
      </MyView>

      {secondLine && (
        <TypeWriterEffect
          style={{
            fontFamily: "Poppins-Light",
            fontSize: 30,
            width: 240,
            paddingLeft: 24,
          }}
          minDelay={100}
          content={secondMessage}
        />
      )}
    </MyView>
  );
}

export default TextIntroAITypeWriter;

const styles = StyleSheet.create({});
