import { Pressable, StyleSheet } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from "react-native-reanimated";

import MyView from "../../global/MyView";

function RecordingButton({
  recording,
  startRecording,
  stopRecording,
  metering,
}: any) {
  const animatedRedCircle = useAnimatedStyle(() => ({
    width: withTiming(recording ? "70%" : "100%"),
    borderRadius: withTiming(recording ? 5 : 35),
  }));

  const animatedRecordWave = useAnimatedStyle(() => {
    let size = withSpring(
      interpolate(metering.value, [-160, -60, 0], [0, 0, -35])
    );

    return {
      top: size,
      bottom: size,
      left: size,
      right: size,
    };
  });

  return (
    <MyView style={{width:"100%"}}>
      <Animated.View style={[styles.recordWave, animatedRecordWave]} />
      <Pressable
        onPress={recording ? stopRecording : startRecording}
        style={styles.recordButton}
      >
        <Animated.View style={[styles.redCircle, animatedRedCircle]} />
      </Pressable>
    </MyView>
  );
}

export default RecordingButton;

const styles = StyleSheet.create({
  recordWave: {
    backgroundColor: "#FF000055",
    position: "absolute",
    top: -20,
    bottom: -20,
    left: -20,
    right: -20,
    zIndex: -1000,
    borderRadius: 1000,
  },
  recordButton: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: "red",
    width: 60,
    height: 60,
    borderRadius: 60,
    borderWidth: 3,
    padding: 3,
    backgroundColor: "white",
  },
  redCircle: {
    borderRadius: 60,
    aspectRatio: 1,
    backgroundColor: "red",
  },
});
