import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, ImageSourcePropType } from "react-native";
import { Border, Color, Padding } from "../../GlobalStyles";

export type TypePrimaryLabelIconStatType = {
  chevron?: ImageSourcePropType;

  /** Style props */
  typePrimaryLabelIconStatPosition?: string;
  typePrimaryLabelIconStatBackgroundColor?: string;
  typePrimaryLabelIconStatBorderRadius?: number;
  typePrimaryLabelIconStatWidth?: number | string;
  typePrimaryLabelIconStatHeight?: number | string;
  typePrimaryLabelIconStatPadding?: number | string;
  typePrimaryLabelIconStatMarginLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const TypePrimaryLabelIconStat = ({
  chevron,
  typePrimaryLabelIconStatPosition,
  typePrimaryLabelIconStatBackgroundColor,
  typePrimaryLabelIconStatBorderRadius,
  typePrimaryLabelIconStatWidth,
  typePrimaryLabelIconStatHeight,
  typePrimaryLabelIconStatPadding,
  typePrimaryLabelIconStatMarginLeft,
}: TypePrimaryLabelIconStatType) => {
  const typePrimaryLabelIconStatStyle = useMemo(() => {
    return {
      ...getStyleValue("position", typePrimaryLabelIconStatPosition),
      ...getStyleValue(
        "backgroundColor",
        typePrimaryLabelIconStatBackgroundColor
      ),
      ...getStyleValue("borderRadius", typePrimaryLabelIconStatBorderRadius),
      ...getStyleValue("width", typePrimaryLabelIconStatWidth),
      ...getStyleValue("height", typePrimaryLabelIconStatHeight),
      ...getStyleValue("padding", typePrimaryLabelIconStatPadding),
      ...getStyleValue("marginLeft", typePrimaryLabelIconStatMarginLeft),
    };
  }, [
    typePrimaryLabelIconStatPosition,
    typePrimaryLabelIconStatBackgroundColor,
    typePrimaryLabelIconStatBorderRadius,
    typePrimaryLabelIconStatWidth,
    typePrimaryLabelIconStatHeight,
    typePrimaryLabelIconStatPadding,
    typePrimaryLabelIconStatMarginLeft,
  ]);

  return (
    <View
      style={[styles.typeprimaryLabeliconStat, typePrimaryLabelIconStatStyle]}
    >
      <Image style={styles.chevronIcon} contentFit="cover" source={chevron} />
    </View>
  );
};

const styles = StyleSheet.create({
  chevronIcon: {
    alignSelf: "stretch",
    flex: 1,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    width: "100%",
  },
  typeprimaryLabeliconStat: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.peach300,
    width: 60,
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: Padding.p_sm,
  },
});

export default TypePrimaryLabelIconStat;
