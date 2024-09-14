import Modal from "react-native-modal";
import { StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";

import MyView from "./MyView";
import MyPressable from "./MyPressable";
import MyAppText from "./MyAppText";

function PickerView({
  isVisible,
  setIsVisible,
  list,
  intiialValue,
  onPress,
}: any) {
  const [selectedItem, setSelectedItem] = useState(intiialValue);

  function onPressDoneHandler() {
    onPress(selectedItem);
    setIsVisible(false);
  }

  return (
    <Modal
      isVisible={isVisible}
      animationInTiming={400}
      animationOutTiming={400}
      style={{ justifyContent: "flex-end", margin: 0 }}
      onBackdropPress={() => setIsVisible(false)}
    >
      <MyView isBorder color="background" style={styles.container}>
        <Picker
          selectedValue={selectedItem}
          onValueChange={(itemValue, itemIndex) => setSelectedItem(itemValue)}
        >
          {list.map((item: any) => {
            return <Picker.Item key={item} label={item} value={item} />;
          })}
        </Picker>

        <MyView style={styles.bottomContainer}>
          <MyPressable
            onPress={onPressDoneHandler}
            isStylePress
            color="primary500"
            style={styles.buttonOK}
          >
            <MyAppText
              color="white"
              style={{ fontSize: 16, fontFamily: "Poppins-SemiBold" }}
            >
              Done
            </MyAppText>
          </MyPressable>
        </MyView>
      </MyView>
    </Modal>
  );
}

export default PickerView;

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    borderWidth: 2,
    justifyContent: "flex-start",
    paddingBottom: 40,
    paddingHorizontal: 12,
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  buttonOK: {
    borderRadius: 12,
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderColor: "black",
  },
});
