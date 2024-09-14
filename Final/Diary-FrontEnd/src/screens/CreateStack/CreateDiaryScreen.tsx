import React, { useEffect } from "react";
import { Alert, Keyboard } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { StyleSheet } from "react-native";
import { useLayoutEffect } from "react";
import * as Location from "expo-location";

import MyPressable from "../../components/global/MyPressable";
import HeaderRightButtonCreateScreen from "../../components/createScreen/headerRightButton/HeaderRightButtonCreateScreen";
import TopComponent from "../../components/createScreen/TopComponent";
import DiaryRecordComponent from "../../components/createScreen/DiaryRecordComponent";
import RecordingAndLocation from "../../components/createScreen/RecordingAndLocation";
import HeaderLeftButton from "../../components/createScreen/headerLeftButton/HeaderLeftButton";

function CreateDiaryScreen({ navigation }: any) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerLeft: () => <HeaderLeftButton />,
      headerRight: () => <HeaderRightButtonCreateScreen />,
    });
  }, []);

  return (
    <MyPressable
      onPress={() => Keyboard.dismiss()}
      color="background"
      style={styles.createScreenContainer}
    >
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <TopComponent />
        <RecordingAndLocation />
        <DiaryRecordComponent />
      </KeyboardAwareScrollView>
    </MyPressable>
  );
}

export default CreateDiaryScreen;

const styles = StyleSheet.create({
  createScreenContainer: { flex: 1, paddingHorizontal: 16 },
});
