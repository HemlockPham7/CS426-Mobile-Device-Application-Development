import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import Content from "../components/Content";
import TypePrimaryLabelLabelSta from "../components/TypePrimaryLabelLabelSta";
import TypeArrow from "../components/TypeArrow";
import { FontSize, FontFamily, Color, Padding } from "../../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const TransportBoardingPass = () => {
  const navigation = useNavigation<any>();

  function navigateTransportSelectSeatsScreen() {
    navigation.navigate("TransportSelectSeats");
  }

  function navigateHomeScreen() {
    navigation.navigate("Home");
  }

  return (
    <View style={styles.transportBoardingPass}>
      <View style={styles.content}>
        <Image
          style={styles.subtractIcon}
          contentFit="cover"
          source={require("../../assets/subtract2.png")}
        />
        <Content />
      </View>

      <TypePrimaryLabelLabelSta
        buttonText="Download ticket"
        typePrimaryLabelLabelStaPosition="absolute"
        typePrimaryLabelLabelStaTop={702}
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
        onPress={navigateHomeScreen}
      />

      <TouchableOpacity style={styles.typearrow} onPress={navigateTransportSelectSeatsScreen}>
        <Image
          style={styles.chevronIcon}
          contentFit="cover"
          source={require("../../assets/chevron.png")}
        />
        <Text style={styles.title}>Boarding Pass</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  subtractIcon: {
    width: 343,
    height: 566,
  },
  content: {
    position: "absolute",
    height: "69.7%",
    width: "91.47%",
    top: "12.56%",
    right: "4.53%",
    bottom: "17.73%",
    left: "4%",
  },
  transportBoardingPass: {
    backgroundColor: Color.lightBackgroundScreen,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
  title: {
    flex: 1,
    fontSize: FontSize.headingH4_size,
    lineHeight: 26,
    fontWeight: "600",
    fontFamily: FontFamily.headingH4,
    color: Color.lightUIElementContrast,
    textAlign: "center",
  },
  chevronIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  typearrow: {
    width: 375,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: Padding.p_base,
    paddingTop: Padding.p_5xs,
    paddingRight: Padding.p_21xl,
    top: 44,
    left: 0,
    position: "absolute",
  },
});

export default TransportBoardingPass;
