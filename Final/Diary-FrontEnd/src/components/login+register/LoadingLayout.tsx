import { ActivityIndicator, StyleSheet } from "react-native";
import Icon from "../global/Icon";

import MyAppText from "../global/MyAppText";
import MyView from "../global/MyView";

function LoadingLayout({ message }: any) {
  const size = 50;
  return (
    <MyView color="white" style={styles.rootContainer}>
      <MyView style={styles.verticalStyle}>
        <MyView style={styles.horizontalStyle}>
          <Icon
            style={styles.image}
            color="black"
            size={size}
            source={require("../../../assets/loading/1.png")}
          />
          <Icon
            style={styles.image}
            color="black"
            size={40}
            source={require("../../../assets/loading/2.png")}
          />
          <Icon
            style={styles.image}
            color="black"
            size={size}
            source={require("../../../assets/loading/3.png")}
          />
          <Icon
            style={styles.image}
            color="black"
            size={size}
            source={require("../../../assets/loading/4.png")}
          />
          <Icon
            style={styles.image}
            color="black"
            size={size}
            source={require("../../../assets/loading/5.png")}
          />
        </MyView>
        <MyView style={styles.horizontalStyle}>
          <Icon
            style={styles.image}
            color="black"
            size={size}
            source={require("../../../assets/loading/6.png")}
          />
          <Icon
            style={styles.image}
            color="black"
            size={size}
            source={require("../../../assets/loading/7.png")}
          />
          <Icon
            style={styles.image}
            color="black"
            size={size}
            source={require("../../../assets/loading/8.png")}
          />
          <Icon
            style={styles.image}
            color="black"
            size={42}
            source={require("../../../assets/loading/9.png")}
          />
          <Icon
            style={styles.image}
            color="black"
            size={size}
            source={require("../../../assets/loading/1.png")}
          />
        </MyView>
        <MyView style={styles.horizontalStyle}>
          <Icon
            style={styles.image}
            color="black"
            size={size}
            source={require("../../../assets/loading/3.png")}
          />
          <Icon
            style={styles.image}
            color="black"
            size={size}
            source={require("../../../assets/loading/5.png")}
          />
          <Icon
            style={styles.image}
            color="black"
            size={size}
            source={require("../../../assets/loading/7.png")}
          />
          <Icon
            style={styles.image}
            color="black"
            size={42}
            source={require("../../../assets/loading/9.png")}
          />
          <Icon
            style={styles.image}
            color="black"
            size={40}
            source={require("../../../assets/loading/2.png")}
          />
        </MyView>
        <MyView style={styles.horizontalStyle}>
          <Icon
            style={styles.image}
            color="black"
            size={size}
            source={require("../../../assets/loading/4.png")}
          />
          <Icon
            style={styles.image}
            color="black"
            size={size}
            source={require("../../../assets/loading/6.png")}
          />
          <Icon
            style={styles.image}
            color="black"
            size={size}
            source={require("../../../assets/loading/8.png")}
          />
          <Icon
            style={styles.image}
            color="black"
            size={size}
            source={require("../../../assets/loading/7.png")}
          />
          <Icon
            style={styles.image}
            color="black"
            size={size}
            source={require("../../../assets/loading/6.png")}
          />
        </MyView>
        <MyView style={styles.horizontalStyle}>
          <Icon
            style={styles.image}
            color="black"
            size={size}
            source={require("../../../assets/loading/5.png")}
          />
          <Icon
            style={styles.image}
            color="black"
            size={size}
            source={require("../../../assets/loading/4.png")}
          />
          <Icon
            style={styles.image}
            color="black"
            size={size}
            source={require("../../../assets/loading/3.png")}
          />
          <Icon
            style={styles.image}
            color="black"
            size={40}
            source={require("../../../assets/loading/2.png")}
          />
          <Icon
            style={styles.image}
            color="black"
            size={size}
            source={require("../../../assets/loading/1.png")}
          />
        </MyView>
      </MyView>
    </MyView>
  );
}

export default LoadingLayout;

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
