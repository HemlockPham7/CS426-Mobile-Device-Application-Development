import { StyleSheet } from "react-native";
import Modal from "react-native-modal";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import MyView from "../global/MyView";
import MyAppText from "../global/MyAppText";
import MyPressable from "../global/MyPressable";
import { monthNames } from "../../constants/date";
import DiaryComponentModal from "./DiaryComponentModal";
import { nameScreen } from "../../constants/globalVariables";
import { years } from "../calendars/CalendarCreateScreen";

export function customDate(selectedDay: string) {
  const [yearString, monthString, dayString] = selectedDay.split("-");
  const year = parseInt(yearString);
  const month = parseInt(monthString);
  const day = parseInt(dayString);
  const formattedDay = day < 10 ? `0${day}` : day;
  return `${formattedDay} ${monthNames.get(month)} ${year}`;
}

function ModalCalendarDiary({
  isVisible,
  setModalVisible,
  date,
  onPress,
  year,
  month,
  day,
}: any) {
  const navigation = useNavigation<any>();

  function navigateScreen(id: string) {
    setModalVisible(false);
    navigation.navigate(nameScreen.diary, { id: id });
  }

  return (
    <Modal
      isVisible={isVisible}
      animationInTiming={300}
      animationOutTiming={1}
      animationIn={"pulse"}
      avoidKeyboard={true}
      backdropOpacity={0.4}
      onBackdropPress={() => setModalVisible(false)}
    >
      <MyView isBorder color="background" style={styles.modalStyle}>
        <MyAppText
          style={{
            fontSize: 15,
            textAlign: "center",
            fontFamily: "Poppins-SemiBold",
          }}
        >
          {customDate(date)}
        </MyAppText>

        <MyView style={{ width: "100%" }}>
          <DiaryComponentModal
            year={year}
            month={month}
            day={day}
            onPress={navigateScreen}
          />
        </MyView>

        <MyPressable
          isStylePress
          onPress={() => onPress(date)}
          color="primary500"
          style={styles.buttonModal}
        >
          <MyAppText
            color="white"
            style={{
              fontFamily: "Poppins-SemiBold",
              fontSize: 13,
            }}
          >
            Record a new diary
          </MyAppText>
        </MyPressable>
      </MyView>
    </Modal>
  );
}
export default ModalCalendarDiary;

const styles = StyleSheet.create({
  modalStyle: {
    borderRadius: 12,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "space-evenly",
    marginHorizontal: 8,
    paddingVertical: 16,
  },
  buttonModal: {
    alignItems: "center",
    borderRadius: 12,
    // borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },

  loadingStyle: {
    height: 100,
    borderRadius: 12,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 32,
  },
  loadingTextStyle: {
    fontSize: 16,
    fontFamily: "Poppins-SemiBold",
    marginBottom: 12,
  },
});
