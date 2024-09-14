import { StyleSheet } from "react-native";
import { useEffect } from "react";

import MyView from "../global/MyView";
import MyAppText from "../global/MyAppText";
import Icon from "../global/Icon";
import { getColorIcon, getImageIcon } from "../../constants/imageList";

function EmojiMoodBar({ id, probability }: any) {
  return (
    <MyView style={styles.emojiContainer}>
      <Icon
        size={38}
        color={probability != 0 ? getColorIcon(id) : "#d4d4d4"}
        source={getImageIcon(id)}
      />

      <MyView
        color={probability != 0 ? getColorIcon(id) : "#d4d4d4"}
        style={styles.textContainer}
      >
        <MyAppText
          style={{
            fontFamily: "Poppins-Medium",
            fontSize: 12,
          }}
        >
          {probability}%
        </MyAppText>
      </MyView>
    </MyView>
  );
}

export default EmojiMoodBar;

const styles = StyleSheet.create({
  emojiContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
    width: 46,
    borderRadius: 16,
    paddingVertical: 2,
    opacity: 0.8,
  },
});
