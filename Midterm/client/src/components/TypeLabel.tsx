import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Padding } from "../../GlobalStyles";

export type TypeLabelType = {
  title?: string;

  /** Style props */
  typeLabelPosition?: string;
  typeLabelTop?: number | string;
  typeLabelLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const TypeLabel = ({
  title,
  typeLabelPosition,
  typeLabelTop,
  typeLabelLeft,
}: TypeLabelType) => {
  const typeLabelStyle = useMemo(() => {
    return {
      ...getStyleValue("position", typeLabelPosition),
      ...getStyleValue("top", typeLabelTop),
      ...getStyleValue("left", typeLabelLeft),
    };
  }, [typeLabelPosition, typeLabelTop, typeLabelLeft]);

  return (
    <View style={[styles.typelabel, typeLabelStyle]}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    flex: 1,
    fontSize: FontSize.headingH4_size,
    lineHeight: 26,
    fontWeight: "600",
    fontFamily: FontFamily.headingH4,
    color: Color.lightUIElementContrast,
    textAlign: "center",
  },
  typelabel: {
    width: 375,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Padding.p_base,
    paddingTop: Padding.p_5xs,
  },
});

export default TypeLabel;
