import { ImageBackground, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import MyPressable from "../global/MyPressable";
import MyAppText from "../global/MyAppText";
import Icon from "../global/Icon";
import { hexToRgb } from "../../constants/styles";
import { nameScreen } from "../../constants/globalVariables";
import MyView from "../global/MyView";

function ScanComponent() {
  const navigation = useNavigation<any>();

  function navigateScanScreen() {
    navigation.navigate(nameScreen.scanScreen);
  }

  return (
    <MyPressable
      isStylePress
      style={[styles.button, { backgroundColor: hexToRgb("#baeeff") }]}
      onPress={navigateScanScreen}
    >
      <MyView>
        <MyAppText
          style={{
            fontSize: 18,
            fontFamily: "Poppins-Bold",
          }}
        >
          Your Memories, Our Care
        </MyAppText>
        <MyAppText
          style={{
            fontSize: 13,
            fontFamily: "Poppins-Light",
          }}
        >
          We will help You Keep Your Past Alive
        </MyAppText>
      </MyView>

      <MyView style={{ alignItems: "center", marginTop: -4 }}>
        <Icon
          color="none"
          size={75}
          source={require("../../../assets/gifs/barcode.gif")}
        />
        <MyAppText
          style={{
            fontFamily: "Poppins-SemiBold",
            fontSize: 12,
            textAlign: "center",
          }}
        >
          Scan Old Diaries
        </MyAppText>
      </MyView>
    </MyPressable>
  );
}

export default ScanComponent;

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 16,
    marginTop: 20,
    borderRadius: 12,
    paddingHorizontal: 12,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.33,
    shadowRadius: 2,

    elevation: 4,
  },
});
