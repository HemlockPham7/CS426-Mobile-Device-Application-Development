import { StyleSheet } from "react-native";

import MyView from "../global/MyView";
import MyAppText from "../global/MyAppText";
import { getFullDDateFromTimestamp } from "../../constants/date";
import EmojiIconComponent from "../diaryScreen/EmojiIconComponent";
import RecordingsComponent from "../diaryScreen/recordingAndLocation/RecordingsComponent";
import LocationComponent from "../diaryScreen/recordingAndLocation/LocationComponent";

function TopComponent({
  title,
  timestamp,
  hashTag,
  emoji,
  from,
  recordings,
  locations,
}: any) {
  return (
    <MyView>
      <MyView style={styles.shareByContainer}>
        <MyAppText style={{ fontSize: 16, fontFamily: "Poppins-SemiBold" }}>
          Shared By:{" "}
        </MyAppText>
        <MyAppText style={{ fontSize: 16 }}>{from}</MyAppText>
      </MyView>
      <MyView style={styles.container}>
        <MyAppText style={styles.timeText}>
          {getFullDDateFromTimestamp(timestamp)}
        </MyAppText>
        <MyView style={{ flexDirection: "row", alignItems: "center" }}>
          <EmojiIconComponent emoji={emoji} />
        </MyView>
      </MyView>

      <MyView
        style={[
          styles.recordingsAndLocationContainer,
          locations.length == 0 ||
            recordings.length == 0 && { marginBottom: 24 },
        ]}
      >
        {recordings.length > 0 && (
          <RecordingsComponent recordings={recordings} />
        )}
        {locations.length > 0 && <LocationComponent locations={locations} />}
      </MyView>

      <MyAppText style={styles.titleText}>{title}</MyAppText>

      <MyView
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        {hashTag.map((item: string) => {
          return (
            <MyAppText
              key={item}
              style={{
                fontSize: 13,
                opacity: 0.5,
              }}
            >
              #{item}
            </MyAppText>
          );
        })}
      </MyView>
    </MyView>
  );
}

export default TopComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  shareByContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
    marginBottom: 8,
  },

  dateText: {
    marginHorizontal: 20,
    marginBottom: 4,
    fontSize: 14,
    fontFamily: "Poppins-SemiBold",
    opacity: 0.7,
  },
  recordingsAndLocationContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 4,
  },
  timeText: {
    fontSize: 16,
    fontFamily: "Poppins-SemiBold",
    opacity: 0.7,
  },
  titleText: {
    fontSize: 21,
    fontFamily: "Poppins-Bold",
    marginBottom: 8,
    letterSpacing: 0.5,
  },
});
