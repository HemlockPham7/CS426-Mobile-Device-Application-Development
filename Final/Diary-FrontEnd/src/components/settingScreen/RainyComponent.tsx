import { StyleSheet, Switch } from "react-native";

import MyPressable from "../global/MyPressable";
import MyAppText from "../global/MyAppText";
import Icon from "../global/Icon";

import { useAppSelector, useAppDispatch } from "../../redux store/hook";
import { changeIsRainy } from "../../redux store/settingSlice";
import { ColorStorage } from "../../constants/styles";

function RainyComponent() {
  const dispatch = useAppDispatch();
  const { idColor, isRainy } = useAppSelector((state) => state.setting);
  const colors = ColorStorage.get(idColor)!;

  function onChange() {
    dispatch(changeIsRainy({ isRainy: isRainy == 1 ? 0 : 1 }));
  }

  return (
    <>
      <MyPressable style={styles.container}>
        <Icon
          size={35}
          color="none"
          source={require("../../../assets/icons/rainny.png")}
        ></Icon>
        <MyAppText style={styles.text}>Rainy background</MyAppText>
        <Switch
          onValueChange={onChange}
          value={isRainy == 1 ? true : false}
          trackColor={{ true: colors.primary500 }}
        />
      </MyPressable>
    </>
  );
}

export default RainyComponent;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    marginRight: 4,
    marginLeft: -5,
  },
  text: {
    flex: 1,
    paddingLeft: 12,
    fontSize: 14,
  },
});
