import { Text, StyleSheet } from "react-native";

import { useAppSelector } from "../../redux store/hook";
import { ColorStorage } from "../../constants/styles";

function MyAppText({ children, style, color }: any) {
  const id = useAppSelector((state) => state.setting.idColor);
  const colors = ColorStorage.get(id)!;

  let currentColor = colors.textColor;
  if (color == "primary500") {
    currentColor = colors.primary500;
  } else if (color == "primary200") {
    currentColor = colors.primary200;
  } else if (color == "white") {
    currentColor = "white";
  } else {
    currentColor = color;
  }

  return (
    <Text
      style={[
        {
          color: currentColor,
          fontSize: 14,
          fontFamily: "Poppins-Regular",
          letterSpacing: 0.5,
        },
        { letterSpacing: 0.2 },
        style,
      ]}
    >
      {children}
    </Text>
  );
}

export default MyAppText;

const styles = StyleSheet.create({});
