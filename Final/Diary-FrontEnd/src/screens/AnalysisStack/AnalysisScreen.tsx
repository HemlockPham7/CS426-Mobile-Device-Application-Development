import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useState } from "react";

import MyView from "../../components/global/MyView";
import ChooseTimeComponent from "../../components/analysisScreen/ChooseTimeComponent";
import ChooseYearAndMonth from "../../components/analysisScreen/ChooseYearAndMonth";
import MoodBarComponent from "../../components/analysisScreen/MoodBarComponent";
import AnalyzeEmotion from "../../components/analysisScreen/AnalyzeEmotion";
import MoodFlow from "../../components/analysisScreen/MoodFlow";
import MoodPieComponent from "../../components/analysisScreen/MoodPieComponent";
import ContributionGraphYear from "../../components/analysisScreen/ContributionGraphYear";

function AnalysisScreen({ navigation }: any) {
  const [selectedTime, setSelectedTime] = useState(0);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [haveAnalyze, setHaveAnalyze] = useState(false);
  const [isBar, setIsBar] = useState(true);

  return (
    <MyView color="background" style={{ flex: 1, paddingTop: "20%" }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        <ChooseTimeComponent
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
        />

        <ChooseYearAndMonth
          selectedTime={selectedTime}
          selectedMonth={selectedMonth}
          selectedYear={selectedYear}
          setSelectedMonth={setSelectedMonth}
          setSelectedYear={setSelectedYear}
        />

        {selectedTime === 0 ? (
          <MoodFlow selectedMonth={selectedMonth} selectedYear={selectedYear} />
        ) : (
          <ContributionGraphYear selectedYear={selectedYear} />
        )}

        {isBar ? (
          <MoodBarComponent
            selectedMonth={selectedMonth}
            selectedYear={selectedYear}
            selectedTime={selectedTime}
            setHaveAnalyze={setHaveAnalyze}
            setIsBar={setIsBar}
            isBar={isBar}
          />
        ) : (
          <MoodPieComponent
            selectedMonth={selectedMonth}
            selectedYear={selectedYear}
            selectedTime={selectedTime}
            setHaveAnalyze={setHaveAnalyze}
            setIsBar={setIsBar}
            haveAnalyze={haveAnalyze}
            isBar={isBar}
          />
        )}

        {/* <AnalyzeEmotion
          selectedMonth={selectedMonth}
          selectedYear={selectedYear}
          selectedTime={selectedTime}
          haveAnalyze={haveAnalyze}
        /> */}
      </ScrollView>
    </MyView>
  );
}

export default AnalysisScreen;

const styles = StyleSheet.create({});
