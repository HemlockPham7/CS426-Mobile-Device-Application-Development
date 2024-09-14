import { StyleSheet, ScrollView } from "react-native";

import MyView from "../../components/global/MyView";
import ColorChooseComponent from "../../components/changeColorScreen/ColorChooseComponent";

function ChangeColorScreen() {
  return (
    <MyView style={styles.container}>
      <MyView style={styles.itemContainer}>
        <ColorChooseComponent id={0} />
        <ColorChooseComponent id={1} />
      </MyView>

      <MyView style={styles.itemContainer}>
        <ColorChooseComponent id={2} />
        <ColorChooseComponent id={3} />
      </MyView>

      <MyView style={styles.itemContainer}>
        <ColorChooseComponent id={4} />
      </MyView>
    </MyView>
  );
}

export default ChangeColorScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,

  },
  itemContainer:{
    flexDirection: "row",
    justifyContent: "space-around",
  }
});
