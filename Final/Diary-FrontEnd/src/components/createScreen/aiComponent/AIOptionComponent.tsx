import { StyleSheet } from "react-native";
import { useState } from "react";
import TypeWriterEffect from "react-native-typewriter-effect";

import MyPressable from "../../global/MyPressable";
import MyView from "../../global/MyView";
import MyAppText from "../../global/MyAppText";
import Icon from "../../global/Icon";
import ModalAITitle from "./Title/ModalAITitle";
import ModalAISummary from "./Summary/ModalAISummary";
import { textAI } from "../../../constants/globalVariables";

function AIOptionComponent({ id }: any) {
  const [isVisible, setModalVisible] = useState(false);

  let gif = require("../../../../assets/gifs/title.gif");

  if (id == 1) gif = require("../../../../assets/gifs/summary.gif");
  if (id == 2) gif = require("../../../../assets/gifs/summary.gif");

  return (
    <>
      <MyPressable
        onPress={() => setModalVisible(true)}
        color="primary200"
        style={styles.container}
      >
        <MyView color="background" style={styles.iconContainer}>
          <Icon size={42} color="none" source={gif}></Icon>
        </MyView>

        <MyView style={styles.textContainer}>
          <MyAppText style={styles.title}>{textAI[id]?.title}</MyAppText>
          <MyAppText style={styles.description}>
            {textAI[id]?.description}
          </MyAppText>
        </MyView>
      </MyPressable>

      {id == 0 && (
        <ModalAITitle
          isVisible={isVisible}
          setModalVisible={setModalVisible}
          id={id}
        />
      )}

      {id == 1 && (
        <ModalAISummary
          isVisible={isVisible}
          setModalVisible={setModalVisible}
          id={id}
        />
      )}
    </>
  );
}

export default AIOptionComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 90,
    marginBottom: 24,
    marginHorizontal: 24,
    borderRadius: 24,
    paddingLeft: 12,
    paddingRight: 4,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    width: 60,
    borderRadius: 35,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
    paddingRight: 4,
  },
  title: {
    fontSize: 17,
    fontFamily: "Poppins-SemiBold",
  },
  description: {
    fontSize: 13,
    fontFamily: "Poppins-Light",
    marginTop: 4,
  },
});
