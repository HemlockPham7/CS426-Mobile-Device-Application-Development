import React, { useMemo } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";
import { FontFamily, FontSize, Color, Border, Padding } from "../../GlobalStyles";

export type TypeTitleType = {
  name1?: string;
  text?: string;
  onChangeText?: (text: string) => void;

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
  onChangeText,
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
      <TextInput 
        style={[styles.text, styles.nameTypo]}
        value={text}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  nameTypo: {
    textAlign: "left",
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
