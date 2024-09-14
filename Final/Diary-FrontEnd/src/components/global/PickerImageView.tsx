import { StyleSheet } from "react-native";

import MyAppText from "./MyAppText";
import MyView from "./MyView";
import MyPressable from "./MyPressable";
import Icon from "./Icon";


export function PickerImageView({ pickImage }: any) {
  return (
    <MyView isBorder color="white" style={styles.modalPickerStyle}>
      <MyView style={styles.buttonModalContainer}>
        <MyPressable
          color="#faedc8"
          style={styles.buttonModal}
          onPress={() => pickImage(true)}
        >
          <Icon
            size={32}
            source={require("../../../assets/icons/Camera.png")}
            color="black"
          ></Icon>
          <MyAppText>Camera</MyAppText>
        </MyPressable>
        <MyPressable
          color="primary200"
          style={styles.buttonModal}
          onPress={() => pickImage(false)}
        >
          <Icon
            size={32}
            source={require("../../../assets/icons/Image.png")}
            color="black"
          ></Icon>
          <MyAppText>Library</MyAppText>
        </MyPressable>
      </MyView>
    </MyView>
  );
}

const styles = StyleSheet.create({
  modalPickerStyle: {
    height: 160,
    borderRadius: 12,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "space-evenly",
    marginHorizontal: 40,
    paddingHorizontal: 16,
  },
  buttonModalContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  buttonModal: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    borderWidth: 1,
    paddingVertical: 4,
    width: 100,
  },
});
