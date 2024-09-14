import { StyleSheet } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";

import MyPressable from "../../global/MyPressable";
import { AnimatedSoundBars } from "./Wave";
import MyView from "../../global/MyView";
import { nameScreen } from "../../../constants/globalVariables";
import { useAppSelector } from "../../../redux store/hook";
import { sources } from "../../../screens/HomeStack/MusicScreen";
import MyAppText from "../../global/MyAppText";

function MusicComponent() {
  const navigation = useNavigation<any>();
  const idMusic = useAppSelector((state) => state.setting.idMusic);

  function navigateMusicScreen() {
    navigation.navigate(nameScreen.musicScreen);
  }

  return (
    <MyPressable
      onPress={navigateMusicScreen}
      //   color="#ffc4c4"
      style={[styles.container]}
    >
      <Image style={styles.musicImage} source={sources[idMusic].image} />

      <MyView style={styles.rightContainer}>
        <MyAppText style={styles.nameSong} color="black">
          {sources[idMusic].name}
        </MyAppText>
        <AnimatedSoundBars barColor={"black"} />
      </MyView>
    </MyPressable>
  );
}

export default MusicComponent;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",

    marginLeft: 8,
    height: 70,
    marginRight: 8,
    borderRadius: 12,
    width: 235,
  },
  musicImage: {
    height: 60,
    width: 60,
  },
  rightContainer: {
    marginLeft: 8,
  },
  nameSong: {
    width: 150,
    fontSize: 13,
    fontFamily: "Poppins-SemiBold",
    marginBottom: 8,
    textAlign: "center",
  },
});
