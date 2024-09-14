import { ImageBackground, StyleSheet } from "react-native";
import { useState } from "react";

import MyPressable from "../global/MyPressable";
import MyAppText from "../global/MyAppText";
import Icon from "../global/Icon";
import ModalListBookmark from "./ModalListBookmark";

import { useAppSelector } from "../../redux store/hook";
import { ColorStorage, hexToRgb } from "../../constants/styles";

function ListBookmark() {
  const colorId = useAppSelector((state) => state.setting.idColor);
  const colors = ColorStorage.get(colorId)!;
  const [isVisible, setModalVisible] = useState(false);

  return (
    <ImageBackground
      imageStyle={{ borderRadius: 12 }}
      style={[styles.container]}
      source={require("../../../assets/card-bg.png")}
    >
      <MyPressable
        isStylePress
        style={[styles.button, { backgroundColor: hexToRgb("#ffdcab") }]}
        onPress={() => setModalVisible(true)}
      >
        <Icon
          style={{ marginTop: 10 }}
          color="none"
          size={60}
          source={require("../../../assets/gifs/diary1.gif")}
        />
        <MyAppText
          style={{
            fontFamily: "Poppins-SemiBold",
            fontSize: 12,
            paddingBottom: 16,
            marginTop: 2,
            paddingHorizontal: 10,
            textAlign: "center",
          }}
        >
          Bookmarked Diaries
        </MyAppText>

        <ModalListBookmark
          isVisible={isVisible}
          setModalVisible={setModalVisible}
        />
      </MyPressable>
    </ImageBackground>
  );
}

export default ListBookmark;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: 120,
    height: 110,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.33,
    shadowRadius: 2,

    elevation: 4,
  },
  button: {
    flex: 1,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "rgba(69, 245, 204, 0.9)",
    //98, 206, 252
  },
});
