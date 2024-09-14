import { StyleSheet } from "react-native";
import Modal from "react-native-modal";
import { FlatList } from "react-native-gesture-handler";

import MyView from "../../global/MyView";
import MyPressable from "../../global/MyPressable";
import MyAppText from "../../global/MyAppText";
import MapItemComponent from "./MapItemComponent";
import Icon from "../../global/Icon";
import { useAppDispatch, useAppSelector } from "../../../redux store/hook";
import { changeMapStyle } from "../../../redux store/settingSlice";

function DisplayLocationModal({ isVisible, setModalVisible, locations }: any) {
  const dispatch = useAppDispatch();
  const mapStyle = useAppSelector((state) => state.setting.mapStyle);

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={() => setModalVisible(false)}
      animationInTiming={400}
      animationOut={"fadeOutUp"}
      style={{ margin: 0 }}
      backdropOpacity={0.5}
    >
      {locations.length == 0 ? (
        <MyView isBorder color="background" style={styles.container}>
          <MyAppText style={{ textAlign: "center" }}>
            Please add your favorite places in edit mode
          </MyAppText>
        </MyView>
      ) : (
        <MyView color="background" style={styles.modalContainer}>
          <MyView style={styles.topContainer}>
            <MyPressable onPress={() => setModalVisible(false)}>
              <MyAppText style={{ fontSize: 15, fontFamily: "Poppins-Light" }}>
                Close
              </MyAppText>
            </MyPressable>

            <MyPressable
              style={{ paddingLeft: 12 }}
              onPress={() => dispatch(changeMapStyle())}
            >
              <Icon
                color="none"
                size={24}
                source={
                  mapStyle == "dark"
                    ? require("../../../../assets/icons/moon-dark.png")
                    : require("../../../../assets/icons/moon-light.png")
                }
              />
            </MyPressable>
          </MyView>

          <MyView style={{ alignItems: "center" }}>
            <FlatList
              data={locations}
              showsVerticalScrollIndicator={false}
              renderItem={(item) => <MapItemComponent location={item.item} />}
            />
          </MyView>
        </MyView>
      )}
    </Modal>
  );
}

export default DisplayLocationModal;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderRadius: 16,
    borderWidth: 2,
    paddingVertical: 40,
    marginHorizontal: 24,
    paddingHorizontal: 12,
  },

  modalContainer: {
    height: "100%",
    paddingTop: 62,
    paddingBottom: "20%",
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,

    zIndex: 1000,
    marginBottom: 16,
  },
});
