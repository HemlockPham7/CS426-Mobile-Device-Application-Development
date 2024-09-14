import { StyleSheet } from "react-native";
import Modal from "react-native-modal";
import { useState } from "react";
import { Audio } from "expo-av";
import { useSharedValue } from "react-native-reanimated";
import { FlatList } from "react-native-gesture-handler";

import MyView from "../../global/MyView";
import MyAppText from "../../global/MyAppText";
import RecordingButton from "./RecordingButton";
import MemoItem from "./MemoItem";
import MyPressable from "../../global/MyPressable";
import { useAppDispatch, useAppSelector } from "../../../redux store/hook";
import { addRecording } from "../../../redux store/createDiarySlice";
import { clearRecording } from "../../../redux store/createDiarySlice";

function RecordingModal({ isVisible, setModalVisible }: any) {
  const dispatch = useAppDispatch();
  const recordings = useAppSelector((state) => state.createDiary.recordings);

  const [permissionResponse, requestPermission] = Audio.usePermissions();
  const [recording, setRecording] = useState<Audio.Recording>();

  const metering = useSharedValue(-60);

  async function startRecording() {
    try {
      if (permissionResponse?.status !== "granted") {
        console.log("Requesting permission..");
        await requestPermission();
      }
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      console.log("Starting recording..");
      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY
      );
      setRecording(recording);
      console.log("Recording started");

      recording.setOnRecordingStatusUpdate((status) => {
        metering.value = status.metering || 1000 / 60;
      });
    } catch (err) {
      console.error("Failed to start recording", err);
    }
  }

  async function stopRecording() {
    if (!recording) return;
    console.log("Stopping recording..");

    setRecording(undefined);
    await recording.stopAndUnloadAsync();

    await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
    });
    const uri = recording.getURI();
    console.log("Recording stopped", uri);

    metering.value = -100;
    if (uri) {
      dispatch(addRecording(uri));
    }
  }

  return (
    <>
      <Modal
        isVisible={isVisible}
        onBackdropPress={() => setModalVisible(false)}
        animationInTiming={400}
        animationOutTiming={300}
        animationIn={"zoomIn"}
        backdropOpacity={0.5}
        style={{ marginHorizontal: 0 }}
      >
        <MyView isBorder color="background" style={styles.containerModal}>
          <MyView style={styles.buttonContainer}>
            <MyPressable onPress={() => dispatch(clearRecording())}>
              <MyAppText style={{ fontSize: 15, fontFamily: "Poppins-Light" }}>
                Clear
              </MyAppText>
            </MyPressable>
            <MyPressable onPress={() => setModalVisible(false)}>
              <MyAppText
                style={{ fontSize: 15, fontFamily: "Poppins-SemiBold" }}
              >
                Done
              </MyAppText>
            </MyPressable>
          </MyView>

          <MyView style={styles.recordingsContainer}>
            {recordings.length === 0 ? (
              <MyAppText style={styles.noRecordingText}>
                No recording{"\n"}Press the button below to start recording
              </MyAppText>
            ) : (
              <FlatList
                showsVerticalScrollIndicator={false}
                data={recordings}
                renderItem={(item) => (
                  <MemoItem uri={item.item} noDelete={false} index={recordings.length - item.index} />
                )}
                keyExtractor={(item) => item}
              />
            )}
          </MyView>

          <MyView style={{ alignItems: "center" }}>
            <RecordingButton
              recording={recording}
              startRecording={startRecording}
              stopRecording={stopRecording}
              metering={metering}
            />
          </MyView>
        </MyView>
      </Modal>
    </>
  );
}

export default RecordingModal;

const styles = StyleSheet.create({
  containerModal: {
    justifyContent: "space-between",
    alignItems: "center",
    height: "70%",
    borderRadius: 16,
    borderWidth: 3,
    paddingBottom: 30,
    paddingTop: 20,
    marginHorizontal: 16,
    paddingHorizontal: 12,
  },
  buttonContainer: {
    width: "100%",
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  recordingsContainer: {
    flex:1,
    width: "100%",
    marginTop: 20,
    paddingBottom: 20,
    justifyContent: "center",
    paddingHorizontal: 12,
  },
  noRecordingText: {
    textAlign: "center",
  },
});
