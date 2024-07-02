import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, ImageSourcePropType } from "react-native";
import { Border } from "../../GlobalStyles";

export type DarkModeNO1Type = {
  wiFiSignalLight?: ImageSourcePropType;

  /** Style props */
  darkModeNOPosition?: string;
  darkModeNOTop?: number | string;
  darkModeNORight?: number | string;
  darkModeNOLeft?: number | string;
  darkModeNOWidth?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const DarkModeNO1 = ({
  wiFiSignalLight,
  darkModeNOPosition,
  darkModeNOTop,
  darkModeNORight,
  darkModeNOLeft,
  darkModeNOWidth,
}: DarkModeNO1Type) => {
  const darkModeNOStyle = useMemo(() => {
    return {
      ...getStyleValue("position", darkModeNOPosition),
      ...getStyleValue("top", darkModeNOTop),
      ...getStyleValue("right", darkModeNORight),
      ...getStyleValue("left", darkModeNOLeft),
      ...getStyleValue("width", darkModeNOWidth),
    };
  }, [
    darkModeNOPosition,
    darkModeNOTop,
    darkModeNORight,
    darkModeNOLeft,
    darkModeNOWidth,
  ]);

  return (
    <View style={[styles.darkModeno, darkModeNOStyle]}>
      <Image
        style={styles.notchIcon}
        contentFit="cover"
        source={require("../../assets/notch.png")}
      />
      <View style={styles.statusIcons}>
        <Image
          style={styles.networkSignalLight}
          contentFit="cover"
          source={require("../../assets/network-signal-light.png")}
        />
        <Image
          style={[styles.wifiSignalLight, styles.lightSpaceBlock]}
          contentFit="cover"
          source={wiFiSignalLight}
        />
        <Image
          style={[styles.batteryLight, styles.lightSpaceBlock]}
          contentFit="cover"
          source={require("../../assets/battery--light.png")}
        />
      </View>
      <Image
        style={styles.indicatorIcon}
        contentFit="cover"
        source={require("../../assets/indicator.png")}
      />
      <Image
        style={styles.timeLight}
        contentFit="cover"
        source={require("../../assets/time--light.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  lightSpaceBlock: {
    marginLeft: 4,
    height: 14,
  },
  notchIcon: {
    top: 0,
    right: 0,
    left: 0,
    maxWidth: "100%",
    height: 30,
    position: "absolute",
    overflow: "hidden",
  },
  networkSignalLight: {
    width: 20,
    height: 14,
  },
  wifiSignalLight: {
    width: 16,
  },
  batteryLight: {
    width: 25,
  },
  statusIcons: {
    top: 16,
    right: 14,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  indicatorIcon: {
    top: 8,
    right: 71,
    width: 6,
    height: 6,
    position: "absolute",
  },
  timeLight: {
    top: 12,
    left: 21,
    borderRadius: Border.br_xl,
    width: 54,
    height: 21,
    position: "absolute",
    overflow: "hidden",
  },
  darkModeno: {
    height: 44,
    overflow: "hidden",
  },
});

export default DarkModeNO1;
