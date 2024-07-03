import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Padding, FontSize, FontFamily, Color, Border } from "../../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const Tabbar = () => {
  const navigation = useNavigation<any>();

  function navigateHomeScreen() {
    navigation.navigate("Home");
  }

  function navigateBookingScreen() {
    navigation.navigate("Booking");
  }

  return (
    <View style={styles.tabbar}>
      <TouchableOpacity style={[styles.tab, styles.tabFlexBox]} onPress={navigateHomeScreen}>
        <Image
          style={[styles.tabbarIcon, styles.tabbarIconLayout]}
          contentFit="cover"
          source={require("../../assets/tabbar-icon.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.tab, styles.tabFlexBox]} onPress={navigateBookingScreen}>
        <Image
          style={styles.tabbarIconLayout}
          contentFit="cover"
          source={require("../../assets/tabbar-icon1.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.tab, styles.tabFlexBox]}>
        <Image
          style={[styles.tabbarIcon, styles.tabbarIconLayout]}
          contentFit="cover"
          source={require("../../assets/tabbar-icon2.png")}
        />
      </TouchableOpacity>
      <View style={[styles.activeTab, styles.tabFlexBox]}>
        <View style={[styles.active, styles.tabFlexBox]}>
          <Image
            style={[styles.tabbarIcon, styles.tabbarIconLayout]}
            contentFit="cover"
            source={require("../../assets/tabbar-icon3.png")}
          />
          <Text style={styles.account}>Account</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  tabbarIconLayout: {
    height: 24,
    width: 24,
  },
  tabbarIcon: {
    overflow: "hidden",
  },
  tab: {
    padding: Padding.p_5xs,
    flex: 1,
    alignItems: "center",
  },
  account: {
    fontSize: FontSize.bodyMRegular_size,
    lineHeight: 14,
    fontWeight: "600",
    fontFamily: FontFamily.headingH4,
    color: Color.lightUIElementContrast,
    textAlign: "center",
    marginLeft: 4,
  },
  active: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.peach50,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_11xs,
    flex: 1,
    alignItems: "center",
  },
  activeTab: {
    width: 150,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_7xs,
  },
  tabbar: {
    position: "absolute",
    top: 722,
    left: 0,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: -5,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    backgroundColor: Color.lightTextWhite,
    width: 375,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
  },
});

export default Tabbar;
