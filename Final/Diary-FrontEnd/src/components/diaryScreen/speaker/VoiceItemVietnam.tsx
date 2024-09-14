import { StyleSheet } from "react-native";

import MyPressable from "../../global/MyPressable";
import MyAppText from "../../global/MyAppText";
import MyView from "../../global/MyView";
import Icon from "../../global/Icon";

function VoiceItemVietnam({ number, voiceNumber, setVoiceNumber }: any) {
  let image = require("../../../../assets/speakers/1.webp");

  if (number == 2) {
    image = require("../../../../assets/speakers/3.webp");
  } else if (number == 3) {
    image = require("../../../../assets/speakers/5.webp");
  } else if (number == 4) {
    image = require("../../../../assets/speakers/6.webp");
  }

  return (
    <MyPressable
      color={number == voiceNumber ? "primary200" : "white"}
      isBorder
      style={styles.container}
      onPress={() => setVoiceNumber(number)}
    >
      <Icon color="none" size={65} source={image} />
      <MyView>
        <MyAppText style={styles.boldText}>Voice 0{number}</MyAppText>
        <MyAppText style={styles.text}>
          {number == 1 || number == 4 ? "Female" : "Male"}
        </MyAppText>
      </MyView>
    </MyPressable>
  );
}

export default VoiceItemVietnam;

const styles = StyleSheet.create({
  container: {
    paddingRight: 12,
    paddingVertical: 12,
    borderRadius: 16,
    borderWidth: 2,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    marginVertical: 16,
  },
  boldText: {
    fontSize: 18,
    fontFamily: "Poppins-SemiBold",
  },
  text: {
    fontSize: 14,
  },
});
