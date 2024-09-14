import { Image, StyleSheet } from "react-native";

import { useAppSelector } from "../../redux store/hook";
import { ColorStorage } from "../../constants/styles";

function Icon({ source, size, color, style }: any) {
  const id = useAppSelector((state) => state.setting.idColor);
  const colors = ColorStorage.get(id)!;

  let currentColor = colors.primary500;
  if (color == "primary200") {
    currentColor = colors.primary200;
  } else if (color == "background") {
    currentColor = colors.backgroundColor;
  } else if (color == "primary500") {
    currentColor = colors.primary500;
  } else if (color) {
    currentColor = color;
  }

  return (
    <Image
      source={source}
      style={[
        { height: size, width: size },
        color != "none" && { tintColor: currentColor },
        style,
      ]}
    />
  );
}

export default Icon;

const styles = StyleSheet.create({});
