import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import TypePrimaryLabelLabelSta from "../components/TypePrimaryLabelLabelSta";
import { Border, FontSize, FontFamily, Color, Padding } from "../../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const Onboarding1 = () => {
  const navigation = useNavigation<any>();

  function navigateSearchScreen() {
    navigation.navigate("Onboarding");
  }

  return (
    <View style={[styles.onboarding2, styles.onboarding2Layout]}>
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
      />
      <View style={styles.illustration}>
        <Image
          style={[styles.destinationrafikiIcon, styles.onboarding2Layout]}
          contentFit="cover"
          source={require("../../assets/destinationrafiki.png")}
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
  onboarding2Layout: {
    overflow: "hidden",
    width: "100%",
  },
  vectorLayout: {
    marginLeft: 5,
    height: 2,
    borderRadius: Border.br_11xs_5,
    flex: 1,
  },
  destinationrafikiIcon: {
    alignSelf: "stretch",
    maxWidth: "100%",
    height: 304,
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
    width: 375,
    height: 388,
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
    backgroundColor: Color.lightUIElementContrast,
  },
  vector2: {
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
  onboarding2: {
    backgroundColor: Color.lightBackgroundScreen,
    height: 812,
    flex: 1,
    overflow: "hidden",
    width: "100%",
  },
});

export default Onboarding1;
