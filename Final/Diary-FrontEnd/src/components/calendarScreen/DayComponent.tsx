import { StyleSheet } from "react-native";
import React from "react";
import { useState } from "react";

import MyAppText from "../global/MyAppText";
import MyPressable from "../global/MyPressable";
import Icon from "../global/Icon";
import MyView from "../global/MyView";
import { getDateFromTimestampV2 } from "../../constants/date";
import { useAppSelector } from "../../redux store/hook";
import { getTodayDate } from "../../constants/date";
import ModalCalendarConfirm from "./ModalCalendarConfirm";
import ModalCalendarDiary from "./ModalCalendarDiary";
import { getColorIcon, getImageIcon } from "../../constants/imageList";

function DayComponent({ date, confirmDate }: any) {
  const diaries = useAppSelector((state) => state.diaries.diaries);
  const [isVisibleRegularModal, setIsVisibleRegularModal] = useState(false);
  const [isVisibleDiaryModal, setIsVisibleDiaryModal] = useState(false);

  const isDiary = diaries.find(
    (diary) => getDateFromTimestampV2(diary.timestamp) == date.dateString
  );
  const isToday = getTodayDate() == date.dateString;

  return (
    <>
      <MyPressable
        style={styles.buttonDayComponent}
        onPress={() => {
          if (getTodayDate() >= date.dateString) {
            if (isDiary) {
              setIsVisibleDiaryModal(true);
            } else {
              setIsVisibleRegularModal(true);
            }
          }
        }}
      >
        <MyView
          isBorder={getTodayDate() == date.dateString && true}
          color={
            isDiary
              ? "white"
              : getTodayDate() < date.dateString
              ? "#d1c5c5"
              : "#e3e3e3"
          }
          style={[
            styles.buttonInnerDayComponent,
            isToday && styles.todayDayComponent,
          ]}
        >
          {isDiary && (
            <Icon
              size={40}
              source={getImageIcon(isDiary.emoji)}
              color={getColorIcon(isDiary.emoji)}
            ></Icon>
          )}
        </MyView>
        <MyView
          color={isDiary && getColorIcon(isDiary.emoji)}
          style={[{ marginTop: 4 }, isDiary && styles.isDiaryTextStyle]}
        >
          <MyAppText
            color={isDiary ? "white" : "#8c8c8c"}
            style={styles.textDayStyle}
          >
            {date.day}
          </MyAppText>
        </MyView>
      </MyPressable>

      <ModalCalendarConfirm
        isVisible={isVisibleRegularModal}
        setModalVisible={setIsVisibleRegularModal}
        date={date.dateString}
        onPress={confirmDate}
      />

      <ModalCalendarDiary
        isVisible={isVisibleDiaryModal}
        setModalVisible={setIsVisibleDiaryModal}
        date={date.dateString}
        onPress={confirmDate}
        year={date.year}
        month={date.month}
        day={date.day}
      />
    </>
  );
}

export default DayComponent;

const styles = StyleSheet.create({
  buttonDayComponent: {
    alignItems: "center",
  },
  buttonInnerDayComponent: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    width: 40,
    height: 40,
  },
  todayDayComponent: {
    borderWidth: 2,
  },
  textDayStyle: {
    fontFamily: "Poppins-Medium",
    textAlign: "center",
    fontSize:12
  },
  isDiaryTextStyle: {
    width: 35,
    borderRadius: 12,
  },
});
