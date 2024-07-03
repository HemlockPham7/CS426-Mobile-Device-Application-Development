import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import TypePrimaryLabelLabelSta from "../components/TypePrimaryLabelLabelSta";
import { Border, FontSize, FontFamily, Color, Padding } from "../../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const Onboarding = () => {
  const navigation = useNavigation<any>();

  function navigateSearchScreen() {
    navigation.navigate("WelcomeScreen");
  }

  return (
    <View style={styles.onboarding3}>
      <TypePrimaryLabelLabelSta
        buttonText="Let’s start!"
        typePrimaryLabelLabelStaPosition="absolute"
        typePrimaryLabelLabelStaTop={704}
        typePrimaryLabelLabelStaLeft={16}
        typePrimaryLabelLabelStaWidth={343}
        typePrimaryLabelLabelStaAlignSelf="unset"
        typePrimaryLabelLabelStaBackgroundColor="#fea36b"
        typePrimaryLabelLabelStaMarginTop="unset"
        typePrimaryLabelLabelStaBorderRadius={20}
        typePrimaryLabelLabelStaPaddingHorizontal="unset"
        typePrimaryLabelLabelStaPaddingVertical="unset"
        typePrimaryLabelLabelStaMarginLeft="unset"
        typePrimaryLabelLabelStaTextColor="#fff"
        onPress={navigateSearchScreen}
      />
      <View style={styles.illustration}>
        <Image
          style={styles.triprafikiIcon}
          contentFit="cover"
          source={require("../../assets/triprafiki.png")}
        />
        <Text style={styles.bookingTicketsFor}>
          Booking tickets for planes and trains
        </Text>
      </View>
      <View style={styles.slider}>
        <View style={styles.vector} />
        <View style={[styles.vector1, styles.vectorLayout]} />
        <View style={[styles.vector2, styles.vectorLayout]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  vectorLayout: {
    marginLeft: 5,
    height: 2,
    borderRadius: Border.br_11xs_5,
    flex: 1,
  },
  triprafikiIcon: {
    height: 300,
    width: 343,
  },
  bookingTicketsFor: {
    fontSize: FontSize.headingH4_size,
    lineHeight: 26,
    fontWeight: "500",
    fontFamily: FontFamily.bodySMedium,
    color: Color.lightUIElementContrast,
    textAlign: "center",
    width: 242,
  },
  illustration: {
    top: 150,
    left: 0,
    height: 387,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    position: "absolute",
  },
  vector: {
    height: 2,
    borderRadius: Border.br_11xs_5,
    backgroundColor: Color.lightUIElementContrast30,
    flex: 1,
  },
  vector1: {
    backgroundColor: Color.lightUIElementContrast30,
    marginLeft: 5,
  },
  vector2: {
    backgroundColor: Color.lightUIElementContrast,
  },
  slider: {
    top: 68,
    left: 16,
    flexDirection: "row",
    width: 343,
    position: "absolute",
  },
  onboarding3: {
    backgroundColor: Color.lightBackgroundScreen,
    width: "100%",
    height: 812,
    overflow: "hidden",
    flex: 1,
  },
});

export default Onboarding;
