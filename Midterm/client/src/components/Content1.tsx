import * as React from "react";
import { Text, StyleSheet, View, TouchableOpacity, TextInput, Alert } from "react-native";
import { Image } from "expo-image";
import TypeText from "./TypeText";
import TypePassword from "./TypePassword";
import TypePrimaryLabelLabelSta from "./TypePrimaryLabelLabelSta";
import { Border, Color, FontFamily, FontSize, Padding } from "../../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import { signIn } from "../api/authentication/auth";
import { getUserDatabase } from "../api/userData/informationUser";
import { useAppDispatch } from "../reduxstore/hooks";
import { updateEmail, updateFirstName, updateImage, updateIntroduction, updateLastName } from "../reduxstore/informationSlice";

const Content1 = () => {
  const [enteredEmail, setEnteredEmail] = React.useState("");
  const [enteredPassword, setEnteredPassword] = React.useState("");

  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();

  function navigateSignUpScreen() {
    navigation.navigate("SignUpMail");
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

  async function test() {
    const dataInformationUser = await getUserDatabase();
    dispatch(
      updateIntroduction({ introduction: dataInformationUser.introduction })
    );
    // dispatch(updateImage({ urlImage: dataInformationUser.urlImage }));
    dispatch(updateEmail({ email: dataInformationUser.email }));
    dispatch(updateFirstName({ firstName: dataInformationUser.firstName }));
    dispatch(updateLastName({ lastName: dataInformationUser.lastName }));
    console.log(dataInformationUser);
  }

  async function logInUser(email: string, password: string) {
    try {
      await signIn(email, password);
      await test();
      navigation.navigate("Home");
    } catch (err) {
      console.log(err);
      Alert.alert("LOGIN FAILED", "Please login again");
    }
  }

  return (
    <View style={styles.content}>
      <View style={styles.text}>
        <Text style={[styles.welcomeBack, styles.newFlexBox]}>
          Welcome back!
        </Text>
        <Text style={styles.signInAnd}>Sign in and let’s get going</Text>
      </View>
      <View style={styles.phoneField}>

        <View>
          <View style={styles.typetext}>
            <TextInput 
              style={styles.nameTypeText} 
              placeholder="Email"
              onChangeText={(text: any) => setEnteredEmail(text)}
            />
          </View>

          <View style={styles.typepassword}>
            <TextInput 
              style={styles.nameTypePassword} 
              placeholder="Password"
              onChangeText={(text: any) => setEnteredPassword(text)}
            />
            <Image style={styles.passwordIcon} contentFit="cover" source={require("../../assets/password.png")} />
          </View>
        </View>

        <View style={styles.button}>
          <TypePrimaryLabelLabelSta
            buttonText="Sign In"
            typePrimaryLabelLabelStaPosition="unset"
            typePrimaryLabelLabelStaTop="unset"
            typePrimaryLabelLabelStaLeft="unset"
            typePrimaryLabelLabelStaWidth={343}
            typePrimaryLabelLabelStaAlignSelf="unset"
            typePrimaryLabelLabelStaBackgroundColor="#fea36b"
            typePrimaryLabelLabelStaMarginTop="unset"
            typePrimaryLabelLabelStaBorderRadius={20}
            typePrimaryLabelLabelStaPaddingHorizontal="unset"
            typePrimaryLabelLabelStaPaddingVertical="unset"
            typePrimaryLabelLabelStaMarginLeft="unset"
            typePrimaryLabelLabelStaTextColor="#fff"
            onPress={submitHandler}
          />
          <View style={[styles.text1, styles.text1FlexBox]}>
            <TouchableOpacity style={styles.text1FlexBox} onPress={navigateSignUpScreen}>
              <Text style={[styles.signUp, styles.signUpTypo]}>Sign Up</Text>
            </TouchableOpacity>
            <Text style={[styles.forgotPassword, styles.signUpTypo]}>
              Forgot password?
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  newFlexBox: {
    textAlign: "center",
    color: Color.lightUIElementContrast,
  },
  text1FlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  signUpTypo: {
    fontFamily: FontFamily.bodySMedium,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.bodyXLRegular_size,
    textAlign: "center",
  },
  welcomeBack: {
    fontSize: FontSize.headingH2_size,
    lineHeight: 32,
    width: 343,
    fontFamily: FontFamily.headingH4,
    fontWeight: "600",
    textAlign: "center",
  },
  signInAnd: {
    marginTop: 8,
    lineHeight: 24,
    fontSize: FontSize.bodyXLRegular_size,
    width: 343,
    textAlign: "center",
    color: Color.lightUIElementContrast,
    fontFamily: FontFamily.headingH4,
    fontWeight: "600",
  },
  text: {
    alignSelf: "stretch",
  },
  new: {
    fontSize: FontSize.bodyLSemiBold_size,
    lineHeight: 20,
    fontFamily: FontFamily.bodyMRegular,
  },
  signUp: {
    color: Color.green700,
    marginLeft: 4,
  },
  forgotPassword: {
    color: Color.lightUIElementContrast,
    fontFamily: FontFamily.bodySMedium,
    fontWeight: "500",
  },
  text1: {
    justifyContent: "space-between",
    marginTop: 16,
    width: 343,
  },
  button: {
    marginTop: 32,
  },
  phoneField: {
    marginTop: 48,
    alignSelf: "stretch",
  },
  content: {
    position: "absolute",
    top: 140,
    left: 0,
    width: 375,
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    alignItems: "center",
  },
  nameTypeText: {
    fontSize: FontSize.bodyXLRegular_size,
    lineHeight: 22,
    fontFamily: FontFamily.bodyMRegular,
    color: Color.lightTextSecondary,
    textAlign: "center",
  },
  typetext: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.lightTextWhite,
    width: 343,
    flexDirection: "row",
    alignItems: "center",
    padding: Padding.p_base,
  },
  nameTypePassword: {
    fontSize: FontSize.bodyXLRegular_size,
    lineHeight: 22,
    fontFamily: FontFamily.bodyMRegular,
    color: Color.lightTextSecondary,
    textAlign: "center",
  },
  passwordIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  typepassword: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.lightTextWhite,
    width: 343,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_mini,
    marginTop: 16,
  },
});

export default Content1;
