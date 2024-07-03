import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import Content from "../components/Content";
import TypePrimaryLabelLabelSta from "../components/TypePrimaryLabelLabelSta";
import TypeArrow from "../components/TypeArrow";
import { Color } from "../../GlobalStyles";

const TransportBoardingPass = () => {
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
      />

      <TypeArrow
        title="Boarding Pass"
        typeArrowPosition="absolute"
        typeArrowTop={44}
        typeArrowLeft={0}
      />
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
});

export default TransportBoardingPass;
