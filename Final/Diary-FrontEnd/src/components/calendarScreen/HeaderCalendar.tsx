import { StyleSheet } from "react-native";

import { monthNamesV2 } from "../../constants/date";
import MyAppText from "../global/MyAppText";
import MyPressable from "../global/MyPressable";
import Icon from "../global/Icon";

function HeaderCalendar({ date, onPress }: any) {
  return (
    <MyPressable onPress={onPress} style={styles.headerStyle}>
      <MyAppText style={{ fontSize: 16, fontFamily: "Poppins-SemiBold" }}>
        {monthNamesV2.get(date.toString("MM"))} {date.toString("yyyy")}
      </MyAppText>
      <Icon
        color="black"
        size={20}
        source={require("../../../assets/icons/Arrow_Down.png")}
      ></Icon>
    </MyPressable>
  );
}

export default HeaderCalendar;

const styles = StyleSheet.create({
  headerStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
