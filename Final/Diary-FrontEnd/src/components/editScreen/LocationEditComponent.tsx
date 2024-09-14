import { Alert, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";
import MapView from "react-native-maps";

import MyPressable from "../global/MyPressable";
import Icon from "../global/Icon";
import MyAppText from "../global/MyAppText";
import { nameScreen } from "../..//constants/globalVariables";
import MyView from "../global/MyView";
import { getReadableAddress } from "../../api/location/Map";
import { useAppDispatch, useAppSelector } from "../../redux store/hook";
import { addLocation } from "../../redux store/createDiarySlice";
import { addCurrentLocation } from "../../redux store/temporarySlice";
import { useEffect } from "react";

interface SelectedLocationProps {
  latitude: number;
  longitude: number;
  readableAddress?: string;
}

function LocationEditComponent() {
  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();
  const locations = useAppSelector((state) => state.createDiary.locations);
  const mapStyle = useAppSelector((state) => state.setting.mapStyle);

  async function verifyPermission() {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      Alert.alert("Permission to access location was denied");
      return false;
    }
    return true;
  }

  async function getLocationUser() {
    const permission = await verifyPermission();

    if (permission === false) {
      return;
    }

    let userLocation = await Location.getCurrentPositionAsync({});
    const address = await getReadableAddress(
      userLocation.coords.latitude,
      userLocation.coords.longitude
    );

    dispatch(
      addCurrentLocation({ ...userLocation.coords, readableAddress: address })
    );
    dispatch(
      addLocation({
        latitude: userLocation.coords.latitude,
        longitude: userLocation.coords.longitude,
        readableAddress: address,
        title: "Your current location",
      })
    );
  }

  async function navigateMapScreen() {
    if (locations.length < 1) {
      await getLocationUser();
      navigation.navigate(nameScreen.mapEditScreen);
    } else {
      const permission = await verifyPermission();

      if (permission === false) {
        return;
      }
      let userLocation = await Location.getCurrentPositionAsync({});
      const address = await getReadableAddress(
        userLocation.coords.latitude,
        userLocation.coords.longitude
      );

      dispatch(
        addCurrentLocation({ ...userLocation.coords, readableAddress: address })
      );

      navigation.navigate(nameScreen.mapEditScreen);
    }
  }

  return (
    <>
      <MyPressable
        onPress={navigateMapScreen}
        color="primary200"
        style={styles.container}
      >
        {locations.length == 0 ? (
          <MyView
            style={{
              justifyContent: "center",
              alignItems: "center",
              paddingTop: 2,
            }}
          >
            <Icon
              size={65}
              color="none"
              source={require("../../../assets/gifs/location.gif")}
            />
            <MyAppText style={styles.addPlaceText}>Add places</MyAppText>
          </MyView>
        ) : (
          <MyView style={styles.mapContainer}>
            <MapView
              style={{ width: "100%", height: "100%" }}
              initialRegion={{
                latitude: locations[0].latitude || 37.78825,
                longitude: locations[0].longitude || -122.4324,
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
            ></MapView>

            <MyView color="#668291" style={styles.addressContainer}>
              <MyAppText color="white" style={styles.addressText}>
                {locations[0].readableAddress}
              </MyAppText>
            </MyView>
          </MyView>
        )}
      </MyPressable>
    </>
  );
}

export default LocationEditComponent;

const styles = StyleSheet.create({
  container: {
    height: 140,
    flex: 1,
    borderRadius: 16,
    marginLeft: 8,
    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  addPlaceText: {
    marginBottom: 2,
    paddingTop: 6,
    fontSize: 15,
    fontFamily: "Poppins-SemiBold",
    textAlign: "center",
  },
  mapContainer: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    borderRadius: 16,
    alignItems: "center",
  },
  addressContainer: {
    width: "90%",
    position: "absolute",
    bottom: 7,
    borderRadius: 12,
    paddingVertical: 8,
  },
  addressText: {
    width: "100%",
    textAlign: "center",
    fontSize: 12,
    fontFamily: "Poppins-Regular",
  },
});
