import React, { useMemo } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../../GlobalStyles";

export type TypeTextType = {
  userName?: string;

  /** Style props */
  typeTextPosition?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const TypeText = ({ userName, typeTextPosition }: TypeTextType) => {
  const typeTextStyle = useMemo(() => {
    return {
      ...getStyleValue("position", typeTextPosition),
    };
  }, [typeTextPosition]);

  return (
    <View style={[styles.typetext, typeTextStyle]}>
      <TextInput 
        style={styles.name} 
        placeholder="Email"
      />
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
  typetext: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.lightTextWhite,
    width: 343,
    flexDirection: "row",
    alignItems: "center",
    padding: Padding.p_base,
  },
});

export default TypeText;
