import { StyleSheet } from "react-native";
import Modal from "react-native-modal";

import MyView from "../../global/MyView";
import Icon from "../../global/Icon";
import MyAppText from "../../global/MyAppText";
import {
  getColorIcon,
  getEmojiName,
  getImageIcon,
} from "../../../constants/imageList";
import MyPressable from "../../global/MyPressable";

function ModalSelectMood({
  isVisible,
  setModalVisible,
  filterMoods,
  setFilterMoods,
}: any) {
  const emojis = [6, 5, 4, 3, 2, 1];

  function onPressEmoji(_emoji: number) {
    if (filterMoods.includes(_emoji)) {
      setFilterMoods(filterMoods.filter((emoji: number) => _emoji !== emoji));
      return;
    }

    setFilterMoods([...filterMoods, _emoji]);
  }

  return (
    <Modal
      isVisible={isVisible}
      animationIn={"slideInUp"}
      onBackdropPress={() => setModalVisible(false)}
      style={{ margin: 0, justifyContent: "flex-end" }}
    >
      <MyView color="white" style={styles.container}>
        <MyView>
          {emojis.map((emoji) => (
            <MyPressable
              onPress={() => onPressEmoji(emoji)}
              color="white"
              key={emoji}
              style={[styles.filterContainer]}
            >
              <MyView style={{ flexDirection: "row", alignItems: "center" }}>
                <Icon
                  color={getColorIcon(emoji)}
                  size={32}
                  source={getImageIcon(emoji)}
                />
                <MyAppText style={{ marginLeft: 16 }}>
                  {getEmojiName(emoji)}
                </MyAppText>
              </MyView>
              {filterMoods.includes(emoji) && (
                <Icon
                  size={22}
                  source={require("../../../../assets/icons/check.png")}
                />
              )}
            </MyPressable>
          ))}
        </MyView>

        <MyPressable
          style={styles.button}
          color="primary500"
          onPress={() => setModalVisible(false)}
        >
          <MyAppText
            color="white"
            style={{
              fontSize: 16,
              fontFamily: "Poppins-SemiBold",
              paddingVertical: 16,
            }}
          >
            Done
          </MyAppText>
        </MyPressable>
      </MyView>
    </Modal>
  );
}

export default ModalSelectMood;

const styles = StyleSheet.create({
  container: {
    height: "60%",
    borderRadius: 16,
    justifyContent: "space-between",
    paddingBottom: 40,
    overflow: "hidden",
    paddingTop: 12,
    paddingHorizontal: 20,
  },
  filterContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 14,
    marginBottom: 4,
    borderBottomWidth: 0.2,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
  },
});
