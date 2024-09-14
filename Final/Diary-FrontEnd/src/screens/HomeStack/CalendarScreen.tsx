import { StyleSheet, Platform, ScrollView } from "react-native";
import * as React from "react";
import { useState } from "react"

import MyView from "../../components/global/MyView";
import YearsList from "../../components/homeScreen/YearsList";
import MonthsList from "../../components/homeScreen/MonthsList";
import DiariesComponent from "../../components/homeScreen/DiariesComponent";

function CalendarScreen() {
  const year = [2024, 2023, 2022, 2021, 2020];
  const month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const [monthPressed, setMonthPressed] = useState(month[0]);
  const [yearPressed, setYearPressed] = useState(year[0]);

  return (
    <MyView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
      >
        <YearsList
          year={year}
          yearPressed={yearPressed}
          onPress={setYearPressed}
          numberMemories={200}
        />
        <MonthsList
          month={month}
          monthPressed={monthPressed}
          onPress={setMonthPressed}
        />
         <DiariesComponent yearPressed={yearPressed} monthPressed={monthPressed} />
      </ScrollView>

     
    </MyView>
  );
}

export default CalendarScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    marginTop: Platform.OS === "ios" ? "42%" : "0%",
    marginBottom: "10%",
  },
});
