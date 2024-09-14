import { StyleSheet } from "react-native";

import MyView from "../global/MyView";
import MyPressable from "../global/MyPressable";
import Icon from "../global/Icon";
import MyAppText from "../global/MyAppText";
import { images } from "../../constants/imageList";

function OptionItem({ text, onPress, type, message }: any) {
  let pathIcon;

  if (type === "edit") {
    pathIcon = images.iconOptionModal.edit;
  } else if (type === "share") {
    pathIcon = images.iconOptionModal.share;
  } else if (type === "addGroup") {
    pathIcon = images.iconOptionModal.addGroup;
  } else if (type === "invite") {
    pathIcon = images.iconOptionModal.invite;
  } else if (type === "copy") {
    pathIcon = images.iconOptionModal.copy;
  } else if (type === "delete") {
    pathIcon = images.iconOptionModal.delete;
  }

  return (
    <MyView style={styles.buttonContainer}>
      <MyPressable
        onPress={onPress}
        color="primary200"
        isBorder
        style={styles.button}
      >
        <Icon color="black" size={24} source={pathIcon}></Icon>
      </MyPressable>
      <MyAppText style={styles.text}>{text}</MyAppText>
    </MyView>
  );
}

export default OptionItem;

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 8,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    height: 55,
    width: 55,
    borderRadius: 100,
    marginBottom: 8,
  },
  text: {
    fontSize: 14,
    textAlign: "center",
    fontFamily: "Poppins-Medium",
    flexWrap: "wrap",
  },
});
