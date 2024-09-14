import { StyleSheet } from "react-native";
import { useState } from "react";

import MyView from "../global/MyView";
import MyAppText from "../global/MyAppText";
import { monthNames } from "../../constants/date";
import Icon from "../global/Icon";
import {
  getColorIcon,
  getEmojiName,
  getImageIcon,
} from "../../constants/imageList";

function AnalyzeEmotion({ selectedMonth, selectedYear, selectedTime, haveAnalyze }: any) {
  return (
    <MyView color="white" style={styles.container}>
      <MyAppText
        style={{ fontFamily: "Poppins-Medium", fontSize: 16, marginBottom: 4 }}
      >
        Analyze
      </MyAppText>

      <MyView style={{ flexDirection: "row" }}>
        <MyAppText
          style={{
            fontFamily: "Poppins-Light",
            fontSize: 14,
            marginBottom: 20,
          }}
        >
          Your mood/status in{" "}
        </MyAppText>
        <MyAppText
          style={{
            fontFamily: "Poppins-SemiBold",
            fontSize: 14,
            marginBottom: 20,
          }}
        >
          {selectedTime == 0
            ? `${monthNames.get(Number(selectedMonth))} ${selectedYear}:`
            : `${selectedYear}`}
        </MyAppText>
      </MyView>

      {haveAnalyze ? (
        <MyView style={styles.emojiContainer}>
          <Icon size={52} color={getColorIcon(1)} source={getImageIcon(1)} />
          <MyAppText
            style={{
              fontFamily: "Poppins-SemiBold",
              fontSize: 22,
              paddingLeft: 16,
            }}
          >
            {getEmojiName(1)}
          </MyAppText>
        </MyView>
      ) : (
        <MyAppText
          style={{
            textAlign: "center",
            fontFamily: "Poppins-Light",
            fontSize: 15,
          }}
        >
          We need more data to analyze. Check back soon! 👋
        </MyAppText>
      )}
    </MyView>
  );
}

export default AnalyzeEmotion;

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    marginHorizontal: 16,
    borderRadius: 16,
    paddingTop: 12,
    paddingHorizontal: 12,
    paddingBottom: 24,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    
    elevation: 4,
  },
  emojiContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
