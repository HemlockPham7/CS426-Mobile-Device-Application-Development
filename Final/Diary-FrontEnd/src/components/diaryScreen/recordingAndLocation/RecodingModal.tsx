import { StyleSheet, View } from "react-native";
import Modal from "react-native-modal";
import { FlatList } from "react-native-gesture-handler";

import MyView from "../../global/MyView";
import MyAppText from "../../global/MyAppText";
import MyPressable from "../../global/MyPressable";
import MemoItem from "../../createScreen/recording/MemoItem";

function RecordingModal({ isVisible, setModalVisible, recordings }: any) {
  return (
    <>
      <Modal
        isVisible={isVisible}
        onBackdropPress={() => setModalVisible(false)}
        animationInTiming={400}
        animationOutTiming={300}
        animationIn={"fadeInUp"}
        animationOut={"fadeOutUp"}
        backdropOpacity={0.5}
        style={{ marginHorizontal: 0 }}
      >
        <MyView isBorder color="background" style={styles.containerModal}>
          {recordings.length != 0 && (
            <MyView style={styles.buttonContainer}>
              <MyPressable onPress={() => setModalVisible(false)}>
                <MyAppText
                  style={{ fontSize: 15, fontFamily: "Poppins-Light" }}
                >
                  Close
                </MyAppText>
              </MyPressable>
            </MyView>
          )}

          <MyView style={styles.recordingsContainer}>
            {recordings.length === 0 ? (
              <MyAppText style={styles.noRecordingText}>
                No recording{"\n"}Please record something in edit mode
              </MyAppText>
            ) : (
              <FlatList
                showsVerticalScrollIndicator={false}
                data={recordings}
                renderItem={(item) => (
                  <>
                    <MemoItem
                      uri={item.item}
                      noDelete={true}
                      index={recordings.length - item.index}
                    />
                  </>
                )}
                keyExtractor={(item) => item}
              />
            )}
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
    maxHeight: "60%",
    borderRadius: 16,
    borderWidth: 3,
    paddingBottom: 30,
    paddingTop: 20,
    marginHorizontal: 24,
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
