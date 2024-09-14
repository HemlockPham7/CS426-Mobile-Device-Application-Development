import { StyleSheet, ScrollView, Platform, Dimensions } from "react-native";
import { Image } from "expo-image";

import MyView from "../../components/global/MyView";
import MyPressable from "../../components/global/MyPressable";
import Icon from "../../components/global/Icon";
import MyAppText from "../../components/global/MyAppText";
import MusicItem from "../../components/homeScreen/music/MusicItem";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import { useAudio } from "../../components/global/AudioProvider";
import { useAppSelector } from "../../redux store/hook";

export const sources = [
  {
    path: require("../../../assets/music/headInTheCloud.mp3"),
    name: "Head In The Clouds",
    image: require("../../../assets/music/3.jpg"),
  },
  {
    path: require("../../../assets/music/pastLives.mp3"),
    name: "Past Lives",
    image: require("../../../assets/music/4.jpg"),
  },
  {
    path: require("../../../assets/music/somewhereOnlyWeKnow.mp3"),
    name: "Somewhere Only We Know ",
    image: require("../../../assets/music/5.jpg"),
  },
  {
    path: require("../../../assets/music/Safe & Sound.mp3"),
    name: "Safe & Sound",
    image: require("../../../assets/music/6.jpg"),
  },
  {
    path: require("../../../assets/music/Airplane Mode.mp3"),
    name: "Airplane Mode",
    image: require("../../../assets/music/1.jpg"),
  },

  {
    path: require("../../../assets/music/Memories.mp3"),
    name: "Memories",
    image: require("../../../assets/music/2.jpg"),
  },
];
function formattMillis(milliseconds: number) {
  const minutes = Math.floor(milliseconds / 1000 / 60);
  const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);
  return seconds < 10 ? `${minutes}:0${seconds}` : `${minutes}:${seconds}`;
}

function MusicScreen({ navigation }: any) {
  const idMusic = useAppSelector((state) => state.setting.idMusic);
  const { isPlaying, togglePlayPause, progress, duration } = useAudio();

  function handleMusic() {
    togglePlayPause(sources[idMusic].path);
  }

  const animatedIndicatorStyle = useAnimatedStyle(() => ({
    width: `${progress * 100}%`,
  }));

  return (
    <MyView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <MyView color="primary200" style={styles.card}>
          <MyView style={{ flex: 2 }}>
            <Image style={styles.musicImage} source={sources[idMusic].image} />
          </MyView>
          <MyView style={styles.rightContainer}>
            <MyAppText style={styles.nameSong} color="black">
              {sources[idMusic].name}
            </MyAppText>

            <MyView style={{ alignItems: "center" }}>
              <MyView style={{ flexDirection: "row" }}>
                <MyView color="black" style={styles.playbackBackground}>
                  <Animated.View
                    style={[styles.playbackIndicator, animatedIndicatorStyle]}
                  />
                </MyView>
                <MyAppText>{formattMillis(duration)}</MyAppText>
              </MyView>

              <MyPressable
                color="primary500"
                style={styles.buttonPlayContainer}
                onPress={handleMusic}
              >
                <Icon
                  color="white"
                  size={16}
                  source={
                    isPlaying
                      ? require("../../../assets/icons/pause.png")
                      : require("../../../assets/icons/play.png")
                  }
                />
              </MyPressable>
            </MyView>
          </MyView>
        </MyView>

        <MyView style={styles.subContainer}>
          <MusicItem
            id={0}
            path={sources[0].path}
            image={sources[0].image}
            name={sources[0].name}
          />
          <MusicItem
            id={1}
            path={sources[1].path}
            image={sources[1].image}
            name={sources[1].name}
          />
        </MyView>
        <MyView style={styles.subContainer}>
          <MusicItem
            id={2}
            path={sources[2].path}
            image={sources[2].image}
            name={sources[2].name}
          />
          <MusicItem
            id={3}
            path={sources[3].path}
            image={sources[3].image}
            name={sources[3].name}
          />
        </MyView>
        <MyView style={[styles.subContainer, { paddingBottom: 50 }]}>
          <MusicItem
            id={4}
            path={sources[4].path}
            image={sources[4].image}
            name={sources[4].name}
          />
          <MusicItem
            id={5}
            path={sources[5].path}
            image={sources[5].image}
            name={sources[5].name}
          />
        </MyView>
      </ScrollView>
    </MyView>
  );
}

export default MusicScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 12,

    alignItems: "center",
  },
  subContainer: {
    flexDirection: "row",
    paddingBottom: 8,
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get("window").width,
  },

  card: {
    height: 120,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    marginHorizontal: 12,
    borderRadius: 12,
  },
  musicImage: {
    height: 100,
    width: 100,
    marginLeft: 12,
  },
  rightContainer: {
    alignItems: "center",
    flex: 3,
    justifyContent: "space-between",
    paddingTop: 12,
  },
  nameSong: {
    fontSize: 14,
    fontFamily: "Poppins-SemiBold",
    marginBottom: 4,
    textAlign: "center",
  },

  playbackBackground: {
    height: 5,
    width: 120,
    borderRadius: 12,
    marginTop: 6,
    marginRight: 12,
  },
  playbackIndicator: {
    backgroundColor: "white",
    height: "100%",
  },
  buttonPlayContainer: {
    marginBottom: 16,
    marginTop: 8,
    padding: 12,
    width: 40,
    height: 40,
    borderRadius: 100,
  },
});
