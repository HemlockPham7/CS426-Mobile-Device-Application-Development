import { FlatList, StyleSheet } from "react-native";

import MyView from "../global/MyView";
import MyAppText from "../global/MyAppText";
import Icon from "../global/Icon";
import { getColorIcon, getImageIcon } from "../../constants/imageList";
import MyPressable from "../global/MyPressable";
import { useAppSelector } from "../../redux store/hook";

function DiaryComponentModal({ year, month, day, onPress }: any) {
  const diaries = useAppSelector((state) => state.diaries.diaries);
  let filteredDiaries = diaries.filter((diary) => {
    const date = diary.timestamp.toDate();
    return (
      date.getFullYear() === year &&
      date.getMonth() === month - 1 &&
      date.getDate() === day
    );
  });

  function sliceTitle(title: string) {
    if (title.length > 45) {
      return title.slice(0, 45) + "...";
    }
    return title;
  }

  return (
    <MyView style={styles.container}>
      <FlatList
        data={filteredDiaries}
        renderItem={(item) => {
          return (
            <MyPressable
              isBorder
              onPress={() => onPress(item.item.id)}
              style={styles.diaryItem}
            >
              <MyView style={styles.leftComponent}>
                <Icon
                  style={{ marginBottom: 8 }}
                  size={34}
                  color={getColorIcon(item.item.emoji)}
                  source={getImageIcon(item.item.emoji)}
                ></Icon>
              </MyView>

              <MyView style={{ flex: 1, paddingRight: 4 }}>
                <MyAppText style={styles.titleText}>
                  {sliceTitle(item.item.title)}
                </MyAppText>

                <MyView style={{ flexDirection: "row", alignItems: "center" }}>
                  {item.item.hashTag.map((hashTag: any) => {
                    return (
                      <MyAppText key={hashTag} style={styles.hashTagText}>
                        #{hashTag}
                      </MyAppText>
                    );
                  })}
                </MyView>
              </MyView>
              <Icon
                color={!item.item.bookmark ? "none" : "primary500"}
                size={24}
                source={
                  item.item.bookmark
                    ? require("../../../assets/icons/bookmark.png")
                    : require("../../../assets/icons/bookmark-outline.png")
                }
              />
            </MyPressable>
          );
        }}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
      ></FlatList>
    </MyView>
  );
}

export default DiaryComponentModal;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 12,
    marginVertical: 20,
  },
  diaryItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderRadius: 12,
    marginBottom: 12,
    paddingRight:8,
    borderWidth: 2,
  },
  leftComponent: {
    borderRightWidth: 1,
    height: "70%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
    marginRight: 12,
  },
  hashTagText: {
    fontFamily: "Poppins-Regular",
    fontSize: 11,
    marginLeft: 4,
    opacity: 0.5,
  },
  titleText: {
    fontFamily: "Poppins-SemiBold",
    flexWrap: "wrap",
    fontSize: 14,
  },
});
