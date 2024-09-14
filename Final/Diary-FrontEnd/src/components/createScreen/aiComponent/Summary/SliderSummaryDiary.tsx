import { StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";

import MyView from "../../../global/MyView";
import MyAppText from "../../../global/MyAppText";
import { useAppSelector } from "../../../../redux store/hook";
import { ColorStorage } from "../../../../constants/styles";

function SliderSummaryDiary({ value, setValue }: any) {
  const colorId = useAppSelector((state) => state.setting.idColor);
  const colors = ColorStorage.get(colorId);

  return (
    <MyView>
      <MyAppText style={{fontFamily: "Poppins-SemiBold",  marginBottom:4}}>Length</MyAppText>
      <Slider
        value={value}
        onValueChange={(value) => setValue(value)}
        style={{ width: 330 }}
        minimumValue={0}
        maximumValue={2}
        minimumTrackTintColor= {colors?.primary500}
        maximumTrackTintColor="#000000"
        step={1}
      />
      <MyView style={styles.textContainer}>
        <MyAppText style={styles.text}>Short</MyAppText>
        <MyAppText style={styles.text}>Medium</MyAppText>
        <MyAppText style={styles.text}>Long</MyAppText>
      </MyView>
    </MyView>
  );
}

export default SliderSummaryDiary;

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    // fontFamily: "Poppins-Medium",
  },
});
