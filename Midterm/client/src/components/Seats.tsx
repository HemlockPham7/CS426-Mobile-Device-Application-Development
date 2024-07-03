import * as React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import ASeats from "./ASeats";
import { Color, FontFamily, FontSize, Padding } from "../../GlobalStyles";

const Seats = () => {
  return (
    <View style={styles.seats}>
      <View style={styles.abSeats}>
        <View style={styles.abSeats}>
          <ASeats aBText="A" />
          <ASeats aBText="B" propMarginLeft={8} />
        </View>
      </View>

      <View style={styles.numbers}>
        <Text style={styles.text}>1</Text>
        <Text style={[styles.text1, styles.textTypo]}>2</Text>
        <Text style={[styles.text1, styles.textTypo]}>3</Text>
        <Text style={styles.textTypo}>4</Text>
        <Text style={styles.textTypo}>5</Text>
        <Text style={styles.textTypo}>6</Text>
        <Text style={[styles.text1, styles.textTypo]}>7</Text>
      </View>

      <View style={styles.cdSeats}>
        <ASeats aBText="C" propMarginLeft="unset" />
        <ASeats aBText="D" propMarginLeft={8} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    marginTop: 34,
    textAlign: "center",
    color: Color.lightUIElementContrast,
    fontFamily: FontFamily.bodyMRegular,
    lineHeight: 22,
    fontSize: FontSize.bodyXLRegular_size,
  },
  abSeats: {
    flexDirection: "row",
  },
  text: {
    width: 12,
    textAlign: "center",
    color: Color.lightUIElementContrast,
    fontFamily: FontFamily.bodyMRegular,
    lineHeight: 22,
    fontSize: FontSize.bodyXLRegular_size,
  },
  text1: {
    width: 12,
  },
  numbers: {
    paddingTop: Padding.p_36xl,
    marginLeft: 43,
  },
  cdSeats: {
    marginLeft: 43,
    flexDirection: "row",
  },
  seats: {
    marginTop: 25,
    flexDirection: "row",
  },
});

export default Seats;
