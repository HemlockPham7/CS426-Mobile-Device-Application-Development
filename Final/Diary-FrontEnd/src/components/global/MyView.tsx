import { StyleSheet, View } from "react-native";

import { useAppSelector } from "../../redux store/hook";
import { ColorStorage } from "../../constants/styles";

function MyView({ children, style, color, isBorder, isShadow }: any) {
  const id = useAppSelector((state) => state.setting.idColor);
  const colors = ColorStorage.get(id)!;

  let currentColor = "transparent";
  if (color == "primary200") {
    currentColor = colors.primary200;
  } else if (color == "primary500") {
    currentColor = colors.primary500;
  } else if (color == "primary300") {
    currentColor = colors.primary300;
  } else if (color == "primary100") {
    currentColor = colors.primary100;
  } else if (color == "background") {
    currentColor = colors.backgroundColor;
  } else if (color) {
    currentColor = color;
  }

  return (
    <View
      style={[
        { backgroundColor: currentColor },
        isBorder && { borderColor: colors.borderColor, borderWidth: 1 },
        isShadow && { shadowColor: colors.primary500 },
        style,
      ]}
    >
      {children}
    </View>
  );
}

export default MyView;

const styles = StyleSheet.create({});
