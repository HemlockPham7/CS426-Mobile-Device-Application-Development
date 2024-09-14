import { StyleSheet, ScrollView, Platform } from "react-native";
import { useLayoutEffect, useState } from "react";

import HeaderRightButton from "../../components/homeScreen/HeaderRightButton";
import CreatingComponent from "../../components/homeScreen/CreateComponent";
import MyView from "../../components/global/MyView";
import CalendarComponent from "../../components/calendarScreen/CalendarComponent";
import MyAppText from "../../components/global/MyAppText";
import AnimatedIntro from "../../components/global/AnimatedIntro";
import LoadingLayout from "../../components/login+register/LoadingLayout";
import ModalLoading from "../../components/global/ModalLoading";

function HomeScreen({ navigation }: any) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "",
      headerLeft: () => {
        return <MyAppText style={styles.headerLeft}>Home</MyAppText>;
      },
      headerRight: () => {
        return <HeaderRightButton />;
      },
    });
  }, []);

  return (
    <MyView style={styles.homeScreenContainer}>
     
      <ScrollView
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
      >
        <CreatingComponent />
        <CalendarComponent />
      </ScrollView>
    </MyView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  homeScreenContainer: {
    flex: 1,
  },
  scrollView: {
    marginTop: Platform.OS === "ios" ? "5%" : "0%",
  },
  headerLeft: {
    fontSize: 30,
    fontFamily: "Poppins-Bold",
    textAlign: "center",
  },
});
