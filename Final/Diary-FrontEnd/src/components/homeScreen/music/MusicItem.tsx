import { StyleSheet } from "react-native";
import { Image } from "expo-image";

import MyPressable from "../../global/MyPressable";
import Icon from "../../global/Icon";
import MyView from "../../global/MyView";
import MyAppText from "../../global/MyAppText";
import { useAudio } from "../../global/AudioProvider";
import { useAppDispatch, useAppSelector } from "../../../redux store/hook";
import { changeIdMusic } from "../../../redux store/settingSlice";

function MusicItem({ path, image, id, name }: any) {
  const { togglePlayPause, isPlaying } = useAudio();
  const dispatch = useAppDispatch();
  const idMusic = useAppSelector((state) => state.setting.idMusic);

  const handlePlayMusic = async () => {
    dispatch(changeIdMusic(id));
    await togglePlayPause(path);
  };

  return (
    <MyView color="black" style={styles.imageCard}>
      <MyView style={{ width: "100%", alignItems: "center" }}>
        <Image style={styles.musicImage} source={image} />
        <MyAppText style={styles.nameSong} color="pink">
          {name}
        </MyAppText>
      </MyView>

      <MyPressable
        color="black"
        style={styles.buttonPlayContainer}
        onPress={handlePlayMusic}
      >
        <Icon
          color="pink"
          size={16}
          source={
            isPlaying && id == idMusic
              ? require("../../../../assets/icons/pause.png")
              : require("../../../../assets/icons/play.png")
          }
        />
      </MyPressable>
    </MyView>
  );
}

export default MusicItem;

const styles = StyleSheet.create({
  imageCard: {
    alignItems: "center",
    borderRadius: 16,
    marginHorizontal: 6,
    height: 270,
    paddingHorizontal: 4,
    paddingTop: 8,
    width: "46%",
    justifyContent: "space-between",
  },
  musicImage: {
    width: "92%",
    height: 155,
    borderRadius: 16,
  },
  nameSong: {
    fontSize: 12,
    paddingHorizontal: 4,
    fontFamily: "Poppins-Bold",
    marginTop: 8,
    textAlign: "center",
  },
  buttonPlayContainer: {
    marginBottom: 12,
    padding: 12,
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: "rgba(255, 196, 196,0.3)",
  },
});
