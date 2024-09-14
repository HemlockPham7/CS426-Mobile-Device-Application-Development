import { StyleSheet, TextInput } from "react-native";
import React from "react";

import { useAppSelector } from "../../redux store/hook";
import { ColorStorage } from "../../constants/styles";

const MyTextInput = React.forwardRef(
  (
    {
      color,
      style,
      children,
      isBorder,
      value,
      onChangeText,
      placeholder,
      placeholderTextColor,
      autoFocus,
      multiline,
      autoCapitalize,
      onSubmitEditing,
      pointerEvents,
      onBlur,
      onFocus
    }: any,
    ref: any
  ) => {
    const id = useAppSelector((state) => state.setting.idColor);
    const colors = ColorStorage.get(id)!;

    let currentColor = "transparent";
    if (color == "primary500") {
      currentColor = colors.primary500;
    } else if (color == "primary200") {
      currentColor = colors.primary200;
    } else if (color == "background") {
      currentColor = colors.backgroundColor;
    } else currentColor = color;

    return (
      <TextInput
        autoCorrect={false}
        autoFocus={autoFocus}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        onChangeText={(text) => onChangeText(text)}
        multiline={multiline}
        onSubmitEditing={onSubmitEditing}
        autoCapitalize={autoCapitalize && "none"}
        pointerEvents={pointerEvents}
        onBlur={onBlur}
        ref={ref}
        onFocus={onFocus}
        scrollEnabled={false}
        style={[
          { backgroundColor: currentColor, fontFamily: "Poppins-Regular" },
          isBorder && { borderColor: colors.primary500 },
          style,
        ]}
      >
        {children}
      </TextInput>
    );
  }
);

export default MyTextInput;

const styles = StyleSheet.create({});
