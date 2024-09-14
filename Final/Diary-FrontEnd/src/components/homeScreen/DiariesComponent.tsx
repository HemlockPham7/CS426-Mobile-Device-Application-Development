import { FlatList, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import MyView from "../global/MyView";
import MyAppText from "../global/MyAppText";
import Icon from "../global/Icon";
import MyPressable from "../global/MyPressable";
import { nameScreen } from "../../constants/globalVariables";
import { useAppSelector, useAppDispatch } from "../../redux store/hook";
import { changeDate } from "../../redux store/createDiarySlice";
import { useEffect, useState } from "react";
import { GeneralDiary } from "../../ClassObject/DiaryClass";
import DiaryItem2 from "./DiaryItem2";

function DiariesComponent({ yearPressed, monthPressed }: any) {
  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();
  const diaries = useAppSelector((state) => state.diaries.diaries);
  const [filteredDiaries, setFilteredDiaries] = useState<GeneralDiary[]>([]);

  useEffect(() => {
    const _filteredDiaries = diaries.filter((diary) => {
      const date = diary.timestamp.toDate();
      return (
        date.getFullYear() === yearPressed &&
        date.getMonth() === monthPressed - 1
      );
    });
    setFilteredDiaries(_filteredDiaries);
  }, [diaries, yearPressed, monthPressed]);

  function navigateToCreateScreen() {
    const year = parseInt(yearPressed);
    const month = parseInt(
      monthPressed < 10 ? "0" + monthPressed : monthPressed
    );

    dispatch(changeDate({ day: 1, month: month, year: year }));

    navigation.reset({
      index: 0,
      routes: [{ name: nameScreen.home }],
    });
    navigation.navigate("CreateStack");
  }

  return (
    <MyView style={styles.container}>
      {filteredDiaries.length == 0 && (
        <MyView style={styles.noDiaryContainer}>
          <MyAppText style={styles.textNoDiary}>
            No diary in this month
          </MyAppText>
          <MyPressable onPress={navigateToCreateScreen}>
            <Icon
              size={36}
              source={require("../../../assets/icons/plus.png")}
            ></Icon>
          </MyPressable>
        </MyView>
      )}
      <FlatList
        data={filteredDiaries}

        renderItem={(item) => {
          return (
            <DiaryItem2
              id={item.item.id}
              timestamp={item.item.timestamp}
              title={item.item.title}
              hashTag={item.item.hashTag}
              emoji={item.item.emoji}
              bookmark={item.item.bookmark}
            />
          );
        }}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
      ></FlatList>
    </MyView>
  );
}

export default DiariesComponent;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: "45%",
    paddingHorizontal: 16,
  },

  noDiaryContainer: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  textNoDiary: {
    fontFamily: "Poppins-Medium",
    fontSize: 16,
    marginBottom: 8,
  },
});
