import { StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { Audio, AVPlaybackStatus } from "expo-av";
import { Sound } from "expo-av/build/Audio";
import Animated, { useAnimatedStyle } from "react-native-reanimated";

import MyPressable from "../../global/MyPressable";
import Icon from "../../global/Icon";
import MyAppText from "../../global/MyAppText";
import MyView from "../../global/MyView";
import { useAppDispatch } from "../../../redux store/hook";
import { removeRecording } from "../../../redux store/createDiarySlice";

function MemoItem({
  uri,
  noDelete,
  index,
}: {
  uri: string;
  noDelete: boolean;
  index: number;
}) {
  const dispatch = useAppDispatch();
  const [sound, setSound] = useState<Sound>();
  const [status, setStatus] = useState<AVPlaybackStatus>();

  async function loadSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      { uri: uri },
      { progressUpdateIntervalMillis: 1000 / 60 },
      onPlaybackStatusUpdate
    );
    setSound(sound);
  }

  useEffect(() => {
    loadSound();
  }, [uri]);

  const onPlaybackStatusUpdate = async (newStatus: AVPlaybackStatus) => {
    setStatus(newStatus);
  };

  async function playSound() {
    if (!sound) return;

    if (status?.isLoaded && status.isPlaying) {
      await sound?.pauseAsync();
    } else if (position == duration) {
      await sound?.replayAsync();
    } else {
      await sound?.playAsync();
    }
  }

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  function deleteRecording() {
    console.log("Deleting recording");
    dispatch(removeRecording(uri));
  }

  function formattMillis(milliseconds: number) {
    const minutes = Math.floor(milliseconds / 1000 / 60);
    const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);
    return seconds < 10 ? `${minutes}:0${seconds}` : `${minutes}:${seconds}`;
  }

  const isPlaying = status?.isLoaded ? status.isPlaying : false;
  const position = status?.isLoaded ? status.positionMillis : 0;
  const duration = status?.isLoaded ? status.durationMillis : 1;
  let progress: number = 0;
  if (position == duration) {
    progress = 0;
  } else {
    progress = position / (duration ? duration : 1);
  }

  const animatedIndicatorStyle = useAnimatedStyle(() => ({
    width: `${progress * 100}%`,
  }));

  return (
    <MyView color="primary200" style={styles.container}>
      <MyPressable
        color="primary500"
        onPress={playSound}
        style={styles.playButton}
      >
        <Icon
          color="white"
          size={14}
          source={
            isPlaying
              ? require(`../../../../assets/icons/pause.png`)
              : require(`../../../../assets/icons/play.png`)
          }
        ></Icon>
      </MyPressable>
      <MyView style={styles.playbackContainer}>
        {!noDelete && (
          <MyPressable
            color="white"
            style={styles.buttonClose}
            onPress={deleteRecording}
          >
            <Icon
              color="black"
              size={10}
              source={require("../../../../assets/icons/close-2.png")}
            ></Icon>
          </MyPressable>
        )}

        <MyAppText style={{ fontSize: 16 }}>
          Voice {index < 10 ? `0${index}` : `0${index}`}
        </MyAppText>

        <MyView>
          <MyView color="#6b6b6b" style={styles.playbackBackground}>
            <Animated.View
              style={[styles.playbackIndicator, animatedIndicatorStyle]}
            />
          </MyView>
        </MyView>

        <MyAppText
          color="#262625"
          style={{ position: "absolute", right: 0, bottom: -8 }}
        >
          Audio: {formattMillis(duration || 0)}
        </MyAppText>
      </MyView>
    </MyView>
  );
}

export default MemoItem;

const styles = StyleSheet.create({
  container: {
    margin: 5,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 16,
    gap: 15,
    marginBottom: 16,


    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  playButton: {
    height: 30,
    width: 30,
    borderRadius: 100,
    paddingLeft: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonClose: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: -4,
    end: -4,
    borderRadius: 20,
    height: 20,
    width: 20,
    zIndex: 1000,
  },
  playbackContainer: {
    flex: 1,
    height: 50,
    justifyContent: "flex-start",
  },
  playbackBackground: {
    height: 6,
    width: "100%",
    borderRadius: 12,
    marginTop: 6,
  },
  playbackIndicator: {
    backgroundColor: "white",
    height: "100%",
  },
});
