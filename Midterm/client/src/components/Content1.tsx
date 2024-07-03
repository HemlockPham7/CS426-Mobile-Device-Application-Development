import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import TypeText from "./TypeText";
import TypePassword from "./TypePassword";
import TypePrimaryLabelLabelSta from "./TypePrimaryLabelLabelSta";
import { Color, FontFamily, FontSize, Padding } from "../../GlobalStyles";

const Content1 = () => {
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
          <TypeText userName="Email" typeTextPosition="unset" />
          <TypePassword
            name1="Password"
            password={require("../../assets/password.png")}
            typePasswordPosition="unset"
            typePasswordWidth={343}
            typePasswordMarginTop={16}
          />
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
          />
          <View style={[styles.text1, styles.text1FlexBox]}>
            <View style={styles.text1FlexBox}>
              <Text style={[styles.new, styles.newFlexBox]}>New?</Text>
              <Text style={[styles.signUp, styles.signUpTypo]}>Sign Up</Text>
            </View>
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
});

export default Content1;
