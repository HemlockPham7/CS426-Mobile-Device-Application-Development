import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Border, FontSize, FontFamily, Color } from "../../GlobalStyles";

export type ASeatsType = {
  aBText?: string;

  /** Style props */
  propMarginLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ASeats = ({ aBText, propMarginLeft }: ASeatsType) => {
  const aSeatsStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", propMarginLeft),
    };
  }, [propMarginLeft]);

  return (
    <View style={[styles.aSeats, aSeatsStyle]}>
      <Text style={styles.a}>{aBText}</Text>
      <View style={[styles.vector, styles.vectorLayout]} />
      <View style={[styles.vector1, styles.vectorLayout]} />
      <View style={[styles.vector, styles.vectorLayout]} />
      <View style={[styles.vector3, styles.vectorLayout]} />
      <View style={[styles.vector3, styles.vectorLayout]} />
      <View style={[styles.vector, styles.vectorLayout]} />
      <View style={[styles.vector3, styles.vectorLayout]} />
    </View>
  );
};

const styles = StyleSheet.create({
  vectorLayout: {
    marginTop: 8,
    height: 48,
    width: 48,
    borderRadius: Border.br_3xs,
  },
  a: {
    fontSize: FontSize.headingH2_size,
    lineHeight: 32,
    fontWeight: "600",
    fontFamily: FontFamily.headingH4,
    color: Color.lightUIElementContrast,
    textAlign: "left",
  },
  vector: {
    backgroundColor: Color.green500,
  },
  vector1: {
    backgroundColor: Color.peach300,
  },
  vector3: {
    backgroundColor: Color.green50,
  },
  aSeats: {
    alignItems: "center",
  },
});

export default ASeats;
