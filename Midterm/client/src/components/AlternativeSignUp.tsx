import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import Property1Facebook from "./Property1Facebook";
import { Color, FontSize, FontFamily, Padding } from "../../GlobalStyles";

const AlternativeSignUp = () => {
  return (
    <View style={styles.alternativeSignUp}>
      <View style={[styles.divider, styles.dividerFlexBox]}>
        <View style={styles.lineBorder} />
        <Text style={styles.or}>or</Text>
        <View style={[styles.line1, styles.lineBorder]} />
      </View>
      <View style={[styles.socialSignUp, styles.dividerFlexBox]}>
        <Property1Facebook
          vector={require("../../assets/vector3.png")}
          property1FacebookPosition="unset"
          property1FacebookMarginLeft="unset"
        />
        <Property1Facebook
          vector={require("../../assets/group-51.png")}
          property1FacebookPosition="unset"
          property1FacebookMarginLeft={16}
        />
        <Property1Facebook
          vector={require("../../assets/vector4.png")}
          property1FacebookPosition="unset"
          property1FacebookMarginLeft={16}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dividerFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    width: 375,
  },
  lineBorder: {
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.lightTextSecondary,
    borderStyle: "solid",
    flex: 1,
  },
  or: {
    fontSize: FontSize.bodyXLRegular_size,
    lineHeight: 12,
    fontWeight: "500",
    fontFamily: FontFamily.bodySMedium,
    color: Color.lightTextSecondary,
    textAlign: "center",
    width: 17,
    height: 16,
    marginLeft: 8,
  },
  line1: {
    marginLeft: 8,
  },
  divider: {
    alignItems: "center",
  },
  socialSignUp: {
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    marginTop: 24,
  },
  alternativeSignUp: {
    position: "absolute",
    top: 630,
    left: 0,
  },
});

export default AlternativeSignUp;
