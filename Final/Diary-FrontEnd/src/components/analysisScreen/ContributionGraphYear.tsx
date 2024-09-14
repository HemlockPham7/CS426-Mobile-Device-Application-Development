import { StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import MyView from "../global/MyView";
import MyAppText from "../global/MyAppText";
import MyPressable from "../global/MyPressable";
import { nameScreen } from "../../constants/globalVariables";

function ContributionGraphYear({ selectedYear }: any) {
  const navigation = useNavigation<any>();

  function navigateContributionScreen() {
    navigation.navigate(nameScreen.contributionGraph, {
      selectedYear: selectedYear,
    });
  }

  return (
    <MyView color="white" style={styles.container}>
      <MyView style={{ flexDirection: "row" }}>
        <MyAppText
          style={{
            fontFamily: "Poppins-Medium",
            fontSize: 15,
            paddingLeft: 12,
          }}
        >
          Look back on your{" "}
        </MyAppText>
        <MyAppText
          color="primary500"
          style={{
            fontFamily: "Poppins-SemiBold",
            fontSize: 15,
          }}
        >
          {selectedYear}
        </MyAppText>
      </MyView>

      <MyView style={styles.imageContainer}>
        <Image
          source={require("../../../assets/contributionMap.png")}
          style={{ width: "95%", height: "95%" }}
        />
      </MyView>

      <MyPressable
        onPress={navigateContributionScreen}
        color="primary500"
        style={styles.buttonContainer}
        isStylePress
      >
        <MyAppText
          color="white"
          style={{
            fontFamily: "Poppins-Medium",
          }}
        >
          Go
        </MyAppText>
      </MyPressable>
    </MyView>
  );
}

export default ContributionGraphYear;

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    marginBottom: 8,
    marginHorizontal: 12,
    paddingBottom: 20,
    paddingTop: 12,
    borderRadius: 16,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  imageContainer: {
    alignItems: "center",
    width: "100%",
    height: 160,
    marginBottom: 4,
    marginTop: 4,
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    borderRadius: 12,
    marginHorizontal: 16,
  },
});
