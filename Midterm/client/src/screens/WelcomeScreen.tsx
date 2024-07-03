import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Color } from "../../GlobalStyles";
import Content2 from "../components/Content2";

const WelcomeScreen = () => {
  return (
    <View style={styles.welcomeScreen}>
      <Content2 />
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeScreen: {
    backgroundColor: Color.lightBackgroundScreen,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default WelcomeScreen;
