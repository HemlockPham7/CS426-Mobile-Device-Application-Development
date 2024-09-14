import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import MyPressable from "../global/MyPressable";
import MyAppText from "../global/MyAppText";
import MyView from "../global/MyView";
import {
  getDayFromTimestamp,
  getDayOfWeekFromTimestamp,
} from "../../constants/date";
import Icon from "../global/Icon";
import { nameScreen } from "../../constants/globalVariables";
import { getColorIcon, getImageIcon } from "../../constants/imageList";

function BookmarkItem({
  id,
  timestamp,
  title,
  hashTag,
  emoji,
  bookmark,
  setModalVisible,
}: any) {
  const navigation = useNavigation<any>();

  function sliceTitle(title: string) {
    if (title.length > 45) {
      return title.slice(0, 45) + "...";
    }
    return title;
  }

  function navigateDiaryScreen(id: string) {
    navigation.navigate(nameScreen.diary, { id: id });
    setModalVisible(false);
  }

  return (
    <MyPressable
      isBorder
      color="primary100"
      onPress={() => navigateDiaryScreen(id)}
      style={styles.diaryItem}
    >
      <MyView style={styles.leftComponent}>
        <Icon
          style={{ marginBottom: 8 }}
          size={36}
          color={getColorIcon(emoji)}
          source={getImageIcon(emoji)}
        ></Icon>
        <MyView color="primary200" style={styles.dateContainer}>
          <MyAppText style={{ fontSize: 13, fontFamily: "Poppins-Medium" }}>
            {getDayFromTimestamp(timestamp)}{" "}
            {getDayOfWeekFromTimestamp(timestamp)}
          </MyAppText>
        </MyView>
      </MyView>

      <MyView style={{ flex: 1, paddingRight: 4 }}>
        <MyAppText style={styles.titleText}>{sliceTitle(title)}</MyAppText>

        <MyView style={{ flexDirection: "row", alignItems: "center" }}>
          {hashTag.map((hashTag: any) => {
            return (
              <MyAppText key={hashTag} style={styles.hashTagText}>
                #{hashTag}
              </MyAppText>
            );
          })}
        </MyView>
      </MyView>
      <Icon
        color={!bookmark ? "none" : "primary500"}
        size={24}
        source={
          bookmark
            ? require("../../../assets/icons/bookmark.png")
            : require("../../../assets/icons/bookmark-outline.png")
        }
      />
    </MyPressable>
  );
}

export default BookmarkItem;

const styles = StyleSheet.create({
  diaryItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 12,
    height: 105,
    paddingRight: 8,
    marginBottom: 8,
    borderRadius: 16,
    borderWidth: 1.5,
  },
  leftComponent: {
    borderRightWidth: 1,
    height: "70%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
    marginRight: 12,
  },
  dateContainer: {
    flexDirection: "row",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 2,
  },
  hashTagText: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
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
