import { FlatList, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import { useEffect } from "react";

import MyView from "../global/MyView";
import MyPressable from "../global/MyPressable";
import MyAppText from "../global/MyAppText";
import { useAppSelector } from "../../redux store/hook";
import BookmarkItem from "./BookmarkItem";

function ModalListBookmark({ isVisible, setModalVisible }: any) {
  const diaries = useAppSelector((state) => state.diaries.diaries);
  const diariesWithBookmark = diaries.filter((diary) => diary.bookmark == true);

  useEffect(() => {}, []);

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={() => setModalVisible(false)}
      animationInTiming={300}
      animationOutTiming={1}
      animationIn={"fadeInRight"}
      animationOut={"fadeOutUp"}
      backdropOpacity={0.5}
      style={{ margin: 0 }}
    >
      <MyView color="background" style={styles.container}>
        <MyPressable onPress={() => setModalVisible(false)}>
          <MyAppText
            style={{
              fontSize: 15,
              fontFamily: "Poppins-Light",
              marginBottom: 12,
            }}
          >
            Close
          </MyAppText>
        </MyPressable>

        <FlatList
          data={diariesWithBookmark}
          renderItem={(item) => {
            return (
              <BookmarkItem
                id={item.item.id}
                timestamp={item.item.timestamp}
                title={item.item.title}
                hashTag={item.item.hashTag}
                emoji={item.item.emoji}
                bookmark={item.item.bookmark}
                setModalVisible={setModalVisible}
              />
            );
          }}
          style={{ marginBottom: "15%" }}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        ></FlatList>
      </MyView>
    </Modal>
  );
}

export default ModalListBookmark;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    paddingTop: "15%",
    paddingHorizontal: 16,
  },
});
