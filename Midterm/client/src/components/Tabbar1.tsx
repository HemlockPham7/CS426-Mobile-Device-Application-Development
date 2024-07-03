import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Padding, FontSize, FontFamily, Color, Border } from "../../GlobalStyles";

export type Tabbar1Type = {
  /** Style props */
  propTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Tabbar1 = ({ propTop }: Tabbar1Type) => {
  const tabbarStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  return (
    <View style={[styles.tabbar, tabbarStyle]}>
      <View style={[styles.tab, styles.tabFlexBox]}>
        <Image
          style={[styles.tabbarIcon, styles.tabbarIconLayout]}
          contentFit="cover"
          source={require("../../assets/tabbar-icon.png")}
        />
      </View>
      <View style={[styles.activeTab, styles.tabFlexBox]}>
        <View style={[styles.active, styles.tabFlexBox]}>
          <Image
            style={styles.tabbarIconLayout}
            contentFit="cover"
            source={require("../../assets/tabbar-icon4.png")}
          />
          <Text style={styles.booking}>Booking</Text>
        </View>
      </View>
      <View style={[styles.tab, styles.tabFlexBox]}>
        <Image
          style={[styles.tabbarIcon, styles.tabbarIconLayout]}
          contentFit="cover"
          source={require("../../assets/tabbar-icon2.png")}
        />
      </View>
      <View style={[styles.tab, styles.tabFlexBox]}>
        <Image
          style={[styles.tabbarIcon, styles.tabbarIconLayout]}
          contentFit="cover"
          source={require("../../assets/tabbar-icon5.png")}
        />
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
  booking: {
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
    top: 704,
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

export default Tabbar1;
