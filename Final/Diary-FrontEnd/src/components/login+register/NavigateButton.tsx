import { View, Text, StyleSheet, Pressable } from "react-native";
import MyAppText from "../global/MyAppText";
import { ColorsBlue } from "../../constants/styles";

function NavigateButton({ isLogin, onPress }: any) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable onPress={onPress}>
        <View style={styles.textContainer}>
          <MyAppText style={styles.text}>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </MyAppText>
          <MyAppText style={styles.highLightText}>
            {isLogin ? "Register" : "Login"}
          </MyAppText>
        </View>
      </Pressable>
    </View>
  );
}

export default NavigateButton;

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    marginTop: 18,
  },
  textContainer: {
    flexDirection: "row",
  },
  text: {
    fontSize: 13,
    textAlign:'center',
    fontWeight: "500",
    marginHorizontal: 3,
    opacity:0.4,
    marginTop:1,
  },
  highLightText: {
    fontWeight: "500",
    fontSize: 14,
    color: ColorsBlue.primary500
  },
});
