import { StyleSheet, Switch, Button, Platform } from "react-native";
import { useEffect, useState } from "react";
import * as Notifications from "expo-notifications";

import MyView from "../../components/global/MyView";
import MyAppText from "../../components/global/MyAppText";
import ModalPickTime from "../../components/reminderScreen/ModalPickTime";
import MyPressable from "../../components/global/MyPressable";
import { useAppDispatch, useAppSelector } from "../../redux store/hook";
import { ColorStorage } from "../../constants/styles";
import { changeIsReminder } from "../../redux store/settingSlice";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

function ReminderScreen() {
  const dispatch = useAppDispatch();
  const { hourReminder, minuteReminder, isReminder, idColor } = useAppSelector(
    (state) => state.setting
  );
  const colors = ColorStorage.get(idColor)!;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    async function registerForPushNotificationsAsync() {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        alert("Failed to get push token for push notification!");
        return;
      }
    }

    registerForPushNotificationsAsync();
  }, []);

  useEffect(() => {
    if (isReminder == 0) {
      Notifications.cancelAllScheduledNotificationsAsync();
    } else {
      reminder();
    }
  }, [hourReminder, minuteReminder, isReminder]);

  function onChange() {
    dispatch(changeIsReminder(isReminder == 1 ? 0 : 1));
  }

  function reminder() {
    Notifications.scheduleNotificationAsync({
      content: {
        title: "Time to Write Diary!",
        body: "Take a moment to reflect in your journal.",
        data: {
          userName: "Minh",
        },
      },
      trigger: {
        hour: hourReminder,
        minute: minuteReminder,
        repeats: true,
      },
    })
      .then(() => console.log("Notification scheduled"))
      .catch((error) => console.error("Error scheduling notification", error));
  }

  return (
    <MyView style={{ flex: 1 }}>
      <MyPressable onPress={() => setIsVisible(true)}>
        <MyAppText style={styles.clockText}>
          {hourReminder.toString().padStart(2, "0")}:
          {minuteReminder.toString().padStart(2, "0")}
        </MyAppText>
      </MyPressable>

      <MyView style={styles.reminderContainer}>
        <MyAppText style={{ fontSize: 18 }}>Daily Reminder</MyAppText>
        <Switch
          onValueChange={onChange}
          value={isReminder == 1 ? true : false}
          trackColor={{ true: colors.primary500 }}
        />
      </MyView>

      <MyAppText style={styles.noteText}>
        Get a daily device notification from our application and tap to open
        directly to your journal.
      </MyAppText>

      <ModalPickTime
        isVisible={isVisible}
        setModalVisible={setIsVisible}
        hourPicker={hourReminder}
        minutePicker={minuteReminder}
      />
    </MyView>
  );
}

export default ReminderScreen;

const styles = StyleSheet.create({
  clockText: {
    fontSize: 30,
    fontFamily: "Poppins-SemiBold",
    textAlign: "center",
    marginVertical: 20,
  },
  reminderContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 16,
  },
  noteText: {
    fontSize: 13,
    fontFamily: "Poppins-Regular",
    marginHorizontal: 16,
    marginTop: 12,
    opacity: 0.6,
  },
});
