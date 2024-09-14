import { Dimensions, StyleSheet, View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { useEffect, useState } from "react";

import MyView from "../global/MyView";
import MyAppText from "../global/MyAppText";
import { useAppSelector } from "../../redux store/hook";
import YAxisMoodFlowComponent from "./YAxisMoodFlowComponent";

function getSpecificDatesInCurrentMonth(
  firstDay: number,
  selectedMonth: number,
  selectedYear: number
) {
  const maxDays = new Date(selectedYear, selectedMonth, 0).getDate();
  let specificDates: string[] = [];

  specificDates = [
    `${firstDay}/${selectedMonth}`,
    "",
    "",
    "",
    "",
    "",
    "",
    `${maxDays}/${selectedMonth}`,
  ];

  return specificDates;
}

function MoodFlow({ selectedMonth, selectedYear }: any) {
  const diaries = useAppSelector((state) => state.diaries.diaries);
  const [listEmoji, setListEmoji] = useState<number[]>([]);
  const [firstDay, setFirstDay] = useState<number>(32);

  useEffect(() => {
    setListEmoji([]);
    setFirstDay(32);
    let tmpDay = 32;

    diaries.map((diary) => {
      if (
        diary.timestamp.toDate().getMonth() + 1 === Number(selectedMonth) &&
        diary.timestamp.toDate().getFullYear() === Number(selectedYear)
      ) {
        if (tmpDay > diary.timestamp.toDate().getDate()) {
          tmpDay = diary.timestamp.toDate().getDate();
        }
        setListEmoji((emoji) => [...emoji, diary.emoji]);
      }
    });
    if (tmpDay === 32) tmpDay = 1;
    setFirstDay(tmpDay);
  }, [selectedMonth, selectedYear, diaries]);

  return (
    <MyView color="white" style={styles.container}>
      <MyAppText
        style={{ fontFamily: "Poppins-Medium", fontSize: 16, paddingLeft: 12 }}
      >
        Mood Flow
      </MyAppText>

      <LineChart
        data={{
          labels: getSpecificDatesInCurrentMonth(
            firstDay,
            selectedMonth,
            selectedYear
          ),
          datasets: [
            {
              data: listEmoji,
              color: () => `rgba(15, 166, 68,1)`,
            },
            {
              data: new Array(31).fill(1),
              color: () => "transparent",
              strokeWidth: 0,
              withDots: false,
            },
            {
              data: new Array(31).fill(6),
              color: () => "transparent",
              strokeWidth: 0,
              withDots: false,
            },
          ],
        }}
        withVerticalLines={false}
        withHorizontalLines={false}
        withShadow={false}
        withHorizontalLabels={false}
        width={Dimensions.get("window").width - 24}
        height={160}
        decorator={() => {
          return <YAxisMoodFlowComponent />;
        }}
        chartConfig={{
          propsForBackgroundLines: {
            strokeDasharray: ["2"],
          },
          backgroundGradientFrom: "#ffffff",
          backgroundGradientTo: "#ffffff",
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: 3,
          },
          propsForLabels: {
            fontSize: 12,
            opacity: 0.5,
            fontFamily: "Poppins-SemiBold",
          },
        }}
        style={{
          borderRadius: 16,
          overflow: "hidden",
        }}
      />
    </MyView>
  );
}

export default MoodFlow;

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    marginBottom: 8,
    marginHorizontal: 12,
    borderRadius: 16,
    paddingBottom: 10,
    paddingTop: 12,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    
    elevation: 4,
  },
});
