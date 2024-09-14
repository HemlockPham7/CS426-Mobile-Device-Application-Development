import { StyleSheet } from "react-native";
import { useEffect, useState } from "react";

import MyView from "../global/MyView";
import MyAppText from "../global/MyAppText";
import { getColorIcon } from "../../constants/imageList";
import { useAppSelector } from "../../redux store/hook";

function ContributionComponent({ selectedYear, month }: any) {
  const diaries = useAppSelector((state) => state.diaries.diaries);
  const maxDays = new Date(selectedYear, month, 0).getDate();
  const array = Array.from({ length: maxDays }, (_, index) => index + 1);
  const [list, setList] = useState(
    Object.fromEntries(array.map((item) => [item, 0]))
  );

  useEffect(() => {
    diaries.map((diary) => {
      if (
        diary.timestamp.toDate().getFullYear() === Number(selectedYear) &&
        diary.timestamp.toDate().getMonth() + 1 === Number(month)
      ) {
        setList((prevList) => {
          return {
            ...prevList,
            [diary.timestamp.toDate().getDate()]: diary.emoji,
          };
        });
      }
    });
  }, []);

  return (
    <MyView color="white"  style={{ marginRight: 8 }}>
      <MyAppText style={styles.header}>{month}</MyAppText>
      {array.map((item) => {
        return (
          <MyView
            key={item}
            color={
              list[item.toString()] == 0
                ? "#e3e3e3"
                : getColorIcon(list[item.toString()])
            }
            style={styles.item}
          ></MyView>
        );
      })}
    </MyView>
  );
}

export default ContributionComponent;

const styles = StyleSheet.create({
  header: {
    textAlign: "center",
    marginBottom: 12,
    fontSize: 13,
    opacity: 0.4,
    fontFamily: "Poppins-SemiBold",
  },
  item: {
    height: 16,
    width: 16,
    borderRadius: 20,
    marginBottom: 9,
  },
});
