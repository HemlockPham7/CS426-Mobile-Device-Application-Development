import { StyleSheet } from "react-native";
import { useState } from "react";

import MyPressable from "../../global/MyPressable";
import Icon from "../../global/Icon";
import MyAppText from "../../global/MyAppText";
import RecordingModal from "./RecodingModal";

function RecordingsComponent({ recordings }: any) {
  const [isVisible, setModalVisible] = useState(false);

  return (
    <>
      <MyPressable
        color="primary200"
        style={styles.container}
        onPress={() => setModalVisible(true)}
      >
       <Icon
          size={70}
          color="none"
          source={require("../../../../assets/gifs/recording1.gif")}
        />
        <MyAppText
          style={{
            marginBottom: 2,
            marginTop:4,
            fontSize: 15,
            fontFamily: "Poppins-SemiBold",
          }}
        >
          {recordings.length === 0
            ? "No Recording"
            : `${recordings.length} recording${
                recordings.length > 1 ? "s" : ""
              }`}
        </MyAppText>
      </MyPressable>

      <RecordingModal
        isVisible={isVisible}
        setModalVisible={setModalVisible}
        recordings={recordings}
      />
    </>
  );
}

export default RecordingsComponent;

const styles = StyleSheet.create({
  container: {
    height: 140,
    flex: 1,
    borderRadius: 8,
    marginRight: 8,
    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
});
