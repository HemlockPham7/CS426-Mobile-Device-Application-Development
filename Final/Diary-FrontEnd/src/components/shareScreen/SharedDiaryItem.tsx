import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

import MyPressable from "../global/MyPressable";
import MyAppText from "../global/MyAppText";
import MyView from "../global/MyView";
import {
  getDayFromTimestamp,
  getDayOfWeekFromTimestamp,
  monthNames,
} from "../../constants/date";
import Icon from "../global/Icon";
import { nameScreen } from "../../constants/globalVariables";
import { getColorIcon, getImageIcon } from "../../constants/imageList";

export function getDateFromTimestamp(timestamp: any): string {
  if (!timestamp) return "";
  const date = timestamp.toDate();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  return `${monthNames.get(month)} ${year}`;
}

function SharedDiaryItem({ diary }: any) {
  const navigation = useNavigation<any>();

  function sliceTitle(title: string) {
    if (title.length > 45) {
      return title.slice(0, 45) + "...";
    }
    return title;
  }

  function navigateSharedDiaryScreen() {
    navigation.navigate(nameScreen.diary, { id: diary.id });
  }

  return (
    <MyPressable
      isBorder
      color="primary100"
      onPress={navigateSharedDiaryScreen}
      style={styles.diaryItem}
    >
      <MyAppText style={styles.dateText}>
        {getDateFromTimestamp(diary.timestamp)}
      </MyAppText>

      <MyView style={styles.topContainer}>
        <MyAppText style={{ fontFamily: "Poppins-SemiBold" }}>
          Shared with:{" "}
        </MyAppText>
        {diary.whoShare.map((email: string) => {
          return <MyAppText key={email}>{email} </MyAppText>;
        })}
      </MyView>

      <MyView style={styles.bottomContainer}>
        <MyView style={styles.leftComponent}>
          <Icon
            style={{ marginBottom: 8 }}
            size={36}
            color={getColorIcon(diary.emoji)}
            source={getImageIcon(diary.emoji)}
          ></Icon>
          <MyView color="primary200" style={styles.dateContainer}>
            {diary.timestamp && (
              <MyAppText
                key={diary.id}
                style={{ fontSize: 12, fontFamily: "Poppins-Medium" }}
              >
                {getDayFromTimestamp(diary.timestamp)}{" "}
                {getDayOfWeekFromTimestamp(diary.timestamp)}
              </MyAppText>
            )}
          </MyView>
        </MyView>

        <MyView style={{ flex: 1, paddingRight: 4 }}>
          <MyAppText style={styles.titleText}>
            {sliceTitle(diary.title)}
          </MyAppText>

          <MyView style={{ flexDirection: "row", alignItems: "center" }}>
            {diary.hashTag.map((hashTag: any) => {
              return (
                <MyAppText key={hashTag} style={styles.hashTagText}>
                  #{hashTag}
                </MyAppText>
              );
            })}
          </MyView>
        </MyView>
      </MyView>
    </MyPressable>
  );
}

export default SharedDiaryItem;

const styles = StyleSheet.create({
  diaryItem: {
    marginTop: 12,
    paddingRight: 8,
    marginBottom: 4,
    borderRadius: 16,
    borderWidth: 1.5,
    paddingTop: 12,
    paddingBottom: 20,
  },
  topContainer: {
    marginHorizontal: 20,
    marginBottom: 12,
  },
  dateText: {
    marginHorizontal: 20,
    marginBottom: 8,
    fontSize: 14,
    fontFamily: "Poppins-SemiBold",
    opacity: 0.7,
  },
  bottomContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  leftComponent: {
    borderRightWidth: 1,

    width: "29%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
    marginRight: 12,
  },
  dateContainer: {
    flexDirection: "row",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  hashTagText: {
    fontFamily: "Poppins-Regular",
    fontSize: 11,
    marginLeft: 2,
    opacity: 0.7,
  },
  titleText: {
    fontFamily: "Poppins-SemiBold",
    flexWrap: "wrap",
    fontSize: 14,
    marginBottom: 4,
  },
});
