import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType, TouchableOpacity } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../../GlobalStyles";

export type TypeSecondaryLabelLabelType = {
  chevron?: ImageSourcePropType;
  button?: string;

  /** Style props */
  typeSecondaryLabelLabelPosition?: string;
  typeSecondaryLabelLabelTop?: number | string;
  typeSecondaryLabelLabelLeft?: number | string;
  typeSecondaryLabelLabelWidth?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const TypeSecondaryLabelLabel = ({
  chevron,
  button,
  typeSecondaryLabelLabelPosition,
  typeSecondaryLabelLabelTop,
  typeSecondaryLabelLabelLeft,
  typeSecondaryLabelLabelWidth,
}: TypeSecondaryLabelLabelType) => {
  const typeSecondaryLabelLabelStyle = useMemo(() => {
    return {
      ...getStyleValue("position", typeSecondaryLabelLabelPosition),
      ...getStyleValue("top", typeSecondaryLabelLabelTop),
      ...getStyleValue("left", typeSecondaryLabelLabelLeft),
      ...getStyleValue("width", typeSecondaryLabelLabelWidth),
    };
  }, [
    typeSecondaryLabelLabelPosition,
    typeSecondaryLabelLabelTop,
    typeSecondaryLabelLabelLeft,
    typeSecondaryLabelLabelWidth,
  ]);

  return (
    <TouchableOpacity
      style={[styles.typesecondaryLabellabel, typeSecondaryLabelLabelStyle]}
    >
      <Image style={styles.chevronIcon} contentFit="cover" source={chevron} />
      <Text style={styles.button}>{button}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  chevronIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  button: {
    fontSize: FontSize.headingH4_size,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.uIElementButton,
    color: Color.alertsError,
    textAlign: "center",
    marginLeft: 8,
  },
  typesecondaryLabellabel: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.lightTextWhite,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_21xl,
    paddingVertical: Padding.p_lg,
  },
});

export default TypeSecondaryLabelLabel;
