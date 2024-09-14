import { StyleSheet } from "react-native";
import Modal from "react-native-modal";
import { useState } from "react";

import MyView from "../global/MyView";
import MyPressable from "../global/MyPressable";
import MyAppText from "../global/MyAppText";
import { getDayOfWeek, getDateFromnumberV2 } from "../../constants/date";
import Icon from "../global/Icon";
import CalendarCreateScreen from "../calendars/CalendarCreateScreen";
import { useAppSelector } from "../../redux store/hook";
import HashtagButton from "../editScreen/HashtagButton";

function DateComponent() {
  const month = useAppSelector((state) => state.createDiary.month);
  const year = useAppSelector((state) => state.createDiary.year);
  const day = useAppSelector((state) => state.createDiary.day);
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <MyView
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 12,
        }}
      >
        <MyPressable onPress={() => setIsVisible(true)}>
          <MyAppText style={styles.nameDayStyle}>{getDayOfWeek()}</MyAppText>
          <MyView style={{ flexDirection: "row", alignItems: "center" }}>
            <MyAppText style={styles.dateStyle}>
              {getDateFromnumberV2(year, month, day)}
            </MyAppText>
            <Icon
              size={20}
              color="black"
              source={require("../../../assets/icons/Arrow_Down.png")}
              style={{ marginLeft: 4 }}
            ></Icon>
          </MyView>
        </MyPressable>
      </MyView>

      <Modal
        isVisible={isVisible}
        animationInTiming={400}
        animationOutTiming={400}
        onBackdropPress={() => setIsVisible(false)}
        style={{ justifyContent: "flex-end", margin: 0 }}
      >
        <MyView isBorder color="background" style={styles.modalContainer}>
          <CalendarCreateScreen />

          <MyView style={styles.bottomContainer}>
            <MyPressable
              onPress={() => setIsVisible(false)}
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
    </>
  );
}

export default DateComponent;

const styles = StyleSheet.create({
  dateStyle: {
    fontSize: 20,
    fontFamily: "Poppins-SemiBold",
  },
  nameDayStyle: {
    fontSize: 14,
    fontFamily: "Poppins-Light",
  },
  modalContainer: {
    borderWidth: 2,
    justifyContent: "space-between",
    borderRadius: 12,
    height: "55%",
    paddingBottom: 40,
    paddingHorizontal: 12,
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  buttonOK: {
    borderRadius: 12,
    paddingHorizontal: 32,
    paddingVertical: 8,
    borderColor: "black",
  },
});
