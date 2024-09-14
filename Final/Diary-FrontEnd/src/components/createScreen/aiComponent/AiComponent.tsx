import { StyleSheet, Image } from "react-native";
import Modal from "react-native-modal";
import { useState } from "react";

import MyView from "../../global/MyView";
import MyPressable from "../../global/MyPressable";
import Icon from "../../global/Icon";
import AIOptionComponent from "./AIOptionComponent";

function AIComponent() {
  const [isVisible, setModalVisible] = useState(false);

  return (
    <>
      <MyPressable
        style={{ paddingBottom: 4 }}
        onPress={() => setModalVisible(true)}
      >
        <Image
          style={{ height: 50, width: 50 }}
          source={require("../../../../assets/gifs/AI2.gif")}
        />
      </MyPressable>

      <Modal
        isVisible={isVisible}
        onBackdropPress={() => setModalVisible(false)}
        animationInTiming={400}
        animationOutTiming={500}
        style={{ justifyContent: "flex-end", margin: 0 }}
      >
        <MyView color="background" style={styles.container}>
          <MyPressable
            onPress={() => setModalVisible(false)}
            isBorder
            color="white"
            style={styles.buttonClose}
          >
            <Icon
              size={24}
              source={require("../../../../assets/icons/Arrow_Down.png")}
            ></Icon>
          </MyPressable>

          <AIOptionComponent id={0} />
          <AIOptionComponent id={1} />

         
        </MyView>
      </Modal>
    </>
  );
}

export default AIComponent;

const styles = StyleSheet.create({
  container: {
    height: "40%",
    borderTopEndRadius: 16,
    borderTopLeftRadius: 16,
    borderWidth: 2,
    justifyContent: "center",

  },
  buttonClose: {
    justifyContent: "center",
    alignItems: "center",
    height: 30,
    width: 30,
    position: "absolute",
    top: -15,
    end: 30,
    borderWidth: 2,
    borderRadius: 12,
  },
});
