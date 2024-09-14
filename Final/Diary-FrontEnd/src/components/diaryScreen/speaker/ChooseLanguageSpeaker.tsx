import { Platform, StyleSheet } from "react-native";
import { useState } from "react";

import MyPressable from "../../global/MyPressable";
import MyView from "../../global/MyView";
import MyAppText from "../../global/MyAppText";
import Icon from "../../global/Icon";

function ChooseLanguageSpeaker({ language, setLanguage }: any) {
  const [isShow, setIsShow] = useState(false);

  function onPressLanguage(language: string) {
    setIsShow(false);
    setLanguage(language);
  }

  return (
    <>
      <MyPressable
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 5,
        }}
        onPress={() => setIsShow(!isShow)}
      >
        {language == "Vietnamese" ? (
          <Icon
            color="none"
            size={32}
            source={require("../../../../assets/icons/vietnam.png")}
          />
        ) : (
          <Icon
            color="none"
            size={32}
            source={require("../../../../assets/icons/english.png")}
          />
        )}

        <MyAppText style={styles.textHeader}>{language}</MyAppText>
        <Icon
          color="black"
          size={24}
          source={require("../../../../assets/icons/Arrow_Down.png")}
        />

        {isShow && (
          <MyView isBorder color="white" style={styles.pickerLanguage}>
            <MyPressable
              onPress={() => onPressLanguage("English")}
              isStylePress
              style={styles.buttonContainer}
            >
              <Icon
                color="none"
                size={32}
                source={require("../../../../assets/icons/english.png")}
              />
              <MyAppText style={styles.text}>English</MyAppText>
            </MyPressable>
            <MyPressable
              onPress={() => onPressLanguage("Vietnamese")}
              isStylePress
              style={styles.buttonContainer}
            >
              <Icon
                color="none"
                size={32}
                source={require("../../../../assets/icons/vietnam.png")}
              />
              <MyAppText style={styles.text}>Vietnamese</MyAppText>
            </MyPressable>
          </MyView>
        )}
      </MyPressable>
    </>
  );
}

export default ChooseLanguageSpeaker;

const styles = StyleSheet.create({
  textHeader: {
    fontSize: 18,
    fontFamily: "Poppins-Medium",
    marginLeft:8,
  },
  pickerLanguage: {
    position: "absolute",
    top: 35,
    justifyContent: "center",
    alignItems: "center",

    borderRadius: 8,
    width: 200,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    width: "100%",
  },
  text: {
    paddingLeft: 20,
    marginVertical: 15,
  },
});
