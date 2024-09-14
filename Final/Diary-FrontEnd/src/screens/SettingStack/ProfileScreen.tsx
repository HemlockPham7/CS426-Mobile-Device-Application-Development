import { StyleSheet } from "react-native";

import MyView from "../../components/global/MyView";
import MyAppText from "../../components/global/MyAppText";
import LogoutComponent from "../../components/profileScreen/LogoutComponent";
import InforItem from "../../components/profileScreen/InforItem";
import AvatarPicker from "../../components/profileScreen/AvatarPicker";

import { useAppSelector } from "../../redux store/hook";
import Icon from "../../components/global/Icon";

function ProfileScreen() {
  const email = useAppSelector((state) => state.information.email);
  const uid = useAppSelector((state) => state.information.uid);
  let introduction = useAppSelector((state) => state.information.introduction);
  let name = useAppSelector((state) => state.information.name);

  name = name ? name : "Enter your name";
  introduction = introduction == "" ? "No introduction yet" : introduction;
  
  return (
    <MyView style={styles.screenContainer}>
      <MyView style={{ alignItems: "center" }}>
        <AvatarPicker />

        <MyView isBorder style={styles.informationContainer}>
          <MyView style={styles.emailContainer}>
            <MyAppText style={{ fontSize: 14 }}>Email</MyAppText>
            <MyView style={{ flexDirection: "row", alignItems: "center" }}>
              <MyAppText style={{ fontSize: 14, marginRight: 8 }}>
                {email}
              </MyAppText>
              <Icon
                size={20}
                source={require("../../../assets/icons/Message_Bold.png")}
              ></Icon>
            </MyView>
          </MyView>

          <InforItem title="Name" detailedInfor={name} />
          <InforItem title="Introduction" detailedInfor={introduction} />
        </MyView>
      </MyView>

      <MyView style={{ width: "100%" }}>
        <LogoutComponent
        />
      </MyView>
    </MyView>
  );
}

export default ProfileScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    marginHorizontal: 12,
    marginBottom: 12,
    justifyContent: "space-between",
  },
  informationContainer: {
    borderRadius: 12,
    borderWidth: 1,
    width: "100%",
    paddingLeft: 12,
    paddingVertical: 12,
  },
  emailContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 12,
    marginRight: 4,
  },
});
