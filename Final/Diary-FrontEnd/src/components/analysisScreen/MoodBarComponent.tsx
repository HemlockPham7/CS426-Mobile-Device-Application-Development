import { StyleSheet } from "react-native";
import { useEffect, useState } from "react";

import MyView from "../global/MyView";
import MyAppText from "../global/MyAppText";
import Icon from "../global/Icon";
import { useAppSelector } from "../../redux store/hook";
import EmojiMoodBar from "./EmojiMoodBar";
import { getColorIcon } from "../../constants/imageList";
import { GeneralDiary } from "../../ClassObject/DiaryClass";
import MyPressable from "../global/MyPressable";

function MoodBarComponent({
  selectedMonth,
  selectedYear,
  selectedTime,
  setHaveAnalyze,
  setIsBar,
  isBar,
}: any) {
  const diaries = useAppSelector((state) => state.diaries.diaries);
  const [probabilities, setProbabilities] = useState<{
    [key: string]: number;
  }>();

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

    // const listEmoji = [6, 5, 5, 5, 1, 4, 1];
    const emojiCount = listEmoji.reduce(
      (count: { [key: number]: number }, emoji: number) => {
        count[emoji] = (count[emoji] || 0) + 1;
        return count;
      },
      {}
    );

    setProbabilities({ "1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0 });
    setHaveAnalyze(false);
    Object.entries(emojiCount).forEach(([emoji, count]) => {
      setProbabilities((prevProbabilities: any) => ({
        ...prevProbabilities,
        [parseInt(emoji)]: parseInt(
          ((count / listEmoji.length) * 100).toFixed(0)
        ),
      }));

      if (count != 0) setHaveAnalyze(true);
    });
  }, [selectedMonth, selectedYear, selectedTime, diaries, setIsBar, isBar]);

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
          Mood Bar
        </MyAppText>
        <MyPressable onPress={() => setIsBar(false)}>
          <Icon
            color="black"
            source={require("../../../assets/icons/moodPie.png")}
            size={28}
          />
        </MyPressable>
      </MyView>

      <MyView
        style={{
          marginTop: 24,
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <EmojiMoodBar id={6} probability={probabilities?.["6"]} />
        <EmojiMoodBar id={5} probability={probabilities?.["5"]} />
        <EmojiMoodBar id={4} probability={probabilities?.["4"]} />
        <EmojiMoodBar id={3} probability={probabilities?.["3"]} />
        <EmojiMoodBar id={2} probability={probabilities?.["2"]} />
        <EmojiMoodBar id={1} probability={probabilities?.["1"]} />
      </MyView>

      <MyView color="primary200" style={styles.moodBar}>
        <MyView
          color={getColorIcon(6)}
          style={{ width: `${probabilities?.["6"] || 0}%` }}
        ></MyView>
        <MyView
          color={getColorIcon(5)}
          style={{ width: `${probabilities?.["5"] || 0}%` }}
        ></MyView>
        <MyView
          color={getColorIcon(4)}
          style={{ height: "100%", width: `${probabilities?.["4"] || 0}%` }}
        ></MyView>
        <MyView
          color={getColorIcon(3)}
          style={{ height: "100%", width: `${probabilities?.["3"] || 0}%` }}
        ></MyView>
        <MyView
          color={getColorIcon(2)}
          style={{ height: "100%", width: `${probabilities?.["2"] || 0}%` }}
        ></MyView>
        <MyView
          color={getColorIcon(1)}
          style={{ height: "100%", width: `${probabilities?.["1"] || 0}%` }}
        ></MyView>
      </MyView>
    </MyView>
  );
}

export default MoodBarComponent;

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    paddingTop: 12,
    marginHorizontal: 12,
    paddingBottom: 20,
    borderRadius: 16,
    marginBottom: 8,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 20,
  },
  moodBar: {
    marginTop: 16,
    marginHorizontal: 12,
    borderRadius: 16,
    height: 30,
    flexDirection: "row",
    overflow: "hidden",
  },
});
