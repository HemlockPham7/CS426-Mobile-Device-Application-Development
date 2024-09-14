import { ImageBackground, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import MyAppText from "../global/MyAppText";
import MyView from "../global/MyView";
import MyPressable from "../global/MyPressable";
import Icon from "../global/Icon";
import { nameScreen } from "../../constants/globalVariables";
import { ColorStorage, hexToRgb } from "../../constants/styles";
import { useAppSelector } from "../../redux store/hook";
import MusicComponent from "./music/MusicComponent";

function CreatingComponent() {
  const navigation = useNavigation<any>();
  const id = useAppSelector((state) => state.setting.idColor);
  const colors = ColorStorage.get(id)!;

  function calendarHandler() {
    navigation.navigate(nameScreen.calendar);
  }
  function startCreatingHandler() {
    navigation.navigate("CreateStack");
  }
  function viewImagesHandler() {
    navigation.navigate(nameScreen.viewImaages);
  }

  function SmallComponent({ image, text, onPress, size, style, color }: any) {
    return (
      <MyPressable
        style={[styles.itemContainer]}
        color={color}
        onPress={onPress}
      >
        <Icon
          style={[{ marginTop: 4 }, style]}
          color="none"
          size={size}
          source={image}
        />
        <MyAppText
          style={{
            fontFamily: "Poppins-Bold",
            fontSize: 13,
            paddingBottom: 12,
            paddingHorizontal: 10,
            marginTop: 0,
            textAlign: "center",
          }}
        >
          {text}
        </MyAppText>
      </MyPressable>
    );
  }

  return (
    <MyView style={styles.container}>
      <MyView style={styles.leftComponent}>
        <MusicComponent />

        <MyView style={{ flexDirection: "row" }}>
          <SmallComponent
            image={require("../../../assets/gifs/diary.gif")}
            text="Creating"
            onPress={startCreatingHandler}
            size={60}
            color="#91ffc3"
          />
          <SmallComponent
            image={require("../../../assets/gifs/photo.gif")}
            text=" Gallery"
            onPress={viewImagesHandler}
            size={58}
            style={{ marginTop: 6 }}
            color="#d9ff9c"
          />
        </MyView>
      </MyView>

      <MyPressable
        onPress={calendarHandler}
        style={[
          styles.itemRight,
          {
            backgroundColor: hexToRgb(colors.primary200),
          },
        ]}
      >
        <Icon
          style={{ marginLeft: 8 }}
          color="none"
          size={80}
          source={require("../../../assets/gifs/bookmark2.gif")}
        />
        <MyAppText
          style={{
            fontFamily: "Poppins-Bold",
            fontSize: 15,
            paddingBottom: 12,
            paddingHorizontal: 10,
            marginTop: 0,
            textAlign: "center",
          }}
        >
          Diaries
        </MyAppText>
      </MyPressable>
    </MyView>
  );
}

export default CreatingComponent;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    flexDirection: "row",
    marginRight: 16,
    marginBottom: 8,
  },
  leftComponent: {
    borderRadius: 16,
    marginRight: 8,
  },
  itemContainer: {
    marginTop: 12,
    flex: 1,
    height: 100,
    marginHorizontal: 8,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 4,
  },

  itemRight: {
    flex: 1,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 4,
  },
});
