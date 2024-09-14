import { StyleSheet, FlatList } from "react-native";
import { useEffect, useState } from "react";

import MyAppText from "../global/MyAppText";
import MyPressable from "../global/MyPressable";
import { useAppSelector } from "../../redux store/hook";

function YearsList({ year, yearPressed, onPress, numberMemories }: any) {
  const diaries = useAppSelector((state) => state.diaries.diaries);
  const [numberDiaries, setNumberDiaries] = useState<any>({
    2024: 0,
    2023: 0,
    2022: 0,
    2021: 0,
    2020: 0,
  });

  useEffect(() => {
    let tmp: any = { 2024: 0, 2023: 0, 2022: 0, 2021: 0, 2020: 0 };
    diaries.map((diary) => {
      tmp[diary.timestamp.toDate().getFullYear()] += 1;
    });
    setNumberDiaries(tmp);
  }, [diaries]);

  return (
    <FlatList
      data={year}
      renderItem={(item) => {
        return (
          <MyPressable
            onPress={() => onPress(item.item)}
            color={yearPressed != item.item ? "primary200" : "primary500"}
            style={styles.yearItemContainer}
          >
            <MyAppText
              color={yearPressed != item.item ? "primary500" : "white"}
              style={styles.yearText}
            >
              {item.item}
            </MyAppText>

            <MyAppText
              color={yearPressed != item.item ? "primary500" : "white"}
              style={styles.memoriesText}
            >
              {numberDiaries[item.item]} memories
            </MyAppText>
          </MyPressable>
        );
      }}
      keyExtractor={(item) => item.toString()}
      style={{ width: "100%", marginLeft: 16 }}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
    ></FlatList>
  );
}

export default YearsList;

const styles = StyleSheet.create({
  yearItemContainer: {
    height: 70,
    width: 150,
    borderRadius: 16,
    marginRight: 16,
    justifyContent: "center",
    paddingLeft: 20,
    marginBottom: 16,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    
    elevation: 3,
  },
  yearText: {
    fontSize: 22,
    fontFamily: "Poppins-Bold",
  },
  memoriesText: {
    fontSize: 12,
    marginTop: -4,
  },
});
