import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import TypePrimaryLabelLabelSta from "../components/TypePrimaryLabelLabelSta";
import { Border, FontSize, FontFamily, Color, Padding } from "../../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const Onboarding2 = () => {
  const navigation = useNavigation<any>(); 

  function navigateSearchScreen() {
    navigation.navigate("Onboarding1");
  }

  return (
    <View style={[styles.onboarding1, styles.onboarding1Layout]}>
      <TypePrimaryLabelLabelSta
        buttonText="Next"
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
        onPress={navigateSearchScreen}
      />

      <View style={styles.illustration}>
        <Image
          style={[styles.strandedTravelerrafikiIcon, styles.onboarding1Layout]}
          contentFit="cover"
          source={require("../../assets/strandedtravelerrafiki.png")}
        />
        <Text style={styles.bookingTicketsFor}>
          Booking tickets for planes and trains
        </Text>
      </View>
      
      <View style={styles.slider}>
        <View style={[styles.vector, styles.vectorLayout]} />
        <View style={[styles.vector1, styles.vectorLayout]} />
        <View style={[styles.vector1, styles.vectorLayout]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  onboarding1Layout: {
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
  vectorLayout: {
    height: 2,
    borderRadius: Border.br_11xs_5,
    flex: 1,
  },
  strandedTravelerrafikiIcon: {
    alignSelf: "stretch",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  bookingTicketsFor: {
    fontSize: FontSize.headingH4_size,
    lineHeight: 26,
    fontWeight: "500",
    fontFamily: FontFamily.bodySMedium,
    color: Color.lightUIElementContrast,
    textAlign: "center",
    width: 242,
    marginTop: 32,
  },
  illustration: {
    top: 150,
    left: 0,
    width: 375,
    height: 388,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    position: "absolute",
  },
  vector: {
    backgroundColor: Color.lightUIElementContrast,
  },
  vector1: {
    backgroundColor: Color.lightUIElementContrast30,
    marginLeft: 5,
  },
  slider: {
    top: 68,
    left: 16,
    width: 343,
    flexDirection: "row",
    position: "absolute",
  },
  onboarding1: {
    backgroundColor: Color.lightBackgroundScreen,
    height: 812,
  },
});

export default Onboarding2;
