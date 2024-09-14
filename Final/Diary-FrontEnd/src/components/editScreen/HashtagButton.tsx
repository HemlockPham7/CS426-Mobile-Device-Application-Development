import { StyleSheet } from "react-native";
import { useState } from "react";
import Modal from "react-native-modal";

import HashtagComponent from "../createScreen/headerRightButton/HashtagComponent";
import MyPressable from "../global/MyPressable";
import MyAppText from "../global/MyAppText";
import MyView from "../global/MyView";

function HashtagButton() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <MyPressable
        onPress={() => setIsVisible(true)}
        style={styles.buttonHeader}
      >
        <MyAppText style={{ fontFamily: "Poppins-Medium" }}>Hashtag</MyAppText>
      </MyPressable>

      <Modal
        isVisible={isVisible}
        animationInTiming={400}
        animationOutTiming={400}
        animationIn="pulse"
        onBackdropPress={() => setIsVisible(false)}
        avoidKeyboard={true}
        backdropOpacity={0.5}
      >
        <MyView isBorder color="background" style={styles.container}>
          <HashtagComponent />
        </MyView>
      </Modal>
    </>
  );
}

export default HashtagButton;

const styles = StyleSheet.create({
  buttonHeader: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 6,
    paddingTop:20,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: 150,
    borderRadius: 12,
    borderWidth: 2,
    paddingHorizontal: 12,
  },
});
