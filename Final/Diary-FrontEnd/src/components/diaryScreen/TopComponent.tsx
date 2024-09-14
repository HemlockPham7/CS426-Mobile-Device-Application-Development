import { StyleSheet } from "react-native";

import MyView from "../global/MyView";
import MyAppText from "../global/MyAppText";
import { getFullDDateFromTimestamp } from "../../constants/date";
import EmojiIconComponent from "./EmojiIconComponent";
import RecordingsComponent from "./recordingAndLocation/RecordingsComponent";
import LocationComponent from "./recordingAndLocation/LocationComponent";
import BookmarkComponent from "./BookmarkComponent";

function TopComponent({
  title,
  timestamp,
  hashTag,
  id,
  emoji,
  bookmark,
  recordings,
  locations,
}: any) {
  return (
    <MyView>
      <MyView style={styles.container}>
        <MyAppText style={styles.timeText}>
          {getFullDDateFromTimestamp(timestamp)}
        </MyAppText>
        <MyView style={{ flexDirection: "row", alignItems: "center" }}>
          <EmojiIconComponent emoji={emoji} />
          <BookmarkComponent bookmark={bookmark} />
        </MyView>
      </MyView>

      <MyView style={styles.recordingsAndLocationContainer}>
        <RecordingsComponent recordings={recordings} />
        <LocationComponent locations={locations} />
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
    marginTop: 24,
    marginBottom: 8,
  },
  recordingsAndLocationContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
    marginTop: 4,
  },
  timeText: {
    fontSize: 16,
    fontFamily: "Poppins-SemiBold",
    opacity: 0.7,
  },
  titleText: {
    fontSize: 22,
    fontFamily: "Poppins-Bold",
    marginBottom: 8,
    letterSpacing: 0.5,
    marginTop: 12,
  },
});
