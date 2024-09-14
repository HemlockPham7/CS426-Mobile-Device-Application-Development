import { StyleSheet } from "react-native";
import { useState } from "react";

import MyView from "../global/MyView";
import Icon from "../global/Icon";
import MyPressable from "../global/MyPressable";
import MyAppText from "../global/MyAppText";
import ModalEditTitleMap from "./ModalEditTitleMap";

function DisplayPickLocation({
  title,
  readableAddress,
  setTitle,
  saveLocation,
}: any) {
  const [isEditTitle, setModalEditTitle] = useState(false);

  function formattedTitle(title: string) {
    if (title.length > 25) {
      return title.slice(0, 25) + "...";
    }
    return title;
  }

  return (
    <MyView isBorder color="white" style={styles.addressContainer}>
      <MyView
        style={{
          flexDirection: "row",
          alignItems: "flex-start",
          width: "100%",
          paddingLeft: 20,
          marginTop: 20,
        }}
      >
        <MyView color="brown" style={styles.iconStyle}>
          <Icon
            size={18}
            color="white"
            source={require("../../../assets/icons/marker.png")}
          />
        </MyView>
        <MyView>
          <MyPressable
            style={styles.titleInput}
            onPress={() => setModalEditTitle(true)}
          >
            <MyAppText color="black" style={styles.titleText}>
              {title != "" ? formattedTitle(title) : "Your Title"}
            </MyAppText>
            <Icon
              size={16}
              color="black"
              source={require("../../../assets/icons/pen.png")}
            />
          </MyPressable>

          <MyAppText color="black" style={styles.addressText}>
            {readableAddress}
          </MyAppText>
        </MyView>
      </MyView>

      <MyPressable
        color="primary500"
        style={styles.buttonSaveContainer}
        isStylePress
        onPress={saveLocation}
      >
        <MyAppText
          color="white"
          style={{
            fontFamily: "Poppins-Medium",
            fontSize: 17,
          }}
        >
          Choose this place
        </MyAppText>
      </MyPressable>

      <ModalEditTitleMap
        isVisible={isEditTitle}
        setModalVisible={setModalEditTitle}
        setTitle={setTitle}
      />
    </MyView>
  );
}

export default DisplayPickLocation;

const styles = StyleSheet.create({
  addressContainer: {
    width: "100%",
    height: 220,
    position: "absolute",
    bottom: 0,
    borderRadius: 16,
    borderTopWidth: 2,
    alignItems: "center",
    justifyContent: "space-between",
  },
  titleInput: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  titleText: {
    fontFamily: "Poppins-Medium",
    fontSize: 17,
    marginRight: 10,
  },
  addressText: {
    fontSize: 14,
    height: 50,
    width: 300,
    fontFamily: "Poppins-Light",
  },
  iconStyle: {
    padding: 8,
    borderRadius: 50,
    marginRight: 20,
    marginTop: 10,
  },
  buttonSaveContainer: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,

    borderRadius: 20,
    marginBottom: 40,
  },
});
