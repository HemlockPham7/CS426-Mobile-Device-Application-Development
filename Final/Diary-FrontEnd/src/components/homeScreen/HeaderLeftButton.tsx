import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Icon from "../global/Icon";
import MyPressable from "../global/MyPressable";
import { nameScreen } from "../../constants/globalVariables";

function HeaderLeftButton() {
  const navigation = useNavigation<any>();

  function navigateSearchScreen() {
    navigation.navigate(nameScreen.search);
  }

  return (
    <MyPressable style={styles.container} onPress={navigateSearchScreen}>
      <Icon
   
        size={35}
        source={require("../../../assets/icons/friends.png")}
      />
    </MyPressable>
  );
}

export default HeaderLeftButton;

const styles = StyleSheet.create({
  container: {
    paddingRight: 20,
    paddingLeft:4,
    justifyContent: "center",
    alignItems: "center",
  },
});
