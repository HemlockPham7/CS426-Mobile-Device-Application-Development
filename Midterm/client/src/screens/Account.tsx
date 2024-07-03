import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import Tabbar from "../components/Tabbar";
import TypeLabel from "../components/TypeLabel";
import TypeSecondaryLabelLabel from "../components/TypeSecondaryLabelLabel";
import { Border, FontSize, FontFamily, Color } from "../../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const Account = () => {
  const navigation = useNavigation<any>();

  function navigatePersonalInformationScreen() {
    navigation.navigate("AccountPersonalInformation");
  }

  return (
    <View style={styles.account}>
      <Tabbar />
      <TypeLabel
        title="Account"
        typeLabelPosition="absolute"
        typeLabelTop={44}
        typeLabelLeft={0}
      />
      <Image
        style={styles.avatarIcon}
        contentFit="cover"
        source={require("../../assets/avatar1.png")}
      />
      <Text style={styles.victoriaYoker}>Victoria Yoker</Text>
      <View style={styles.accountItem}>
        <TouchableOpacity style={styles.itemFlexBox} onPress={navigatePersonalInformationScreen}>
          <Image
            style={[styles.accountIcon, styles.accountIconLayout]}
            contentFit="cover"
            source={require("../../assets/account-icon.png")}
          />
          <Text style={styles.personalInformation}>Personal information</Text>
        </TouchableOpacity>

        <View style={[styles.item1, styles.itemFlexBox]}>
          <Image
            style={[styles.accountIcon, styles.accountIconLayout]}
            contentFit="cover"
            source={require("../../assets/account-icon1.png")}
          />
          <Text style={styles.personalInformation}>Payment and cards</Text>
        </View>
        <View style={[styles.item1, styles.itemFlexBox]}>
          <Image
            style={styles.accountIconLayout}
            contentFit="cover"
            source={require("../../assets/account-icon2.png")}
          />
          <Text style={styles.personalInformation}>Saved</Text>
        </View>
        <View style={[styles.item1, styles.itemFlexBox]}>
          <Image
            style={[styles.accountIcon, styles.accountIconLayout]}
            contentFit="cover"
            source={require("../../assets/account-icon3.png")}
          />
          <Text style={styles.personalInformation}>Booking history</Text>
        </View>
        <View style={[styles.item1, styles.itemFlexBox]}>
          <Image
            style={[styles.accountIcon, styles.accountIconLayout]}
            contentFit="cover"
            source={require("../../assets/account-icon4.png")}
          />
          <Text style={styles.personalInformation}>Settings</Text>
        </View>
      </View>
      <TypeSecondaryLabelLabel
        chevron={require("../../assets/account-icon5.png")}
        button="End session"
        typeSecondaryLabelLabelPosition="absolute"
        typeSecondaryLabelLabelTop={646}
        typeSecondaryLabelLabelLeft={16}
        typeSecondaryLabelLabelWidth={343}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  accountIconLayout: {
    height: 24,
    width: 24,
  },
  itemFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  avatarIcon: {
    top: 102,
    left: 138,
    borderRadius: Border.br_xl,
    width: 100,
    height: 100,
    position: "absolute",
  },
  victoriaYoker: {
    top: 210,
    left: 131,
    fontSize: FontSize.bodyXLRegular_size,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: FontFamily.headingH4,
    textAlign: "center",
    color: Color.lightUIElementContrast,
    position: "absolute",
  },
  accountIcon: {
    overflow: "hidden",
  },
  personalInformation: {
    fontSize: FontSize.bodyLSemiBold_size,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.bodySMedium,
    textAlign: "left",
    marginLeft: 8,
    color: Color.lightUIElementContrast,
  },
  item1: {
    marginTop: 24,
  },
  accountItem: {
    top: 274,
    left: 16,
    position: "absolute",
  },
  account: {
    backgroundColor: Color.lightBackgroundScreen,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Account;
