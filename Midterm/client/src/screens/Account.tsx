import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";
import { Image } from "expo-image";
import Tabbar from "../components/Tabbar";
import TypeLabel from "../components/TypeLabel";
import TypeSecondaryLabelLabel from "../components/TypeSecondaryLabelLabel";
import { Border, FontSize, FontFamily, Color } from "../../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import { signOut } from "firebase/auth";
import { auth } from "../api/firebaseConfig/firebase";
import { useAppSelector } from "../reduxstore/hooks";

const Account = () => {
  const navigation = useNavigation<any>();
  
  const firstName = useAppSelector((state) => state.information.firstName);
  const lastName = useAppSelector((state) => state.information.lastName);

  function navigatePersonalInformationScreen() {
    navigation.navigate("AccountPersonalInformation");
  }

  async function logOutHandler() {
    setTimeout(function () {
      signOut(auth)
        .then(() => {
          navigateWelcomeScreen();
        })
        .catch((error) => {
          // An error happened.
        });
    }, 1000);
  }

  function navigateWelcomeScreen() {
    navigation.navigate("WelcomeScreen");
  }
  
  const handleUpdatedInFuture = () => {
    Alert.alert("This function will be developed soon");
  };

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

      <Text style={styles.victoriaYoker}>{firstName} {lastName}</Text>

      <View style={styles.accountItem}>
        <TouchableOpacity style={styles.itemFlexBox} onPress={navigatePersonalInformationScreen}>
          <Image
            style={[styles.accountIcon, styles.accountIconLayout]}
            contentFit="cover"
            source={require("../../assets/account-icon.png")}
          />
          <Text style={styles.personalInformation}>Personal information</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.item1, styles.itemFlexBox]} onPress={handleUpdatedInFuture}>
          <Image
            style={[styles.accountIcon, styles.accountIconLayout]}
            contentFit="cover"
            source={require("../../assets/account-icon1.png")}
          />
          <Text style={styles.personalInformation}>Payment and cards</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.item1, styles.itemFlexBox]} onPress={handleUpdatedInFuture}>
          <Image
            style={styles.accountIconLayout}
            contentFit="cover"
            source={require("../../assets/account-icon2.png")}
          />
          <Text style={styles.personalInformation}>Saved</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.item1, styles.itemFlexBox]} onPress={handleUpdatedInFuture}>
          <Image
            style={[styles.accountIcon, styles.accountIconLayout]}
            contentFit="cover"
            source={require("../../assets/account-icon3.png")}
          />
          <Text style={styles.personalInformation}>Booking history</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.item1, styles.itemFlexBox]} onPress={handleUpdatedInFuture}>
          <Image
            style={[styles.accountIcon, styles.accountIconLayout]}
            contentFit="cover"
            source={require("../../assets/account-icon4.png")}
          />
          <Text style={styles.personalInformation}>Settings</Text>
        </TouchableOpacity>
      </View>
      <TypeSecondaryLabelLabel
        chevron={require("../../assets/account-icon5.png")}
        button="End session"
        typeSecondaryLabelLabelPosition="absolute"
        typeSecondaryLabelLabelTop={646}
        typeSecondaryLabelLabelLeft={16}
        typeSecondaryLabelLabelWidth={343}
        onPress={logOutHandler}
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
    fontSize: FontSize.bodyXLRegular_size,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: FontFamily.headingH4,
    textAlign: "center",
    color: Color.lightUIElementContrast,
    position: "absolute",
    alignSelf: "center"
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
