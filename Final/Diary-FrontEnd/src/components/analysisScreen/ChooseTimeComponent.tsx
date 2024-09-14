import { StyleSheet } from "react-native";

import MyPressable from "../global/MyPressable";
import MyView from "../global/MyView";
import MyAppText from "../global/MyAppText";

function ChooseTimeComponent({ selectedTime, setSelectedTime }: any) {
  return (
    <MyView color="white" style={styles.topContainer}>
      <MyPressable
        onPress={() => setSelectedTime(0)}
        color={selectedTime === 0 && "primary200"}
        style={styles.buttonTop}
      >
        <MyAppText
          style={
            selectedTime === 0
              ? styles.textPressed
              : { fontFamily: "Poppins-Light" }
          }
        >
          Monthly
        </MyAppText>
      </MyPressable>

      <MyPressable
        onPress={() => setSelectedTime(1)}
        color={selectedTime === 1 && "primary200"}
        style={styles.buttonTop}
      >
        <MyAppText
          style={
            selectedTime === 1
              ? styles.textPressed
              : { fontFamily: "Poppins-Light" }
          }
        >
          Annual
        </MyAppText>
      </MyPressable>
    </MyView>
  );
}

export default ChooseTimeComponent;

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    borderRadius: 16,
    padding: 6,
    marginBottom:24,
  },
  buttonTop: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    flex: 1,
    borderRadius: 16,
  },
  textPressed: {
    fontFamily: "Poppins-SemiBold",
  },
});
