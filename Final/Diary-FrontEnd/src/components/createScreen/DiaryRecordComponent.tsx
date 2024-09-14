import React, { useRef, useState } from "react";
import { StyleSheet, Platform, TouchableOpacity } from "react-native";

import MyTextInput from "../global/MyTextInput";
import { useAppSelector, useAppDispatch } from "../../redux store/hook";
import { changeDiary, changeTitle } from "../../redux store/createDiarySlice";
import DisplayImageComponent from "./DisplayImageComponent";
import MyView from "../global/MyView";

function DiaryRecordComponent() {
  const { diary, title } = useAppSelector((state) => state.createDiary);
  const dispatch = useAppDispatch();
  const [pointerEvents, setPointerEvents] = useState<"auto" | "none">("none");
  const inputRef = useRef(null) as any;

  return (
    <MyView>
      <MyTextInput
        onChangeText={(text: string) => dispatch(changeTitle(text))}
        value={title}
        style={styles.titleInput}
        color="background"
        placeholder="Untitled"
        placeholderTextColor="gray"
        multiline
      ></MyTextInput>

      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          setPointerEvents("auto");
          inputRef.current.focus();
        }}
      >
        <MyTextInput
          onChangeText={(text: string) => dispatch(changeDiary(text))}
          value={diary}
          color="background"
          style={styles.diaryInput}
          placeholder="Tap here to continue..."
          placeholderTextColor="gray"
          multiline
          pointerEvents={pointerEvents}
          onBlur={() => setPointerEvents("none")}
          ref={inputRef}
        ></MyTextInput>

        <DisplayImageComponent />
      </TouchableOpacity>
    </MyView>
  );
}

export default DiaryRecordComponent;

const styles = StyleSheet.create({
  titleInput: {
    marginTop: Platform.OS === "ios" ? 8 : 22,
    color: "black",
    fontSize: 22,
    fontFamily: "Poppins-Bold",
    letterSpacing: 0.5,
  },
  diaryInput: {
    marginTop: Platform.OS === "ios" ? 4 : -4,
    paddingBottom: 24,
    paddingVertical: 20,
    color: "black",
    letterSpacing: 1,
    fontSize:14,
    fontFamily: "Poppins-Medium",
  },
});
