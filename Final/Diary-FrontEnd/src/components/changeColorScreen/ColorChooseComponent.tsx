import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import MyView from "../global/MyView";
import MyPressable from "../global/MyPressable";
import { ColorStorage } from "../../constants/styles";
import { useAppSelector, useAppDispatch } from "../../redux store/hook";
import { changeColor } from "../../redux store/settingSlice";

function ColorChooseComponent({ id }: any) {
  const globalId = useAppSelector((state) => state.setting.idColor);
  const dispatch = useAppDispatch();
  const navigation = useNavigation<any>();

  const colorPallete = ColorStorage.get(id)!;

  function chooseColor(_id: number) {
    if (_id != globalId) {
      dispatch(changeColor({ id: _id }));
      navigation.reset({
        index: 0,
        routes: [{ name: "Home" }],
      });
    }
  }

  return (
    <MyPressable
      color="white"
      style={
        id != globalId
          ? [
              styles.container,
              // { shadowColor: colorPallete.primary500, shadowOpacity: 0.4 },
            ]
          : [
              styles.container,
              {
                borderColor: colorPallete.primary500,
                borderWidth: 2,
                shadowOpacity: 0,
              },
            ]
      }
      onPress={() => chooseColor(id)}
    >
      <MyView style={styles.primaryColorContainer}>
        <MyView
          color={colorPallete.primary500}
          style={styles.colorItemContainer}
        ></MyView>
        <MyView style={styles.colorItemContainer}></MyView>
        <MyView style={styles.colorItemContainer}></MyView>
        <MyView
          color={colorPallete.primary200}
          style={styles.colorItemContainer}
        ></MyView>
      </MyView>
    </MyPressable>
  );
}

export default ColorChooseComponent;

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: 150,
    borderRadius: 16,
    marginBottom: 20,
  
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    
    elevation: 4,

  },
  primaryColorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    paddingTop: 18,
  },
  colorItemContainer: {
    height: 55,
    width: 55,
    borderRadius: 12,
  },
});
