import { Dimensions, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useState } from "react";

import MyView from "../../global/MyView";
import MyAppText from "../../global/MyAppText";
import { useAppSelector } from "../../../redux store/hook";

function MapItemComponent({ location }: any) {
  const mapStyle = useAppSelector((state) => state.setting.mapStyle);
  const currentLocation = useAppSelector(
    (state) => state.temporaryVariable.currentLocation
  );

  function formattedTitle(title: string) {
    if (title.length > 25) {
      return title.slice(0, 25) + "...";
    }
    return title;
  }

  return (
    <MyView color="white" style={styles.container}>
      <MyView style={styles.topContainer}>
        <MyView
          style={{
            flexDirection: "row",
            marginBottom: 6,
            alignItems: "center",
          }}
        >
          <MyAppText style={styles.titleText}>
            {location.title != ""
              ? formattedTitle(location.title)
              : "Your Title"}
          </MyAppText>
        </MyView>

        <MyAppText style={styles.addressText}>
          {location.readableAddress}
        </MyAppText>
      </MyView>

      <MyView style={styles.imageContainer}>
        <MapView
          style={{ width: "100%", height: "100%", borderRadius: 16 }}
          initialRegion={{
            latitude: location.latitude || 10.762574,
            longitude: location.longitude || 106.682359,
            latitudeDelta: 0.00522,
            longitudeDelta: 0.00421,
          }}
          userInterfaceStyle={mapStyle == "dark" ? "dark" : "light"}
          showsUserLocation={true}
          zoomEnabled={false}
          zoomTapEnabled={false}
          zoomControlEnabled={false}
          rotateEnabled={false}
          scrollEnabled={false}
        >
          {currentLocation.readableAddress != location.readableAddress && (
            <Marker
              image={require("../../../../assets/icons/marker.png")}
              coordinate={{
                latitude: location.latitude || 10.762574,
                longitude: location.longitude || 106.682359,
              }}
            />
          )}
        </MapView>
      </MyView>
    </MyView>
  );
}

export default MapItemComponent;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width - 40,
    borderRadius: 16,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "space-between",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },

  topContainer: {
    marginBottom: 12,
    marginTop: 12,
    alignItems: "center",
  },
  titleText: {
    fontFamily: "Poppins-Medium",
    fontSize: 18,
    textAlign: "center",
    marginRight: 6,
  },
  addressText: {
    fontSize: 14,
    textAlign: "center",
  },
  imageContainer: {
    width: "85%",
    height: 190,
    alignItems: "center",
    borderRadius: 16,
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
});
