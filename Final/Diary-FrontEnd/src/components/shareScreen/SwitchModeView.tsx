import { StyleSheet } from "react-native";

import MyPressable from "../global/MyPressable";
import MyView from "../global/MyView";
import MyAppText from "../global/MyAppText";

function SwitchModeView({ selectedMode, setSeletedMode }: any) {
  return (
    <MyView color="white" style={styles.topContainer}>
      <MyPressable
        onPress={() => setSeletedMode(0)}
        color={selectedMode === 0 && "primary200"}
        style={styles.buttonTop}
      >
        <MyAppText
          style={[
            { textAlign: "center", fontSize: 14 },
            selectedMode === 0
              ? { fontFamily: "Poppins-Medium" }
              : { fontFamily: "Poppins-Light" },
          ]}
        >
          Friends
        </MyAppText>
      </MyPressable>

      <MyPressable
        onPress={() => setSeletedMode(1)}
        color={selectedMode === 1 && "primary200"}
        style={styles.buttonTop}
      >
        <MyAppText
          style={[
            { textAlign: "center", fontSize: 14 },
            selectedMode === 1
              ? { fontFamily: "Poppins-Medium" }
              : { fontFamily: "Poppins-Light" },
          ]}
        >
          Shared Diaries
        </MyAppText>
      </MyPressable>
    </MyView>
  );
}

export default SwitchModeView;

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 16,
    padding: 6,
    marginBottom: 12,
  },
  buttonTop: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    flex: 1,
    borderRadius: 16,
  },
});
