import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useLayoutEffect, useState } from "react";

import MyView from "../../components/global/MyView";
import MyAppText from "../../components/global/MyAppText";
import ContributionComponent from "../../components/analysisScreen/ContributionComponent";

function ContributionGraphScreen({ navigation, route }: any) {
  const { selectedYear } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
    });
  }, []);

  return (
    <MyView color="background" style={{ flex: 1 }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 20,
          paddingBottom: 40,
          alignItems: "center",
        }}
      >
        <MyView style={styles.innerContainer} color="white">
          <MyAppText
            style={{
              fontFamily: "Poppins-Medium",
              marginTop: 20,
              marginBottom: 20,
              fontSize: 18,
            }}
          >
            {selectedYear}
          </MyAppText>
          <MyView style={{ flexDirection: "row" }}>
            <MyView style={styles.numberDayContainer}>
              {Array.from({ length: 31 }, (_, index) => index + 1).map(
                (item) => {
                  return (
                    <MyAppText
                      style={{
                        marginBottom: 6.7,
                        fontSize: 13,
                        opacity: 0.4,
                        fontFamily: "Poppins-SemiBold",
                      }}
                      key={item}
                    >
                      {item}
                    </MyAppText>
                  );
                }
              )}
            </MyView>
            <MyView style={styles.container}>
              <ContributionComponent selectedYear={selectedYear} month={1} />
              <ContributionComponent selectedYear={selectedYear} month={2} />
              <ContributionComponent selectedYear={selectedYear} month={3} />
              <ContributionComponent selectedYear={selectedYear} month={4} />
              <ContributionComponent selectedYear={selectedYear} month={5} />
              <ContributionComponent selectedYear={selectedYear} month={6} />
              <ContributionComponent selectedYear={selectedYear} month={7} />
              <ContributionComponent selectedYear={selectedYear} month={8} />
              <ContributionComponent selectedYear={selectedYear} month={9} />
              <ContributionComponent selectedYear={selectedYear} month={10} />
              <ContributionComponent selectedYear={selectedYear} month={11} />
              <ContributionComponent selectedYear={selectedYear} month={12} />
            </MyView>
          </MyView>
        </MyView>
      </ScrollView>
    </MyView>
  );
}

export default ContributionGraphScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  innerContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    borderRadius: 16,
    paddingBottom: 20,
  },
  numberDayContainer: {
    alignItems: "center",
    marginRight: 20,
    marginTop: 30,
  },
});
