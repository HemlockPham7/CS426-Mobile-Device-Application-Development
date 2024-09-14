import { ActivityIndicator, StyleSheet } from "react-native";
import Icon from "../global/Icon";

import MyAppText from "../global/MyAppText";
import MyView from "../global/MyView";

function LoadingLayoutNavigation({ message }: any) {
  const size = 50;
  return (
    <MyView color="white" style={styles.rootContainer}>
      <MyView style={styles.verticalStyle}>
        
      </MyView>
    </MyView>
  );
}

export default LoadingLayoutNavigation;

const styles = StyleSheet.create({
  rootContainer: {
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  verticalStyle: {
    alignItems: "center",
  },
  horizontalStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    marginHorizontal: 6,
    marginVertical: 6,
  },
});
