import { Alert, Keyboard, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { signIn } from "../../api/authentication/auth";

import MyView from "../../components/global/MyView";
import Icon from "../../components/global/Icon";
import MyPressable from "../../components/global/MyPressable";
import FormInput from "../../components/login+register/FormInput";
import ButtonConfirm from "../../components/login+register/ButtonConfirm";
import MyAppText from "../../components/global/MyAppText";
import ModalLoading from "../../components/global/ModalLoading";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../api/firebaseConfig/firebase";
import { ModalForgetPassword } from "../../components/login+register/ModalForgetPassword";

function ModalLogin({ isVisible, setVisibleModal }: any) {
  const navigation = useNavigation<any>();

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isForgetPassword, setIsForgetPassword] = useState(false);

  function navigateToSignUpScreen() {
    navigation.navigate("SignUp");
  }

  function onChangeTextHandler(text: string, signal: string) {
    if (signal == "Email") {
      setEnteredEmail(text);
    } else if (signal == "Password") {
      setEnteredPassword(text);
    }
  }

  function submitHandler() {
    let email = enteredEmail;
    let password = enteredPassword;

    email.trim();
    password.trim();

    const regexp = new RegExp(
      "[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
    );
    const isValidEmail = regexp.test(email);
    const isValidPassword = password.length > 6;

    if (!isValidEmail) {
      Alert.alert("LOGIN FAILED", "Please enter a valid email");
      return;
    } else if (!isValidPassword) {
      Alert.alert("LOGIN FAILED", "Please enter a long password");
      return;
    }

    logInUser(email, password);
  }

  async function logInUser(email: string, password: string) {
    setIsAuthenticating(true);
    try {
      await signIn(email, password);
    } catch (err) {
      console.log(err);
      Alert.alert("LOGIN FAILED", "Please login again");
    }
    setIsAuthenticating(false);
  }

  const triggerResetEmail = async () => {
    let email = enteredEmail;

    email.trim();
    const regexp = new RegExp(
      "[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
    );
    const isValidEmail = regexp.test(email);
    if (!isValidEmail) {
      Alert.alert("LOGIN FAILED", "Please enter a valid email");
      return;
    }

    await sendPasswordResetEmail(auth, enteredEmail);
    setIsForgetPassword(true);
  };

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={() => setVisibleModal(false)}
      style={{ margin: 0, justifyContent: "flex-end" }}
    >
      <ModalLoading
        isLoading={isAuthenticating}
        message="Logging in"
      ></ModalLoading>

      <ModalForgetPassword
        isVisible={isForgetPassword}
        setVisibleModal={setIsForgetPassword}
      />

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
          <MyAppText style={styles.title}>Welcome Back</MyAppText>
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
          <MyView style={styles.forgotTextContainer}>
            <MyPressable onPress={() => triggerResetEmail()}>
              <MyAppText style={styles.forgotText}>
                Forgot your password?
              </MyAppText>
            </MyPressable>
          </MyView>
          <ButtonConfirm isLogin={true} onPress={submitHandler} />
        </MyPressable>
      </MyView>
    </Modal>
  );
}

export default ModalLogin;

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
