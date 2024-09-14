import { StyleSheet } from "react-native";

import MyView from "../global/MyView";
import DateComponent from "./DateComponent";
import AIComponent from "./aiComponent/AiComponent";
import UploadImageComponent from "./uploadImage/UploadImageComponent";
import CameraComponent from "./uploadImage/CameraComponent";

function TopComponent() {
  return (
    <MyView style={styles.container}>
      <MyView
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          paddingHorizontal: 30,
     
        }}
      >
        <AIComponent />
        <CameraComponent />
        <UploadImageComponent />

      </MyView>
      <DateComponent />
    </MyView>
  );
}

export default TopComponent;

const styles = StyleSheet.create({
  container: {
  },
});
