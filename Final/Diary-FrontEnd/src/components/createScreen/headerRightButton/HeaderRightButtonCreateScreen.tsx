import { StyleSheet } from "react-native";

import MyView from "../../global/MyView";
import NewButton from "./NewButton";
import DoneButton from "./DoneButton";

function HeaderRightButtonCreateScreen() {
  return (
    <MyView style={{ flexDirection: "row" }}>
      <NewButton />
      <DoneButton />
    </MyView>
  );
}

export default HeaderRightButtonCreateScreen;

const styles = StyleSheet.create({});
