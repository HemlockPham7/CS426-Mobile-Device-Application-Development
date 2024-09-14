import { StyleSheet, ScrollView } from "react-native";
import { useLayoutEffect, useState } from "react";

import MyView from "../../components/global/MyView";
import MyPressable from "../../components/global/MyPressable";
import MyAppText from "../../components/global/MyAppText";
import ListBookmark from "../../components/functionsScreen/ListBookmark";
import ScanComponent from "../../components/scanScreen.tsx/ScanComponent";
import AnimatedIntro from "../../components/global/AnimatedIntro";

function ListFunctionsScreen({ navigation }: any) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <MyView color="background" style={{ flex: 1 }}>
      <AnimatedIntro />
      <MyView style={styles.modalContainer}>
        <ScanComponent />
        <MyView
          style={{ flexDirection: "row", justifyContent: "space-around" }}
        >
          <ListBookmark />
        </MyView>
      </MyView>
    </MyView>
  );
}

export default ListFunctionsScreen;

const styles = StyleSheet.create({
  modalContainer: {
    paddingHorizontal: 16,
    height: "40%",
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,

    overflow: "hidden",
  },
});
