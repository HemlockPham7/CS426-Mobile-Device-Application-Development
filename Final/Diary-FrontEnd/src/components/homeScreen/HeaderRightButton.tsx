import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Icon from "../global/Icon";
import MyPressable from "../global/MyPressable";
import { nameScreen } from "../../constants/globalVariables";
import MyView from "../global/MyView";

function HeaderRightButton() {
  const navigation = useNavigation<any>();

  function navigateSearchScreen() {
    navigation.navigate(nameScreen.search);
  }
  function navigateSharedDiary() {
    navigation.navigate(nameScreen.sharedDiary);
  }

  return (
    <MyView style={{ flexDirection: "row" }}>
      <MyPressable
        style={styles.containerFriend}
        onPress={navigateSharedDiary}
      >
        <Icon size={35} source={require("../../../assets/icons/friends.png")} />
      </MyPressable>
      <MyPressable
        style={styles.container}
        color="primary200"
        onPress={navigateSearchScreen}
      >
        <Icon
          color="black"
          size={20}
          source={require("../../../assets/icons/search1.png")}
        />
      </MyPressable>
    </MyView>
  );
}

export default HeaderRightButton;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginBottom: 4,
  },
  containerFriend: {
    paddingRight: 16,
    paddingLeft: 4,
    justifyContent: "center",
    alignItems: "center",
  },
});
