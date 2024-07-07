import React, { useMemo } from "react";
import { Text, StyleSheet, View, ImageSourcePropType, TextInput } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border, Padding } from "../../GlobalStyles";

export type TypePasswordType = {
  name1?: string;
  password?: ImageSourcePropType;

  /** Style props */
  typePasswordPosition?: string;
  typePasswordWidth?: number | string;
  typePasswordMarginTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const TypePassword = ({
  name1,
  password,
  typePasswordPosition,
  typePasswordWidth,
  typePasswordMarginTop,
}: TypePasswordType) => {
  const typePasswordStyle = useMemo(() => {
    return {
      ...getStyleValue("position", typePasswordPosition),
      ...getStyleValue("width", typePasswordWidth),
      ...getStyleValue("marginTop", typePasswordMarginTop),
    };
  }, [typePasswordPosition, typePasswordWidth, typePasswordMarginTop]);

  return (
    <View style={[styles.typepassword, typePasswordStyle]}>
      <TextInput 
        style={styles.name} 
        placeholder={name1}
      />
      <Image style={styles.passwordIcon} contentFit="cover" source={password} />
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    fontSize: FontSize.bodyXLRegular_size,
    lineHeight: 22,
    fontFamily: FontFamily.bodyMRegular,
    color: Color.lightTextSecondary,
    textAlign: "center",
  },
  passwordIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  typepassword: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.lightTextWhite,
    width: 343,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_mini,
  },
});

export default TypePassword;
