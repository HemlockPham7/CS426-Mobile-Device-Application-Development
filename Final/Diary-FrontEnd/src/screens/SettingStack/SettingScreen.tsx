import { StyleSheet, ScrollView } from "react-native";

import MyAppText from "../../components/global/MyAppText";
import MyView from "../../components/global/MyView";
import AccountDetailComponent from "../../components/settingScreen/AccountDetailComponent";
import SettingComponent from "../../components/settingScreen/SettingComponent";
import StartOfTheWeek from "../../components/settingScreen/StartOfTheWeek";
import { nameScreen } from "../../constants/globalVariables";
import RainyComponent from "../../components/settingScreen/RainyComponent";

function SettingScreen({ navigation }: any) {
  return (
    <ScrollView style={styles.settingScreen}>
      <AccountDetailComponent />
      <MyView style={styles.settingContainer}>
        <MyAppText style={styles.titleSetting}>Personal Experience</MyAppText>
        <SettingComponent
          title="Change Colors"
          source={require("../../../assets/icons/colors1.png")}
          navigationName={nameScreen.changeColor}
        />
        <StartOfTheWeek />
        <RainyComponent />

        <SettingComponent
          title="Daily Reminder"
          source={require("../../../assets/icons/bell.png")}
          navigationName={nameScreen.reminderScreen}
          style={{ marginLeft: 2 }}
        />
      </MyView>

      {/* <MyView style={styles.settingContainer}>
        <MyAppText style={styles.titleSetting}>Notification</MyAppText>
        <SettingComponent
          title="Pop-up Notification"
          source={require("../../../assets/icons/Folder.png")}
          navigationName={nameScreen.changeColor}
        />
        <SettingComponent
          title="Sound Setting"
          source={require("../../../assets/icons/Folder.png")}
          navigationName={nameScreen.changeColor}
        />
        <SettingComponent
          title="Switch Language"
          source={require("../../../assets/icons/Folder.png")}
          navigationName={nameScreen.changeColor}
        />
      </MyView>

      <MyView style={styles.settingContainer}>
        <MyAppText style={styles.titleSetting}>Other</MyAppText>
        <SettingComponent
          title="Contact Us"
          source={require("../../../assets/icons/Folder.png")}
          navigationName={nameScreen.changeColor}
        />
        <SettingComponent
          title="Privacy Policy"
          source={require("../../../assets/icons/Folder.png")}
          navigationName={nameScreen.changeColor}
        />
        <SettingComponent
          title="Switch Language"
          source={require("../../../assets/icons/Folder.png")}
          navigationName={nameScreen.changeColor}
        />
      </MyView> */}
    </ScrollView>
  );
}

export default SettingScreen;

const styles = StyleSheet.create({
  settingScreen: {
    paddingHorizontal: 12,
  },
  settingContainer: {
    marginVertical: 8,
    marginBottom: 30,
  },
  titleSetting: {
    fontSize: 18,
    fontFamily: "Poppins-SemiBold",
    marginHorizontal: 12,
    marginBottom: 4,
  },
});
