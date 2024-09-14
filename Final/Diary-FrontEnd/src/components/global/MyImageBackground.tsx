import { ImageBackground, StyleSheet } from "react-native";

import { useAppSelector } from "../../redux store/hook";
import { ColorStorage } from "../../constants/styles";

function MyImageBackground({ children, style, color, source }: any) {
  const id = useAppSelector((state) => state.setting.idColor);
  const colors = ColorStorage.get(id)!;

  let currentColor = "transparent";
  if (color == "primary200") {
    currentColor = colors.primary200;
  } else if (color == "primary500") {
    currentColor = colors.primary500;
  } else if (color == "background") {
    currentColor = colors.backgroundColor;
  } else if (color) {
    currentColor = color;
  }

  return (
    <ImageBackground
      source={source}
      style={style}
      imageStyle={{ tintColor: currentColor }}
    >
      {children}
    </ImageBackground>
  );
}

export default MyImageBackground;

const styles = StyleSheet.create({});
