import { StyleSheet } from "react-native";
import Modal from "react-native-modal";

import MyView from "../global/MyView";
import MyAppText from "../global/MyAppText";
import MyPressable from "../global/MyPressable";
import { monthNames } from "../../constants/date";

export function customDate(selectedDay: string) {
  const [yearString, monthString, dayString] = selectedDay.split("-");
  const year = parseInt(yearString);
  const month = parseInt(monthString);
  const day = parseInt(dayString);
  const formattedDay = day < 10 ? `0${day}` : day;
  return `${formattedDay} ${monthNames.get(month)} ${year}`;
}

function ModalCalendarConfirm({
  isVisible,
  setModalVisible,
  date,
  onPress,
}: any) {
  return (
    <Modal
      isVisible={isVisible}
      animationInTiming={300}
      animationOutTiming={300}
      animationIn={"pulse"}
      avoidKeyboard={true}
      backdropOpacity={0.4}
      onBackdropPress={() => setModalVisible(false)}
    >
      <MyView isBorder color="background" style={styles.modalStyle}>
        <MyAppText
          style={{
            fontSize: 15,
            textAlign: "center",
            fontFamily: "Poppins-SemiBold",
          }}
        >
          {customDate(date)}
        </MyAppText>
        <MyAppText
          style={{
            fontSize: 14,
            marginTop:4,
            textAlign: "center",
          }}
        >
          Record a new diary
        </MyAppText>

        <MyView style={styles.buttonModalContainer}>
          <MyPressable
            onPress={() => setModalVisible(false)}
            color="#ff4a4a"
            style={styles.buttonModal}
          >
            <MyAppText
              color="white"
              style={{
                fontFamily: "Poppins-SemiBold",
                fontSize: 13,
              }}
            >Cancel</MyAppText>
          </MyPressable>

          <MyPressable
            onPress={() => onPress(date)}
            color="primary500"
            style={styles.buttonModal}
          >
            <MyAppText
              color="white"
              style={{
                fontFamily: "Poppins-SemiBold",
                fontSize: 13,
              }}
            >
              OK
            </MyAppText>
          </MyPressable>
        </MyView>
      </MyView>
    </Modal>
  );
}
export default ModalCalendarConfirm;

const styles = StyleSheet.create({
  modalStyle: {
    height: 160,
    borderRadius: 12,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "space-evenly",
    marginHorizontal: 40,
    paddingHorizontal: 16,
  },
  buttonModalContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 8,
  },
  buttonModal: {
    alignItems: "center",
    borderRadius: 12,
    paddingVertical: 8,
    width: 80,
  },

  loadingStyle: {
    height: 100,
    borderRadius: 12,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 32,
  },
  loadingTextStyle: {
    fontSize: 16,
    fontFamily: "Poppins-SemiBold",
    marginBottom: 12,
  },
});
