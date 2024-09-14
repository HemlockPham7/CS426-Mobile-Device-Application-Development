import { View, StyleSheet, Pressable } from "react-native";
import MyAppText from "../global/MyAppText";

import { ColorsBlue } from "../../constants/styles";
import MyPressable from "../global/MyPressable";

function ButtonConfirm({ isLogin, onPress }: any) {
  return (
    <View style={styles.buttonContainer}>
      <MyPressable color="primary500" onPress={onPress} style={styles.button}>
        <MyAppText style={styles.text}>
          {isLogin ? "Login" : "Register"}
        </MyAppText>
      </MyPressable>
    </View>
  );
}

export default ButtonConfirm;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 24,
    borderRadius: 16,
    overflow: "hidden",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
  },
  text: {
    fontSize: 16,
    color: "white",
    fontFamily: "Poppins-Bold",
  },
});
