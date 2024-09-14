import { StyleSheet } from "react-native";
import Modal from "react-native-modal";
import { useEffect, useState } from "react";
import { Audio } from "expo-av";

import MyView from "../../global/MyView";
import Icon from "../../global/Icon";
import MyPressable from "../../global/MyPressable";
import MyAppText from "../../global/MyAppText";
import ChooseLanguageSpeaker from "./ChooseLanguageSpeaker";
import VoiceItemVietnam from "./VoiceItemVietnam";
import VoiceItemEnglish from "./VoiceItemEnglish";
import { getAudioFromCloud } from "../../../api/text to speech/tts";

function ModalSpeaker({ isVisible, setModalVisible, diary }: any) {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [language, setLanguage] = useState("Vietnamese");
  const [voiceNumber, setVoiceNumber] = useState(1);
  const [sound, setSound] = useState<Audio.Sound | null>(null);

  useEffect(() => {
    async function stop() {
      await sound?.stopAsync();
      setIsSpeaking(false);
      setSound(null);
    }
    stop();
  }, [voiceNumber, language]);

  useEffect(() => {
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [sound]);

  function getVoiceName() {
    if (language == "Vietnamese") {
      if (voiceNumber == 1) {
        return "vi-VN-Wavenet-C";
      } else if (voiceNumber == 2) {
        return "vi-VN-Neural2-D";
      } else if (voiceNumber == 3) {
        return "vi-VN-Standard-B";
      } else {
        return "vi-VN-Wavenet-A";
      }
    } else {
      if (voiceNumber == 1) {
        return "en-US-Standard-C";
      } else if (voiceNumber == 2) {
        return "en-US-Casual-K";
      } else if (voiceNumber == 3) {
        return "en-US-Studio-Q";
      } else {
        return "en-US-Wavenet-G";
      }
    }
  }

  function getLanguaeCode() {
    if (language == "Vietnamese") {
      return "vi-VN";
    }
    return "en-US";
  }

  async function speak() {
    if (isSpeaking) {
      await sound?.pauseAsync();
      setIsSpeaking(false);
    } else if (sound) {
      await sound.playAsync();
      setIsSpeaking(true);
    } else {
      const audioUri = await getAudioFromCloud(
        getLanguaeCode(),
        getVoiceName(),
        diary
      );
      setIsSpeaking(true);

      if (audioUri == null) return;
      const { sound: playbackObject } = await Audio.Sound.createAsync(
        { uri: audioUri },
        { shouldPlay: true }
      );

      setSound(playbackObject);

      playbackObject.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);

      await playbackObject.playAsync();
    }
  }

  const onPlaybackStatusUpdate = (status) => {
    if (status.didJustFinish) {
      setIsSpeaking(false);
    }
  };

  return (
    <Modal
      isVisible={isVisible}
      animationInTiming={300}
      animationOutTiming={300}
      onBackdropPress={() => setModalVisible(false)}
      backdropOpacity={0}
      onModalHide={() => {
        sound?.stopAsync();
        setIsSpeaking(false);
        setSound(null);
      }}
      style={{ margin: 0, justifyContent: "flex-end" }}
    >
      <MyView isBorder color="background" style={styles.container}>
        <ChooseLanguageSpeaker language={language} setLanguage={setLanguage} />

        <MyView style={styles.voiceContainer}>
          {language == "Vietnamese" ? (
            <>
              <MyView style={{ flexDirection: "row" }}>
                <VoiceItemVietnam
                  number={1}
                  voiceNumber={voiceNumber}
                  setVoiceNumber={setVoiceNumber}
                />
                <VoiceItemVietnam
                  number={2}
                  voiceNumber={voiceNumber}
                  setVoiceNumber={setVoiceNumber}
                />
              </MyView>
              <MyView style={{ flexDirection: "row" }}>
                <VoiceItemVietnam
                  number={3}
                  voiceNumber={voiceNumber}
                  setVoiceNumber={setVoiceNumber}
                />
                <VoiceItemVietnam
                  number={4}
                  voiceNumber={voiceNumber}
                  setVoiceNumber={setVoiceNumber}
                />
              </MyView>
            </>
          ) : (
            <>
              <MyView style={{ flexDirection: "row" }}>
                <VoiceItemEnglish
                  number={1}
                  voiceNumber={voiceNumber}
                  setVoiceNumber={setVoiceNumber}
                />
                <VoiceItemEnglish
                  number={2}
                  voiceNumber={voiceNumber}
                  setVoiceNumber={setVoiceNumber}
                />
              </MyView>
              <MyView style={{ flexDirection: "row" }}>
                <VoiceItemEnglish
                  number={3}
                  voiceNumber={voiceNumber}
                  setVoiceNumber={setVoiceNumber}
                />
                <VoiceItemEnglish
                  number={4}
                  voiceNumber={voiceNumber}
                  setVoiceNumber={setVoiceNumber}
                />
              </MyView>
            </>
          )}
        </MyView>

        <MyView
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: 30,
            paddingTop: 12,
          }}
    
        >
          <MyAppText style={{ textAlign: "center", marginBottom: 20 }}>
            Press the button to hear your diary
          </MyAppText>
          <MyPressable
            onPress={speak}
            color="primary300"
            style={styles.buttonContainer}
          >
            <Icon
              color="black"
              size={35}
              source={
                isSpeaking
                  ? require("../../../../assets/icons/pause2.png")
                  : require("../../../../assets/icons/speaker3.png")
              }
            />
          </MyPressable>
        </MyView>
      </MyView>
    </Modal>
  );
}

export default ModalSpeaker;

const styles = StyleSheet.create({
  container: {
    height: "65%",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 20,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    height: 80,
    borderRadius: 100,
    paddingHorizontal: 13,
    paddingVertical: 13,
  },
  voiceContainer: {
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 20,
  },
});
