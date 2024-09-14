import { Alert, StyleSheet } from "react-native";

import MyView from "../../global/MyView";
import MyAppText from "../../global/MyAppText";
import MyPressable from "../../global/MyPressable";
import MyTextInput from "../../global/MyTextInput";
import { useState } from "react";
import Icon from "../../global/Icon";

import { useAppSelector, useAppDispatch } from "../../../redux store/hook";
import {
  addHashtag,
  removeHashtag,
} from "../../../redux store/createDiarySlice";

function HashtagComponent() {
  const dispatch = useAppDispatch();
  const hashTag = useAppSelector((state) => state.createDiary.hashTag);
  const [inputText, setInputText] = useState<string>("");

  function addHashTagHandler() {
    if (inputText === "") return;
    if (hashTag.includes(inputText) || hashTag.length >= 3) {
      Alert.alert("Error", "You can add up to 3 hashtags");
      setInputText("");
      return;
    }
    dispatch(addHashtag(inputText));
    setInputText("");
  }

  function removeHashTagHandler(hashtag: string) {
    dispatch(removeHashtag(hashtag));
  }

  return (
    <MyView
      style={{
        marginTop: 16,

      }}
    >
      <MyView
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",

          marginBottom: 4,
        }}
      >
        <MyView
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <MyAppText style={{ fontSize: 16, fontFamily: "Poppins-Medium" }}>
            Hashtag :
          </MyAppText>
          <MyTextInput
            isBorder
            value={inputText}
            onChangeText={setInputText}
            placeholder="Enter Hashtag"
            placeholderTextColor="#5c5c5c"
            autoCapitalize="none"
            onSubmitEditing={addHashTagHandler}
            style={styles.inputHashtag}
          ></MyTextInput>
        </MyView>

        <MyPressable
          onPress={addHashTagHandler}
          style={{ paddingLeft: 14, paddingVertical: 8 }}
        >
          <MyAppText style={{ fontSize: 14, fontFamily: "Poppins-Light" }}>
            Add
          </MyAppText>
        </MyPressable>
      </MyView>

      <MyView
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          flexWrap: "wrap",
        }}
      >
        {hashTag.map((hashtag: string) => {
          return (
            <MyPressable
              key={hashtag}
              color="primary200"
              style={styles.hashtagButton}
              onPress={() => removeHashTagHandler(hashtag)}
            >
              <MyAppText
                style={{
                  marginRight: 8,
                  fontSize: 13,
                }}
              >
                #{hashtag}
              </MyAppText>
              <Icon
                color="black"
                size={16}
                source={require("../../../../assets/icons/x.png")}
              ></Icon>
            </MyPressable>
          );
        })}
      </MyView>
    </MyView>
  );
}

export default HashtagComponent;

const styles = StyleSheet.create({
  inputHashtag: {
    height: 35,
    width: 200,
    fontSize: 15,
    paddingHorizontal: 2,
  },
  addButton: {
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 8,
  },
  hashtagButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    marginRight: 8,
    marginBottom: 6,
  },
});
