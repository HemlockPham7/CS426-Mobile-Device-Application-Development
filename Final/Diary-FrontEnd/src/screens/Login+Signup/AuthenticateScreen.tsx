import { StyleSheet, Alert, Keyboard } from "react-native";
import { useState } from "react";

import MyAppText from "../../components/global/MyAppText";
import MyView from "../../components/global/MyView";
import MyPressable from "../../components/global/MyPressable";
import AnimatedIntro from "../../components/global/AnimatedIntro";
import Icon from "../../components/global/Icon";
import ModalLogin from "./ModalLogin";
import ModalSignUp from "./ModalSignUp";

function AuthenticateScreen({}: any) {
  const [isVisibleLogin, setVisibleLogin] = useState(false);
  const [isVisibleSignUp, setVisibleSignUp] = useState(false);

  return (
    <MyPressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
      <AnimatedIntro />

      <MyView color="black" style={styles.modalContainer}>
        <MyPressable
          onPress={() => setVisibleSignUp(true)}
          color="white"
          style={styles.signUpButton}
        >
          <Icon
            size={24}
            color="none"
            source={require("../../../assets/icons/Message_Bold.png")}
          />
          <MyAppText
            style={{
              fontSize: 16,
              fontFamily: "Poppins-Medium",
              marginLeft: 12,
            }}
          >
            Sign up with Email
          </MyAppText>
        </MyPressable>

        <MyPressable
          onPress={() => setVisibleLogin(true)}
          color="#2e2e2e"
          style={styles.signUpButton}
        >
          <MyAppText
            color="white"
            style={{
              fontSize: 16,
              fontFamily: "Poppins-SemiBold",
            }}
          >
            Log in
          </MyAppText>
        </MyPressable>
      </MyView>

      <ModalLogin
        isVisible={isVisibleLogin}
        setVisibleModal={setVisibleLogin}
      />

      <ModalSignUp
        isVisible={isVisibleSignUp}
        setVisibleModal={setVisibleSignUp}
      />
    </MyPressable>
  );
}

export default AuthenticateScreen;

const styles = StyleSheet.create({
  modalContainer: {
    height: "30%",
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 24,
    overflow: "hidden",
  },
  signUpButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    height: 55,
    marginHorizontal: 24,
    borderRadius: 16,
    marginBottom: 16,
  },
});
