import { StyleSheet } from "react-native";
import { useState } from "react";

import MyView from "../../global/MyView";
import MyAppText from "../../global/MyAppText";
import MyPressable from "../../global/MyPressable";
import Icon from "../../global/Icon";
import ModalListBookmark from "../../functionsScreen/ModalListBookmark";
import ModalSelectMood from "./ModalSelectMood";
import {
  getColorIcon,
  getEmojiName,
  getImageIcon,
} from "../../../constants/imageList";

function Filter({ filterMoods, setFilterMoods }: any) {
  const [isBookmark, setIsBookmark] = useState(false);
  const [isMoodFilter, setMoodFilter] = useState(false);

  function removeEmoji(_emoji: number) {
    setFilterMoods(filterMoods.filter((emoji: number) => emoji != _emoji));
  }

  return (
    <MyView>
      <MyView>
        <MyAppText style={styles.textHeader}>EMOJI FILTER</MyAppText>

        <MyView color="white" style={styles.emojiFilterContainer}>
          {filterMoods.length == 0 ? (
            <MyPressable
              onPress={() => setMoodFilter(true)}
              style={styles.childContainer}
            >
              <Icon
                size={26}
                source={require("../../../../assets/icons/plus.png")}
              />
              <MyAppText style={{ marginLeft: 16 }}>
                Add Mood To Search
              </MyAppText>
            </MyPressable>
          ) : (
            <MyView>
              {filterMoods.map((emoji: number) => (
                <MyView
                  style={[styles.moodComponent, { borderBottomWidth: 0.2 }]}
                  key={emoji}
                >
                  <MyView
                    style={{ flexDirection: "row", alignItems: "center" }}
                  >
                    <Icon
                      color={getColorIcon(emoji)}
                      size={32}
                      source={getImageIcon(emoji)}
                    />
                    <MyAppText style={{ marginLeft: 16 }}>
                      {getEmojiName(emoji)}
                    </MyAppText>
                  </MyView>
                  <MyPressable style={{paddingLeft:20}} onPress={() => removeEmoji(emoji)}>
                    <Icon
                      color="red"
                      size={24}
                      source={require("../../../../assets/icons/minus.png")}
                    />
                  </MyPressable>
                </MyView>
              ))}
              {filterMoods.length != 6 && (
                <MyPressable
                  onPress={() => setMoodFilter(true)}
                  style={styles.moodComponent}
                >
                  <MyView
                    style={{ flexDirection: "row", alignItems: "center" }}
                  >
                    <Icon
                      color="white"
                      size={26}
                      source={require("../../../../assets/icons/plus.png")}
                    />
                    <MyAppText style={{ marginLeft: 16 }}>Add More</MyAppText>
                  </MyView>
                  <Icon
                    color="green"
                    size={24}
                    source={require("../../../../assets/icons/plus.png")}
                  />
                </MyPressable>
              )}
            </MyView>
          )}
        </MyView>

        <ModalSelectMood
          filterMoods={filterMoods}
          setFilterMoods={setFilterMoods}
          isVisible={isMoodFilter}
          setModalVisible={setMoodFilter}
        />
      </MyView>

      <MyView>
        <MyAppText style={[styles.textHeader, { marginTop: 24 }]}>
          QUICK FILTER
        </MyAppText>
        <MyPressable
          onPress={() => setIsBookmark(true)}
          color="white"
          style={styles.childContainer}
        >
          <Icon
            size={26}
            source={require("../../../../assets/icons/bookmark.png")}
          />
          <MyAppText style={{ marginLeft: 16 }}>Show Favorites</MyAppText>
        </MyPressable>

        <ModalListBookmark
          isVisible={isBookmark}
          setModalVisible={setIsBookmark}
        />
      </MyView>
    </MyView>
  );
}

export default Filter;

const styles = StyleSheet.create({
  textHeader: {
    fontSize: 16,
    fontFamily: "Poppins-Medium",
    marginBottom: 12,
    opacity: 0.6,
    marginTop: 8,
  },
  emojiFilterContainer: {
    borderRadius: 16,
    overflow: "hidden",
  },
  childContainer: {
    flexDirection: "row",
    borderRadius: 16,
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 12,
  },
  moodComponent: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 16,
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 12,
    paddingRight: 16,
  },
});
