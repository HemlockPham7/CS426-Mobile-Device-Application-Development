import { StyleSheet } from "react-native";
import { Calendar, CalendarUtils } from "react-native-calendars";

import Icon from "../global/Icon";
import { getDateFromnumber } from "../../constants/date";
import { useAppDispatch, useAppSelector } from "../../redux store/hook";
import { ColorStorage } from "../../constants/styles";
import PickerView from "../global/PickerView";
import { useState } from "react";
import { changeDate } from "../../redux store/createDiarySlice";
import HeaderCalendar from "../calendarScreen/HeaderCalendar";

export const getMaxDate = (count: number) => {
  const date = new Date();
  const newDate = date.setDate(date.getDate() + count);
  return CalendarUtils.getCalendarDateString(newDate);
};

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const minYear = 2018;
export const years = Array.from(
  { length: currentYear - minYear + 1 },
  (_, index) => minYear + index
);

function CalendarCreateScreen() {
  const dispatch = useAppDispatch();
  const month = useAppSelector((state) => state.createDiary.month);
  const year = useAppSelector((state) => state.createDiary.year);
  const day = useAppSelector((state) => state.createDiary.day);
  const colorId = useAppSelector((state) => state.setting.idColor);
  const firstDayCalendar = useAppSelector(
    (state) => state.setting.firstDayCalendar
  );
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const colors = ColorStorage.get(colorId);

  function selectDay(_day: string) {
    const [yearString, monthString, dayString] = _day.split("-");
    const year = parseInt(yearString);
    const month = parseInt(monthString);
    const day = parseInt(dayString);

    console.log({ day: day, month: month, year: year });
    dispatch(changeDate({ day: day, month: month, year: year }));
  }

  return (
    <>
      <Calendar
        onDayPress={(day) => {
          selectDay(day.dateString);
        }}
        minDate="2018-01-01"
        maxDate={getMaxDate(0)}
        markedDates={{
          [getDateFromnumber(year, month, day)]: { selected: true },
        }}
        firstDay={firstDayCalendar}
        style={{ width: "100%", borderRadius: 50 }}
        key={getDateFromnumber(year, month, day) + ""}
        current={getDateFromnumber(year, month, day)}
        theme={{
          calendarBackground: colors?.backgroundColor,
          textSectionTitleColor: "#9c9c9c",
          textDayHeaderFontFamily: "Poppins-SemiBold",
          textDayFontFamily: "Poppins-SemiBold",
          textDisabledColor: "#b3b3b3",
          selectedDayBackgroundColor: colors?.primary500,
          todayBackgroundColor: colors?.primary200,
          selectedDayTextColor: "black",
          dayTextColor: "black",
          todayTextColor: "black",
          arrowColor: "black",
        }}
        hideExtraDays={true}
        renderHeader={(date) => {
          return (
            <HeaderCalendar date={date} onPress={() => setIsVisible(true)} />
          );
        }}
        renderArrow={(direction) => {
          return (
            <Icon
              size={28}
              source={
                direction === "left"
                  ? require("../../../assets/icons/ArrowLeft2.png")
                  : require("../../../assets/icons/ArrowRight2.png")
              }
            ></Icon>
          );
        }}
        enableSwipeMonths={true}
      />

      <PickerView
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        list={years}
        initialValue={year}
        onPress={(selectedYear: string) => {
          selectDay(selectedYear + "-" + month + "-01");
        }}
      />
    </>
  );
}

export default CalendarCreateScreen;

const styles = StyleSheet.create({
  headerStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
