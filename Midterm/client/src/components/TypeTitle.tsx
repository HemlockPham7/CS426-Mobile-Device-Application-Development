import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontFamily, FontSize, Color, Border, Padding } from "../../GlobalStyles";

export type TypeTitleType = {
  name1?: string;
  text?: string;

  /** Style props */
  typeTitlePosition?: string;
  typeTitleMarginTop?: number | string;
  typeTitleWidth?: number | string;
  typeTitleFlex?: number;
  typeTitleMarginLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const TypeTitle = ({
  name1,
  text,
  typeTitlePosition,
  typeTitleMarginTop,
  typeTitleWidth,
  typeTitleFlex,
  typeTitleMarginLeft,
}: TypeTitleType) => {
  const typeTitleStyle = useMemo(() => {
    return {
      ...getStyleValue("position", typeTitlePosition),
      ...getStyleValue("marginTop", typeTitleMarginTop),
      ...getStyleValue("width", typeTitleWidth),
      ...getStyleValue("flex", typeTitleFlex),
      ...getStyleValue("marginLeft", typeTitleMarginLeft),
    };
  }, [
    typeTitlePosition,
    typeTitleMarginTop,
    typeTitleWidth,
    typeTitleFlex,
    typeTitleMarginLeft,
  ]);

  return (
    <View style={[styles.typetitle, typeTitleStyle]}>
      <Text style={[styles.name, styles.nameTypo]}>{name1}</Text>
      <Text style={[styles.text, styles.nameTypo]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  nameTypo: {
    textAlign: "center",
    fontFamily: FontFamily.bodyMRegular,
  },
  name: {
    fontSize: FontSize.bodySMedium_size,
    lineHeight: 16,
    color: Color.lightTextSecondary,
  },
  text: {
    fontSize: FontSize.bodyXLRegular_size,
    lineHeight: 22,
    color: Color.lightUIElementContrast,
    marginTop: 4,
  },
  typetitle: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.lightTextWhite,
    width: 343,
    height: 54,
    paddingHorizontal: Padding.p_base,
    paddingTop: Padding.p_9xs,
    paddingBottom: Padding.p_base,
  },
});

export default TypeTitle;
