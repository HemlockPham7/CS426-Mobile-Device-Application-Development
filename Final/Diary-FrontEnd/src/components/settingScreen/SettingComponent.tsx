import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import MyView from "../global/MyView";
import Icon from "../global/Icon";
import MyAppText from "../global/MyAppText";
import MyPressable from "../global/MyPressable";

function SettingComponent({ title, source, navigationName, style }: any) {
  const navigation = useNavigation<any>();

  function navigateScreen() {
    navigation.navigate(navigationName);
  }

  return (
    <MyPressable onPress={navigateScreen} style={styles.container}>
      <Icon color="none" source={source} size={28}></Icon>
      <MyAppText style={[styles.text, style]}>{title}</MyAppText>
      <MyPressable onPress={navigateScreen}>
        <Icon
          size={28}
          source={require("../../../assets/icons/ArrowRight2.png")}
        ></Icon>
      </MyPressable>
    </MyPressable>
  );
}

export default SettingComponent;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
  },
  text: {
    flex: 1,
    paddingLeft: 12,
    fontSize: 14,
  },
});
