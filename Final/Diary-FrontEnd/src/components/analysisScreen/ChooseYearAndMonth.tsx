import { StyleSheet } from "react-native";
import { useState } from "react";

import MyPressable from "../global/MyPressable";
import MyAppText from "../global/MyAppText";
import Icon from "../global/Icon";
import { monthNamesV4 } from "../../constants/date";
import PickerView from "../global/PickerView";
import { years } from "../calendars/CalendarCreateScreen";

const arrayMonth = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function ChooseYearAndMonth({
  selectedTime,
  selectedMonth,
  selectedYear,
  setSelectedMonth,
  setSelectedYear,
}: any) {
  const [isVisiblePicker, setIsVisiblePicker] = useState(false);

  return (
    <>
      {selectedTime === 0 && (
        <MyPressable
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => setIsVisiblePicker(true)}
        >
          <MyAppText style={{ fontFamily: "Poppins-Medium", fontSize: 18 }}>
            {monthNamesV4.get(selectedMonth.toString())} {selectedYear}
          </MyAppText>
          <Icon
            color="black"
            size={24}
            source={require("../../../assets/icons/Arrow_Down.png")}
          ></Icon>

          <PickerView
            isVisible={isVisiblePicker}
            setIsVisible={setIsVisiblePicker}
            list={arrayMonth}
            intiialValue={selectedMonth}
            onPress={(item: any) => {
              setSelectedMonth(item);
            }}
          />
        </MyPressable>
      )}

      {selectedTime === 1 && (
        <MyPressable
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => setIsVisiblePicker(true)}
        >
          <MyAppText style={{ fontFamily: "Poppins-Medium", fontSize: 18 }}>
            {selectedYear}
          </MyAppText>
          <Icon
            color="black"
            size={24}
            source={require("../../../assets/icons/Arrow_Down.png")}
          ></Icon>

          <PickerView
            isVisible={isVisiblePicker}
            setIsVisible={setIsVisiblePicker}
            list={years}
            intiialValue={selectedYear}
            onPress={(item: any) => {
              setSelectedYear(item);
            }}
          />
        </MyPressable>
      )}
    </>
  );
}

export default ChooseYearAndMonth;

const styles = StyleSheet.create({
  
});
