import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import TypePrimaryLabelLabelSta from "./TypePrimaryLabelLabelSta";
import { Color, FontSize, FontFamily, Padding } from "../../GlobalStyles";

const Content2 = () => {
  return (
    <View style={styles.content}>
      <View style={styles.welcomeText}>
        <Text style={[styles.welcomeTo, styles.travellyFlexBox]}>
          Welcome to
        </Text>
        <View style={styles.logo}>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../../assets/vector5.png")}
          />
          <Text style={[styles.travelly, styles.travellyFlexBox]}>
            Travelly
          </Text>
        </View>
      </View>
      <View style={styles.buttons}>
        <TypePrimaryLabelLabelSta
          buttonText="Sign Up"
          typePrimaryLabelLabelStaPosition="unset"
          typePrimaryLabelLabelStaTop="unset"
          typePrimaryLabelLabelStaLeft="unset"
          typePrimaryLabelLabelStaWidth="unset"
          typePrimaryLabelLabelStaAlignSelf="stretch"
          typePrimaryLabelLabelStaBackgroundColor="#fea36b"
          typePrimaryLabelLabelStaMarginTop="unset"
          typePrimaryLabelLabelStaBorderRadius={20}
          typePrimaryLabelLabelStaPaddingHorizontal="unset"
          typePrimaryLabelLabelStaPaddingVertical="unset"
          typePrimaryLabelLabelStaMarginLeft="unset"
        />
        <TypePrimaryLabelLabelSta
          buttonText="Login"
          typePrimaryLabelLabelStaPosition="unset"
          typePrimaryLabelLabelStaTop="unset"
          typePrimaryLabelLabelStaLeft="unset"
          typePrimaryLabelLabelStaWidth="unset"
          typePrimaryLabelLabelStaAlignSelf="stretch"
          typePrimaryLabelLabelStaBackgroundColor="#fff"
          typePrimaryLabelLabelStaMarginTop={16}
          typePrimaryLabelLabelStaBorderRadius={20}
          typePrimaryLabelLabelStaPaddingHorizontal="unset"
          typePrimaryLabelLabelStaPaddingVertical="unset"
          typePrimaryLabelLabelStaMarginLeft="unset"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  travellyFlexBox: {
    textAlign: "center",
    color: Color.green700,
  },
  welcomeTo: {
    fontSize: FontSize.headingH4_size,
    lineHeight: 26,
    fontWeight: "600",
    fontFamily: FontFamily.headingH4,
    alignSelf: "stretch",
  },
  vectorIcon: {
    height: "54.55%",
    width: "47.06%",
    top: "0%",
    right: "26.47%",
    bottom: "45.45%",
    left: "26.47%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  travelly: {
    height: "36.36%",
    width: "100%",
    top: "63.64%",
    left: "0%",
    fontSize: FontSize.size_13xl,
    lineHeight: 32,
    fontWeight: "500",
    fontFamily: FontFamily.bodySMedium,
    position: "absolute",
  },
  logo: {
    width: 136,
    height: 88,
    marginTop: 32,
  },
  welcomeText: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  buttons: {
    marginTop: 120,
    alignSelf: "stretch",
  },
  content: {
    top: 164,
    left: 0,
    width: 375,
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    position: "absolute",
  },
});

export default Content2;
