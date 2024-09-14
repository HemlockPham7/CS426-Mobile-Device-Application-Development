import { Alert, Keyboard, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import MyView from "../../components/global/MyView";
import Icon from "../../components/global/Icon";
import MyPressable from "../../components/global/MyPressable";
import FormInput from "../../components/login+register/FormInput";
import ButtonConfirm from "../../components/login+register/ButtonConfirm";
import MyAppText from "../../components/global/MyAppText";

function ModalSignUp({ isVisible, setVisibleModal }: any) {
  const navigation = useNavigation<any>();

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  function navigateToSignInScreen() {
    navigation.navigate("SignIn");
  }

  function onChangeTextHandler(text: string, signal: string) {
    if (signal == "Email") {
      setEnteredEmail(text);
    } else if (signal == "Password") {
      setEnteredPassword(text);
    } else if (signal == "Confirm") {
      setEnteredConfirmPassword(text);
    }
  }

  function submitHandler() {
    let email = enteredEmail;
    let password = enteredPassword;
    let confirmPassword = enteredConfirmPassword;

    email.trim();
    password.trim();
    confirmPassword.trim();

    const regexp = new RegExp(
      "[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
    );
    const isValidEmail = regexp.test(email);
    const isValidPassword = password.length > 6;
    const isConfirmPassword = password == confirmPassword;

    if (!isValidEmail) {
      Alert.alert("SIGN UP FAILED", "Please enter a valid email");
      return;
    } else if (!isValidPassword) {
      Alert.alert("SIGN UP FAILED", "Please enter a long password");
      return;
    } else if (!isConfirmPassword) {
      Alert.alert("SIGN UP FAILED", "Please confirm again your password");
      return;
    }

    chooseName(email, password);
  }

  function chooseName(email: string, password: string) {
    setVisibleModal(false);
    navigation.navigate("ChooseName", { email: email, password: password });
  }

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={() => setVisibleModal(false)}
      style={{ margin: 0, justifyContent: "flex-end" }}
    >
      <MyView style={styles.container} color="background">
        <MyView color="background" style={styles.buttonContainer}>
          <MyPressable
            style={{ padding: 12 }}
            onPress={() => setVisibleModal(false)}
          >
            <Icon
              size={20}
              color="none"
              source={require("../../../assets/icons/close-2.png")}
            />
          </MyPressable>
        </MyView>

        <MyPressable
          style={styles.loginScreenContainer}
          onPress={() => Keyboard.dismiss()}
        >
          <MyAppText style={styles.title}>Create an Account</MyAppText>

          <FormInput
            title="Email"
            placeholder="Email"
            secure={false}
            onChangeText={(text: any) => onChangeTextHandler(text, "Email")}
          />
          <FormInput
            title="Password"
            placeholder="Password"
            secure={!showPassword}
            onChangeText={(text: any) => onChangeTextHandler(text, "Password")}
            onPress={() => {
              setShowPassword(!showPassword);
            }}
            showPassword={showPassword}
          />
          <FormInput
            title="Confirm password"
            placeholder="Confirm password"
            secure={!showPassword}
            onChangeText={(text: any) => onChangeTextHandler(text, "Confirm")}
            onPress={() => {
              setShowPassword(!showPassword);
            }}
            showPassword={showPassword}
          />
          <MyView style={{ marginBottom: 75 }}></MyView>
          <ButtonConfirm onPress={submitHandler} isLogin={false} />
        </MyPressable>
      </MyView>
    </Modal>
  );
}

export default ModalSignUp;

const styles = StyleSheet.create({
  container: {
    height: "90%",
    borderRadius: 12,
    overflow: "hidden",
  },
  buttonContainer: {
    width: "100%",
    justifyContent: "center",
    paddingLeft: 12,
  },

  loginScreenContainer: {
    flex: 1,
    paddingTop: "25%",
    paddingHorizontal: "12%",
  },
  title: {
    fontFamily: "Poppins-Bold",
    fontSize: 26,
    textAlign: "center",
    marginBottom: 20,
  },
  forgotTextContainer: {
    borderColor: "#3a3b3b",
    marginBottom: 110,
    marginTop: 8,
  },
  forgotText: {
    borderColor: "black",
    fontSize: 11,
    opacity: 0.6,
    textAlign: "left",
  },
});
