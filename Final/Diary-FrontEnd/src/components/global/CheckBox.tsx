import { StyleSheet } from "react-native";
import { CheckBox } from "@rneui/themed";

import MyView from "./MyView";
import MyAppText from "./MyAppText";
import { useAppSelector } from "../../redux store/hook";
import { ColorStorage } from "../../constants/styles";

function CheckBoxComponent({ check, setCheck, title }: any) {
  const colorId = useAppSelector((state) => state.setting.idColor);
  const colors = ColorStorage.get(colorId);

  return (
    <MyView style={{ flexDirection: "row", alignItems: "center" }}>
      <CheckBox
        center={true}
        containerStyle={{ backgroundColor: "transparent" }}
        checked={check}
        onPress={() => setCheck(!check)}
        iconType="material-community"
        checkedIcon="checkbox-marked"
        uncheckedIcon="checkbox-blank-outline"
        checkedColor={colors?.primary500}
      />
      <MyAppText style={styles.textStyle}>{title}</MyAppText>
    </MyView>
  );
}

export default CheckBoxComponent;

const styles = StyleSheet.create({
  textStyle: {
    marginLeft: -10,
  },
});
