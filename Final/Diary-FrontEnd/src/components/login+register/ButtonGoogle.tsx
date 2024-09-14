import { View, StyleSheet, Pressable, Image } from "react-native";
import MyAppText from "../global/MyAppText";

function ButtonGoogle({ isLogin }: any) {
  return (
    <View style={styles.buttonContainer}>
        <Pressable style={styles.button}>
          <Image
            style={styles.googleIcon}
            source={require("../../../assets/google.png")}
          />
          <MyAppText style={styles.text}>
            {isLogin ? "Sign in with Google" : "Sign up with Google"}
          </MyAppText>
          <Image style={styles.googleIcon} />
        </Pressable>
    </View>
  );
}

export default ButtonGoogle;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 24,
  },
  button: {
    borderWidth: 1,
    borderRadius: 16,
    borderColor: "black",
    paddingHorizontal: 30,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    overflow: "hidden",
  },
  googleIcon: {
    width: 18,
    height: 18,
  },
  text: {
    textAlign: "center",
    fontSize: 15,
  },
});
