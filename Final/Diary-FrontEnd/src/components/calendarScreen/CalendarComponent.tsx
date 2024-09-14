import { StyleSheet } from "react-native";
import * as React from "react";
import { useState } from "react";
import { Calendar } from "react-native-calendars";
import { useNavigation } from "@react-navigation/native";

import {
  getMaxDate,
  years,
} from "../../components/calendars/CalendarCreateScreen";
import { useAppSelector, useAppDispatch } from "../../redux store/hook";
import { ColorStorage } from "../../constants/styles";
import { changeDate } from "../../redux store/createDiarySlice";
import { getTodayDate } from "../../constants/date";
import { nameScreen } from "../../constants/globalVariables";
import PickerView from "../../components/global/PickerView";
import HeaderCalendar from "./HeaderCalendar";
import DayComponent from "./DayComponent";

function CalendarComponent() {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<any>();

  const month = useAppSelector((state) => state.createDiary.month);
  const year = useAppSelector((state) => state.createDiary.year);
  const colorId = useAppSelector((state) => state.setting.idColor);
  const firstDayCalendar = useAppSelector(
    (state) => state.setting.firstDayCalendar
  );

  const [isPicker, setIsPicker] = useState(false);
  const [selectedDay, setSelectedDay] = useState(getTodayDate());
  const colors = ColorStorage.get(colorId);

  function confirmDate(selectedDay: string) {
    const [yearString, monthString, dayString] = selectedDay.split("-");
    const year = parseInt(yearString);
    const month = parseInt(monthString);
    const day = parseInt(dayString);

    console.log({ day: day, month: month, year: year });
    dispatch(changeDate({ day: day, month: month, year: year }));

    navigation.reset({
      index: 0,
      routes: [{ name: nameScreen.home }],
    });
    navigation.navigate("CreateStack");
  }

  return (
    <>
      <Calendar
        minDate="2018-01-01"
        maxDate={getMaxDate(0)}
        firstDay={firstDayCalendar}
        style={{
          width: "95%",
          backgroundColor: colors?.backgroundColor,
          marginLeft: "2.5%",
        }}
        key={selectedDay + ""}
        current={selectedDay}
        theme={{
          textSectionTitleColor: "#b5b5b5",
          
          calendarBackground: colors?.backgroundColor,
          arrowColor: "black",
        }}
        hideExtraDays={true}
        renderHeader={(date) => {
          return (
            <HeaderCalendar date={date} onPress={() => setIsPicker(true)} />
          );
        }}
        dayComponent={({ date }: any) => (
          <DayComponent date={date} confirmDate={confirmDate} />
        )}
      />

      <PickerView
        isVisible={isPicker}
        setIsVisible={setIsPicker}
        list={years}
        initialValue={year}
        onPress={(selectedYear: string) => {
          setSelectedDay(selectedYear + "-" + month + "-01");
        }}
      />
    </>
  );
}

export default CalendarComponent;

const styles = StyleSheet.create({
  buttonDayComponent: {
    alignItems: "center",
  },
  buttonInnerDayComponent: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    width: 42,
    height: 42,
  },
  todayDayComponent: {
    borderWidth: 2,
  },
  textDayStyle: {
    marginTop: 4,
    fontFamily: "Poppins-Medium",
  },
});
