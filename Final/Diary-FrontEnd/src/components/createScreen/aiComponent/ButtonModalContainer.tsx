import { StyleSheet } from "react-native";

import MyPressable from "../../global/MyPressable";
import MyView from "../../global/MyView";
import Icon from "../../global/Icon";
import MyAppText from "../../global/MyAppText";

function ButtonModalContainer({ onPressDone, onPressRegenerate }: any) {
  return (
    <MyView style={styles.buttonContainer}>
      <MyPressable
        onPress={onPressRegenerate}
     
        style={styles.buttonModal}
        color="primary200"
        isStylePress
      >
        <Icon
          size={20}
          color="black"
          source={require("../../../../assets/icons/reload.png")}
        />
        <MyAppText style={styles.textButton}>Regenerate</MyAppText>
      </MyPressable>
      <MyPressable
        onPress={onPressDone}
        color="primary500"

        style={styles.buttonModal}
        isStylePress
      >
        <Icon
          size={22}
          color="black"
          source={require("../../../../assets/icons/tick.png")}
        />
        <MyAppText style={styles.textButton}>Done</MyAppText>
      </MyPressable>
    </MyView>
  );
}

export default ButtonModalContainer;

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  buttonModal: {
    width: 140,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 16,
  },
  textButton: {
    marginLeft: 8,
    fontSize: 13,
  },
});
