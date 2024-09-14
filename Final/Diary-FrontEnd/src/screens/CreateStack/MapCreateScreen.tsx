import { StyleSheet } from "react-native";
import { useLayoutEffect, useState } from "react";

import MyView from "../../components/global/MyView";
import Icon from "../../components/global/Icon";
import MyPressable from "../../components/global/MyPressable";
import MapComponent from "../../components/mapCreateScreen/MapComponent";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import CreateMapModal from "../../components/mapCreateScreen/CreateMapModal";
import { useAppDispatch, useAppSelector } from "../../redux store/hook";
import { changeMapStyle } from "../../redux store/settingSlice";

function MapCreateScreen({ navigation }: any) {
  const dispatch = useAppDispatch();
  const mapStyle = useAppSelector((state) => state.setting.mapStyle);
  const locations = useAppSelector((state) => state.createDiary.locations);
  const [isVisible, setModalVisible] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <MyView style={{ flexDirection: "row", alignItems: "center" }}>
          <MyPressable
            style={{ padding: 8, marginRight: 8 }}
            onPress={() => dispatch(changeMapStyle())}
          >
            <Icon
              color="none"
              size={24}
              source={
                mapStyle == "dark"
                  ? require("../../../assets/icons/moon-dark.png")
                  : require("../../../assets/icons/moon-light.png")
              }
            />
          </MyPressable>

          <MyPressable
            style={{ padding: 8 }}
            onPress={() => setModalVisible(true)}
          >
            <Icon
              color="black"
              size={18}
              source={require("../../../assets/icons/plus-noOutline.png")}
            />
          </MyPressable>
        </MyView>
      ),
    });
  }, [mapStyle]);

  return (
    <MyView style={styles.container}>
      <FlatList
        data={locations}
        showsVerticalScrollIndicator={false}
        renderItem={(item) => <MapComponent location={item.item} />}
      />
      <CreateMapModal isVisible={isVisible} setModalVisible={setModalVisible} />
    </MyView>
  );
}

export default MapCreateScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    alignItems: "center",
  },
});
