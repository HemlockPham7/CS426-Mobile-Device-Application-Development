import { Dimensions, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { PieChart } from "react-native-chart-kit";

import MyView from "../global/MyView";
import MyAppText from "../global/MyAppText";
import Icon from "../global/Icon";
import { useAppSelector } from "../../redux store/hook";
import { getColorIcon, getEmojiName } from "../../constants/imageList";
import { GeneralDiary } from "../../ClassObject/DiaryClass";
import MyPressable from "../global/MyPressable";

function MoodPieComponent({
  selectedMonth,
  selectedYear,
  selectedTime,
  setHaveAnalyze,
  setIsBar,
  isBar,
  haveAnalyze,
}: any) {
  const diaries = useAppSelector((state) => state.diaries.diaries);
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    let listDiariesByMonth: GeneralDiary[] = [];

    if (selectedTime === 0) {
      listDiariesByMonth = diaries.filter((diary) => {
        return (
          diary.timestamp.toDate().getMonth() + 1 === Number(selectedMonth) &&
          diary.timestamp.toDate().getFullYear() === Number(selectedYear)
        );
      });
    } else {
      listDiariesByMonth = diaries.filter((diary) => {
        return diary.timestamp.toDate().getFullYear() === Number(selectedYear);
      });
    }

    const listEmoji = listDiariesByMonth.map((diary) => {
      return diary.emoji;
    });
    const emojiCount = listEmoji.reduce(
      (count: { [key: number]: number }, emoji: number) => {
        count[emoji] = (count[emoji] || 0) + 1;
        return count;
      },
      {}
    );
    setHaveAnalyze(false);
    Object.entries(emojiCount).forEach(([emoji, count]) => {
      if (count != 0) setHaveAnalyze(true);
    });

    setData([
      {
        name: getEmojiName(6),
        emoji: emojiCount[6] || 0,
        color: getColorIcon(6),
        legendFontColor: getColorIcon(6),
        legendFontSize: 15,
        legendFontFamily: "Poppins-Medium",
      },
      {
        name: getEmojiName(5),
        emoji: emojiCount[5] || 0,
        color: getColorIcon(5),
        legendFontColor: getColorIcon(5),
        legendFontSize: 15,
        legendFontFamily: "Poppins-Medium",
      },
      {
        name: getEmojiName(4),
        emoji: emojiCount[4] || 0,
        color: getColorIcon(4),
        legendFontColor: getColorIcon(4),
        legendFontSize: 15,
        legendFontFamily: "Poppins-Medium",
      },
      {
        name: getEmojiName(3),
        emoji: emojiCount[3] || 0,
        color: getColorIcon(3),
        legendFontColor: getColorIcon(3),
        legendFontSize: 15,
        legendFontFamily: "Poppins-Medium",
      },
      {
        name: getEmojiName(2),
        emoji: emojiCount[2] || 0,
        color: getColorIcon(2),
        legendFontColor: getColorIcon(2),
        legendFontSize: 15,
        legendFontFamily: "Poppins-Medium",
      },
      {
        name: getEmojiName(1),
        emoji: emojiCount[1] || 0,
        color: getColorIcon(1),
        legendFontColor: getColorIcon(1),
        legendFontSize: 15,
        legendFontFamily: "Poppins-Medium",
      },
    ]);
  }, [selectedMonth, selectedYear, selectedTime, diaries, isBar, haveAnalyze]);

  return (
    <MyView color="white" style={styles.container}>
      <MyView style={styles.topContainer}>
        <MyAppText
          style={{
            fontFamily: "Poppins-Medium",
            fontSize: 16,
            paddingLeft: 12,
          }}
        >
          Mood Pie
        </MyAppText>
        <MyPressable onPress={() => setIsBar(true)}>
          <Icon
            color="black"
            source={require("../../../assets/icons/moodBar.png")}
            size={28}
          />
        </MyPressable>
      </MyView>

      <MyView>
        <PieChart
          data={data}
          width={Dimensions.get("window").width}
          height={220}
          chartConfig={{
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
          accessor={"emoji"}
          backgroundColor={"transparent"}
          paddingLeft="0"
          center={haveAnalyze ? [0, 0] : [10, 500]}
        />

        {haveAnalyze == false && (
          <MyAppText style={styles.text}>
            Please record your diary. Check back soon! 👋
          </MyAppText>
        )}
      </MyView>
    </MyView>
  );
}

export default MoodPieComponent;

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    paddingTop: 12,
    marginHorizontal: 12,
    borderRadius: 16,
   
    //Shadow for Android
    elevation: 8,
    //Shadow for IOS
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 4,
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 20,
  },
  text: {
    textAlign: "center",
    fontFamily: "Poppins-Light",
    fontSize: 15,
    width: 200,
    position: "absolute",
    top: 80,
    left: 10,
  },
});
