import Modal from "react-native-modal";
import { StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

import MyView from "../global/MyView";
import MyPressable from "../global/MyPressable";
import MyAppText from "../global/MyAppText";
import { useAppDispatch } from "../../redux store/hook";
import {
  changeHourReminder,
  changeMinuteReminder,
} from "../../redux store/settingSlice";

const hours = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23,
];

function ModalPickTime({
  isVisible,
  setModalVisible,
  hourPicker,
  minutePicker,
}: any) {
  const dispatch = useAppDispatch();

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={() => setModalVisible(false)}
      backdropOpacity={0.4}
    >
      <MyView color="white" style={styles.container}>
        <MyView style={styles.pickerContainer}>
          <MyView style={{ flex: 1 }}>
            <Picker
              selectedValue={hourPicker}
              onValueChange={(itemValue) =>
                dispatch(changeHourReminder(parseInt(itemValue, 10)))
              }
            >
              {hours.map((item: any) => {
                const hour = item.toString().padStart(2, "0");
                return <Picker.Item key={hour} label={hour} value={hour} />;
              })}
            </Picker>
          </MyView>

          <MyView style={{ flex: 1 }}>
            <Picker
              selectedValue={minutePicker}
              onValueChange={(itemValue) =>
                dispatch(changeMinuteReminder(parseInt(itemValue, 10)))
              }
            >
              {Array.from(Array(60).keys()).map((item: any) => {
                const minute = item.toString().padStart(2, "0");
                return (
                  <Picker.Item key={minute} label={minute} value={minute} />
                );
              })}
            </Picker>
          </MyView>
        </MyView>

        <MyPressable
          color="primary500"
          style={styles.button}
          onPress={() => setModalVisible(false)}
        >
          <MyAppText
            color="white"
            style={{ fontSize: 18, fontFamily: "Poppins-Bold" }}
          >
            Ok
          </MyAppText>
        </MyPressable>
      </MyView>
    </Modal>
  );
}

export default ModalPickTime;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 24,
    justifyContent: "center",
    marginHorizontal: 20,
    borderRadius: 16,
  },
  pickerContainer: {
    flexDirection: "row",
  },
  button: {
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    borderRadius: 12,
    marginTop: 8,
  },
});
