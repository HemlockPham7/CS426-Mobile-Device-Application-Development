import MyView from "../../global/MyView";
import DashedLine from "react-native-dashed-line";
import { useAppSelector } from "../../../redux store/hook";
import { ColorStorage } from "../../../constants/styles";

function DashLine() {
  const idColor = useAppSelector((state) => state.setting.idColor);
  const colors = ColorStorage.get(idColor)!;

  return (
    <DashedLine
      dashColor={colors.primary500}
      dashLength={10}
      dashThickness={1}
      style={{marginTop:10}}
    />
  );
}

export default DashLine;
