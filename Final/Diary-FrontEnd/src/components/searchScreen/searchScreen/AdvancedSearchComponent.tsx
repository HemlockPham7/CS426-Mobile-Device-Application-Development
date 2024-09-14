import { StyleSheet, Switch } from "react-native";
import Modal from "react-native-modal";

import MyView from "../../global/MyView";
import MyAppText from "../../global/MyAppText";
import Icon from "../../global/Icon";
import { useAppSelector } from "../../../redux store/hook";
import { ColorStorage } from "../../../constants/styles";
import { useState } from "react";
import MyPressable from "../../global/MyPressable";

function AdvancedSearchComponent({
  isAdvancedSearch,
  setIsAdvancedSearch,
}: any) {
  const id = useAppSelector((state) => state.setting.idColor);
  const colors = ColorStorage.get(id)!;

  const [isVisible, setModalVisible] = useState(false);

  return (
    <MyView style={styles.container}>
      <MyPressable
        style={styles.headerStyle}
        onPress={() => setModalVisible(true)}
      >
        <MyAppText style={styles.textStyle}>Advanced Search</MyAppText>
        <Icon
          color="none"
          size={16}
          source={require("../../../../assets/icons/question.png")}
        />
      </MyPressable>
      <Switch
        onValueChange={() => setIsAdvancedSearch(!isAdvancedSearch)}
        value={isAdvancedSearch}
        trackColor={{ true: colors.primary500 }}
      />

      <Modal
        isVisible={isVisible}
        onBackdropPress={() => setModalVisible(false)}
        animationInTiming={400}
        animationOutTiming={300}
        animationIn={"fadeInUp"}
        animationOut={"fadeOutUp"}
        backdropOpacity={0.5}
        style={{ marginHorizontal: 0 }}
      >
        <MyView isBorder color="white" style={styles.containerModal}>
          <MyAppText
            style={{ textAlign: "center", fontFamily: "Poppins-Light" }}
          >
            Advanced Search lets you search the entire content of diaries
          </MyAppText>
        </MyView>
      </Modal>
    </MyView>
  );
}

export default AdvancedSearchComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
    marginTop: 12,
  },
  headerStyle: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 2,
  },
  textStyle: {
    fontSize: 14,
    marginRight: 8,
  },

  containerModal: {
    justifyContent: "space-between",
    alignItems: "center",
    maxHeight: "60%",
    borderRadius: 16,
    borderWidth: 3,
    paddingBottom: 30,
    paddingTop: 30,
    marginHorizontal: 24,
    paddingHorizontal: 12,
  },
});
