import { StyleSheet, FlatList } from "react-native";

import MyAppText from "../global/MyAppText";
import MyPressable from "../global/MyPressable";
import { monthNames } from "../../constants/date";

function MonthsList({ month, monthPressed, onPress }: any) {
  return (
    <FlatList
      data={month}
      renderItem={(item) => {
        return (
          <MyPressable
            onPress={() => onPress(item.item)}
            color={monthPressed != item.item ? "primary200" : "primary500"}
            style={styles.monthItemContainer}
          >
            <MyAppText
              color={monthPressed != item.item ? "primary500" : "white"}
              style={styles.monthText}
            >
              {monthNames.get(item.item)}
            </MyAppText>
          </MyPressable>
        );
      }}
      keyExtractor={(item) => item}
      style={{ width: "100%", marginLeft: 16 }}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
    ></FlatList>
  );
}

export default MonthsList;

const styles = StyleSheet.create({
  monthItemContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: 100,
    borderRadius: 16,
    marginRight: 12,
    marginBottom: 8,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    
    elevation: 3,
  },
  monthText: {
    fontSize: 13,
    fontFamily: "Poppins-Bold",
  },
});
