import * as React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Image } from "expo-image";
import AlternativeSignUp from "../components/AlternativeSignUp";
import { Color } from "../../GlobalStyles";
import Content3 from "../components/Content3";
import { useNavigation } from "@react-navigation/native";

const SignUpMail = () => {
  const navigation = useNavigation<any>();

  function navigateWelcomeScreen() {
    navigation.navigate("WelcomeScreen");
  }

  return (
    <View style={styles.signInMail}>
      <Content3 />
      <TouchableOpacity onPress={navigateWelcomeScreen}>
        <Image
          style={styles.chevronIcon}
          contentFit="cover"
          source={require("../../assets/chevron2.png")}
        />
      </TouchableOpacity>
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

export default SignUpMail;
