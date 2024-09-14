import { StyleSheet } from "react-native";

import MyView from "../global/MyView";
import { getColorIcon } from "../../constants/imageList";

function YAxisMoodFlowComponent() {
  return (
    <MyView  style={styles.container}>
      <MyView color={getColorIcon(6)} style={styles.item}></MyView>
      <MyView color={getColorIcon(5)} style={styles.item}></MyView>
      <MyView color={getColorIcon(4)} style={styles.item}></MyView>
      <MyView color={getColorIcon(3)} style={styles.item}></MyView>
      <MyView color={getColorIcon(2)} style={styles.item}></MyView>
      <MyView color={getColorIcon(1)} style={styles.item}></MyView>
    </MyView>
  );
}

export default YAxisMoodFlowComponent;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: 20,
    marginLeft: 20,
    paddingTop: 12,
    paddingBottom: 20,
    justifyContent: "space-between",
  },
  item: {
    width: 13,
    height: 13,
    borderRadius: 15,
  },
});
