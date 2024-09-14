import { StyleSheet } from "react-native";
import { useState } from "react";
import Modal from "react-native-modal";

import MyView from "../global/MyView";
import MyPressable from "../global/MyPressable";
import MyAppText from "../global/MyAppText";
import Icon from "../global/Icon";

import { useAppSelector, useAppDispatch } from "../../redux store/hook";
import { changeFirstDayCalendar } from "../../redux store/settingSlice";

function StartOfTheWeek() {
  const dispatch = useAppDispatch();
  const firstDayCalendar = useAppSelector(
    (state) => state.setting.firstDayCalendar
  );
  const [isVisiable, setIsVisiable] = useState(false);

  function chooseStartDay(id: number) {
    dispatch(changeFirstDayCalendar({ id: id }));
    setIsVisiable(false);
  }

  return (
    <>
      <MyPressable onPress={() => setIsVisiable(true)} style={styles.container}>
        <Icon
          size={28}
          color="none"
          source={require("../../../assets/icons/calendar1.png")}
        ></Icon>
        <MyAppText style={styles.text}>Start of the week</MyAppText>
        <MyPressable onPress={() => setIsVisiable(true)}>
          <MyAppText style={styles.dayText} color="primary500">
            {firstDayCalendar == 1 ? "MON" : "SUN"}
          </MyAppText>
        </MyPressable>
      </MyPressable>

      <Modal
        isVisible={isVisiable}
        onBackdropPress={() => setIsVisiable(false)}
        animationIn={"pulse"}
        animationInTiming={400}
        animationOutTiming={400}
      >
        <MyView color="background" isBorder style={styles.modalView}>
          <MyPressable
            color="white"
            style={[styles.chooseDayButton, { marginRight: 8 }]}
            onPress={() => chooseStartDay(1)}
          >
            <MyAppText color="primary500" style={styles.itemText}>
              MON
            </MyAppText>
          </MyPressable>
          <MyPressable
            color="white"
            style={[styles.chooseDayButton, { marginLeft: 8 }]}
            onPress={() => chooseStartDay(0)}
          >
            <MyAppText color="primary500" style={styles.itemText}>
              SUN
            </MyAppText>
          </MyPressable>
        </MyView>
      </Modal>
    </>
  );
}

export default StartOfTheWeek;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    marginRight: 4,
  },
  text: {
    flex: 1,
    paddingLeft: 12,
    fontSize: 14,
  },
  dayText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 14,
  },

  //Modal
  modalView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: 12,
    borderWidth: 2,
    padding: 16,
    height: 120,
    marginHorizontal: 20,
  },
  chooseDayButton: {
    height: "100%",
    flex: 1,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  itemText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 15,
  },
});
