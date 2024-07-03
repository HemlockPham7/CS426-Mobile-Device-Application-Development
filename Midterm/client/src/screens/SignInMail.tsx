import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import Content1 from "../components/Content1";
import AlternativeSignUp from "../components/AlternativeSignUp";
import { Color } from "../../GlobalStyles";

const SignInMail = () => {
  return (
    <View style={styles.signInMail}>
      <Content1 />
      <Image
        style={styles.chevronIcon}
        contentFit="cover"
        source={require("../../assets/chevron2.png")}
      />
      <AlternativeSignUp />
    </View>
  );
};

const styles = StyleSheet.create({
  chevronIcon: {
    position: "absolute",
    top: 60,
    left: 16,
    width: 32,
    height: 32,
    overflow: "hidden",
  },
  signInMail: {
    backgroundColor: Color.lightBackgroundScreen,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default SignInMail;
