import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../../GlobalStyles";

export type TypePrimaryLabelLabelStaType = {
  buttonText?: string;

  /** Style props */
  typePrimaryLabelLabelStaPosition?: string;
  typePrimaryLabelLabelStaTop?: number | string;
  typePrimaryLabelLabelStaLeft?: number | string;
  typePrimaryLabelLabelStaWidth?: number | string;
  typePrimaryLabelLabelStaAlignSelf?: string;
  typePrimaryLabelLabelStaBackgroundColor?: string;
  typePrimaryLabelLabelStaMarginTop?: number | string;
  typePrimaryLabelLabelStaBorderRadius?: number;
  typePrimaryLabelLabelStaPaddingHorizontal?: number | string;
  typePrimaryLabelLabelStaPaddingVertical?: number | string;
  typePrimaryLabelLabelStaMarginLeft?: number | string;
  typePrimaryLabelLabelStaFlex?: number;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const TypePrimaryLabelLabelSta = ({
  buttonText,
  typePrimaryLabelLabelStaPosition,
  typePrimaryLabelLabelStaTop,
  typePrimaryLabelLabelStaLeft,
  typePrimaryLabelLabelStaWidth,
  typePrimaryLabelLabelStaAlignSelf,
  typePrimaryLabelLabelStaBackgroundColor,
  typePrimaryLabelLabelStaMarginTop,
  typePrimaryLabelLabelStaBorderRadius,
  typePrimaryLabelLabelStaPaddingHorizontal,
  typePrimaryLabelLabelStaPaddingVertical,
  typePrimaryLabelLabelStaMarginLeft,
  typePrimaryLabelLabelStaFlex,
}: TypePrimaryLabelLabelStaType) => {
  const typePrimaryLabelLabelStaStyle = useMemo(() => {
    return {
      ...getStyleValue("position", typePrimaryLabelLabelStaPosition),
      ...getStyleValue("top", typePrimaryLabelLabelStaTop),
      ...getStyleValue("left", typePrimaryLabelLabelStaLeft),
      ...getStyleValue("width", typePrimaryLabelLabelStaWidth),
      ...getStyleValue("alignSelf", typePrimaryLabelLabelStaAlignSelf),
      ...getStyleValue(
        "backgroundColor",
        typePrimaryLabelLabelStaBackgroundColor
      ),
      ...getStyleValue("marginTop", typePrimaryLabelLabelStaMarginTop),
      ...getStyleValue("borderRadius", typePrimaryLabelLabelStaBorderRadius),
      ...getStyleValue(
        "paddingHorizontal",
        typePrimaryLabelLabelStaPaddingHorizontal
      ),
      ...getStyleValue(
        "paddingVertical",
        typePrimaryLabelLabelStaPaddingVertical
      ),
      ...getStyleValue("marginLeft", typePrimaryLabelLabelStaMarginLeft),
      ...getStyleValue("flex", typePrimaryLabelLabelStaFlex),
    };
  }, [
    typePrimaryLabelLabelStaPosition,
    typePrimaryLabelLabelStaTop,
    typePrimaryLabelLabelStaLeft,
    typePrimaryLabelLabelStaWidth,
    typePrimaryLabelLabelStaAlignSelf,
    typePrimaryLabelLabelStaBackgroundColor,
    typePrimaryLabelLabelStaMarginTop,
    typePrimaryLabelLabelStaBorderRadius,
    typePrimaryLabelLabelStaPaddingHorizontal,
    typePrimaryLabelLabelStaPaddingVertical,
    typePrimaryLabelLabelStaMarginLeft,
    typePrimaryLabelLabelStaFlex,
  ]);

  return (
    <View
      style={[styles.typeprimaryLabellabelSta, typePrimaryLabelLabelStaStyle]}
    >
      <Text style={styles.button}>{buttonText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    fontSize: FontSize.headingH4_size,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.uIElementButton,
    color: Color.lightTextWhite,
    textAlign: "center",
  },
  typeprimaryLabellabelSta: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.peach300,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_21xl,
    paddingVertical: Padding.p_lg,
  },
});

export default TypePrimaryLabelLabelSta;
