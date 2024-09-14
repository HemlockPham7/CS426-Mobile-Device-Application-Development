import { StyleSheet, TextInput } from "react-native";
import { useState } from "react";

import MyView from "../global/MyView";
import MyPressable from "../global/MyPressable";
import MyAppText from "../global/MyAppText";
import Icon from "../global/Icon";
import ModalInfo from "./ModalInfo";

function InforItem({ title, detailedInfor }: any) {
  const [isModalVisible, setModalVisible] = useState(false);

  function openModal() {
    setModalVisible(true);
  }

  return (
    <MyView style={styles.inforItem}>
      <MyAppText style={{ fontSize: 14 }}>{title}</MyAppText>
      <MyPressable
        style={{ flexDirection: "row", alignItems: "center" }}
        onPress={openModal}
      >
        <MyAppText style={{ fontSize: 14, fontFamily: "Poppins-Medium", opacity:0.5 }}>
          {detailedInfor}
        </MyAppText>
        <Icon
          size={32}
          source={require("../../../assets/icons/ArrowRight2.png")}
        ></Icon>
      </MyPressable>

      {/* Modal */}
      <ModalInfo
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}
        title={title}
      />
    </MyView>
  );
}

export default InforItem;

const styles = StyleSheet.create({
  inforItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 6,
  },
});
