import { StyleSheet, Alert } from "react-native";
import { useLayoutEffect, useState } from "react";

import MyView from "../../components/global/MyView";
import MyAppText from "../../components/global/MyAppText";
import MyTextInput from "../../components/global/MyTextInput";
import ButtonConfirm from "../../components/login+register/ButtonConfirm";

import { useAppDispatch } from "../../redux store/hook";
import { updateName } from "../../redux store/informationSlice";
import { signUp } from "../../api/authentication/auth";
import { saveNameDatabase } from "../../api/userData/informationUser";
import ModalLoading from "../../components/global/ModalLoading";

function ChooseNameScreen({ navigation, route }: any) {
  const [input, setInput] = useState("");
  const [countText, setCountText] = useState(0);
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const dispatch = useAppDispatch();
  const { email, password } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
    });
  }, []);

  function inputHandler(text: string) {
    if (text.length <= 16) {
      setInput(text);
      setCountText(text.length);
    }
  }
  async function register() {
    setIsAuthenticating(true);

    try {
      await signUp(email, password);
      try {
        await saveNameDatabase(input);
        dispatch(updateName({ name: input }));
      } catch (err) {
        Alert.alert("SIGN UP FAILED", "Please sign up again");
      }
      setIsAuthenticating(false);
    } catch (err) {
      setIsAuthenticating(false);
      Alert.alert("SIGN UP FAILED", "Please sign up again");
    }
  }

  return (
    <MyView style={{ flex: 1, paddingHorizontal: 12 }}>
      <ModalLoading isLoading={isAuthenticating} message="Loading"></ModalLoading>
      <MyAppText style={styles.primaryText}>Choose a nickname</MyAppText>

      <MyView style={styles.subContainer}>
        <MyAppText style={styles.countText}>
          You can change your name later
        </MyAppText>
        <MyAppText style={styles.countText}>{countText}/16</MyAppText>
      </MyView>

      <MyTextInput
        onChangeText={(text: any) => inputHandler(text)}
        value={input}
        placeholder="Enter your nickname"
        placeholderTextColor="#808080"
        isBorder
        style={styles.textInput}
      ></MyTextInput>

      <MyView
        style={{ flex: 1, justifyContent: "flex-end", marginBottom: "20%" }}
      >
        <ButtonConfirm onPress={register} isLogin={false} />
      </MyView>
    </MyView>
  );
}

export default ChooseNameScreen;

const styles = StyleSheet.create({
  primaryText: {
    fontSize: 20,
    fontFamily: "Poppins-Bold",
    marginTop: 24,
    marginBottom: 12,
  },
  subContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  countText: {
    fontSize: 13,
  },
  textInput: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "black",
    height: 60,
    paddingHorizontal: 12,
    fontSize: 16,
  },
});
