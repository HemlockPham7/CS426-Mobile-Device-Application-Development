import { StyleSheet } from "react-native";

import MyPressable from "../../global/MyPressable";
import Icon from "../../global/Icon";
import MyAppText from "../../global/MyAppText";
import MyView from "../../global/MyView";
import MyTextInput from "../../global/MyTextInput";

function InputEmailSharing({ onPressShare, email, setEmail }: any) {

  return (
    <MyView style={styles.container}>
      <MyView color="white" isBorder style={styles.textInputContainer}>
        <Icon
          size={32}
          source={require("../../../../assets/icons/Message.png")}
        />
        <MyTextInput
          placeholder="Email"
          placeholderTextColor={"#586e85"}
          onChangeText={(input: any) => setEmail(input)}
          value={email}
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.textInput}
        />
      </MyView>

      <MyAppText style={styles.intro}>
        You should validate the email before sharing the diary
      </MyAppText>

      <MyView style={styles.buttonContainer}>
        <MyPressable
          color="primary500"
          style={styles.button}
          onPress={onPressShare}
        >
          <MyAppText style={styles.text} color="white">
            Share
          </MyAppText>
        </MyPressable>
      </MyView>
    </MyView>
  );
}

export default InputEmailSharing;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 40,
  },
  textInputContainer: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 10,
    borderRadius: 12,
    borderWidth: 2,
    paddingVertical: 6,
    paddingHorizontal: 8,
  },
  textInput: {
    marginLeft: 10,
    width: "100%",
    fontSize: 14,
  },
  intro: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    opacity: 0.7,
    textAlign: "center",
  },
  validateMessage: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
    marginTop: -8,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 30,
    alignItems: "center",
  },
  button: {
    width: 100,
    alignItems: "center",
    paddingVertical: 12,
    borderRadius: 16,
  },
  text: {
    fontFamily: "Poppins-SemiBold",
  },
});
