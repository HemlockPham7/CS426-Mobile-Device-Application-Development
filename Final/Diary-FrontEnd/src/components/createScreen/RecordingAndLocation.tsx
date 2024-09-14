import { StyleSheet } from "react-native";

import MyView from "../global/MyView";
import RecordingComponent from "./recording/RecordingComponent";
import LocationComponent from "./location-googleMap/LocationComponent";
import LocationEditComponent from "../editScreen/LocationEditComponent";

function RecordingAndLocation({ edit }: any) {
  return (
    <MyView style={styles.container}>
      <RecordingComponent />
      {edit ? <LocationEditComponent /> : <LocationComponent />}
    </MyView>
  );
}

export default RecordingAndLocation;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
    marginTop: 4,
  },
});
