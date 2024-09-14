import { Pressable, StyleSheet, View } from "react-native";

import { useAppSelector } from "../../redux store/hook";
import { ColorStorage } from "../../constants/styles";
import { getColorIcon } from "../../constants/imageList";

function MyPressable({
  children,
  style,
  color,
  onPress,
  isBorder,
  isStylePress,
  idEmoji,
}: any) {
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
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        {
          backgroundColor: !pressed
            ? currentColor
            : isStylePress
            ? colors.borderColor
            : currentColor,
        },
        isBorder && {
          borderColor: idEmoji ? getColorIcon(idEmoji) : colors.borderColor,
          borderWidth: 1,
        },
        style,
      ]}
    >
      {children}
    </Pressable>
  );
}

export default MyPressable;

const styles = StyleSheet.create({});
