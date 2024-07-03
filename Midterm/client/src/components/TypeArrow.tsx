import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Padding } from "../../GlobalStyles";

export type TypeArrowType = {
  title?: string;

  /** Style props */
  typeArrowPosition?: string;
  typeArrowTop?: number | string;
  typeArrowLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const TypeArrow = ({
  title,
  typeArrowPosition,
  typeArrowTop,
  typeArrowLeft,
}: TypeArrowType) => {
  const typeArrowStyle = useMemo(() => {
    return {
      ...getStyleValue("position", typeArrowPosition),
      ...getStyleValue("top", typeArrowTop),
      ...getStyleValue("left", typeArrowLeft),
    };
  }, [typeArrowPosition, typeArrowTop, typeArrowLeft]);

  return (
    <View style={[styles.typearrow, typeArrowStyle]}>
      <Image
        style={styles.chevronIcon}
        contentFit="cover"
        source={require("../../assets/chevron.png")}
      />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  chevronIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  title: {
    flex: 1,
    fontSize: FontSize.headingH4_size,
    lineHeight: 26,
    fontWeight: "600",
    fontFamily: FontFamily.headingH4,
    color: Color.lightUIElementContrast,
    textAlign: "center",
  },
  typearrow: {
    width: 375,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: Padding.p_base,
    paddingTop: Padding.p_5xs,
    paddingRight: Padding.p_21xl,
  },
});

export default TypeArrow;
