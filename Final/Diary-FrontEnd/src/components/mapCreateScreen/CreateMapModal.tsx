import { Alert, Dimensions, StyleSheet, View, Image } from "react-native";
import Modal from "react-native-modal";
import MapView from "react-native-maps";
import { useRef, useState } from "react";

import MyView from "../global/MyView";
import { getReadableAddress } from "../../api/location/Map";
import { useAppSelector, useAppDispatch } from "../../redux store/hook";
import { addLocation } from "../../redux store/createDiarySlice";
import DisplayPickLocation from "./DisplayPickLocation";
import SearchPlacesComponent from "./SearchPlacesComponent";

interface SelectedLocationProps {
  latitude: number;
  longitude: number;
  readableAddress?: string;
  title: string;
}

function CreateMapModal({ isVisible, setModalVisible }: any) {
  const dispatch = useAppDispatch();
  const currentLocation = useAppSelector(
    (state) => state.temporaryVariable.currentLocation
  );
  const mapStyle = useAppSelector((state) => state.setting.mapStyle);
  const [pickedLocation, setPickedLocationHandler] =
    useState<SelectedLocationProps>();
  const mapRef = useRef<MapView>(null);

  const initialRegion = {
    latitude: currentLocation.latitude,
    longitude: currentLocation.longitude,
    latitudeDelta: 0.00522,
    longitudeDelta: 0.00421,
  };

  function savePickedLocationHandler() {
    if (!pickedLocation) {
      Alert.alert(
        "You haven't picked a location",
        "Please pick or search your location"
      );
      return;
    }

    dispatch(addLocation(pickedLocation));
    setModalVisible(false);
  }

  function setTitle(title: string) {
    if (pickedLocation) {
      setPickedLocationHandler({
        ...pickedLocation,
        title: title,
      });
    }
  }

  async function onRegionChange(latitude: number, longitude: number) {
    const address = await getReadableAddress(latitude, longitude);
    if (address == "") {
      Alert.alert("Could not find address", "Please pick another location");
      return;
    }

    setPickedLocationHandler({
      latitude: latitude,
      longitude: longitude,
      readableAddress: address,
      title: pickedLocation ? pickedLocation.title : "",
    });
  }

  async function searchHandler(
    latitude: number,
    longitude: number,
    title: string
  ) {
    const address = await getReadableAddress(latitude, longitude);
    if (address == "") {
      Alert.alert("Could not find address", "Please pick another location");
      return;
    }

    setPickedLocationHandler({
      latitude: latitude,
      longitude: longitude,
      readableAddress: address,
      title: title,
    });

    if (mapRef.current) {
      mapRef.current.animateToRegion({
        latitude,
        longitude,
        latitudeDelta: 0.00522,
        longitudeDelta: 0.00421,
      });
    }
  }

  return (
    <Modal
      isVisible={isVisible}
      animationIn={"fadeInUp"}
      animationOut={"fadeOutUp"}
      onModalWillShow={() =>
        setPickedLocationHandler({ ...currentLocation, title: "" })
      }
      style={{ margin: 0 }}
    >
      <MyView color="background" style={styles.container}>
        <SearchPlacesComponent
          setModalVisible={setModalVisible}
          searchHandler={searchHandler}
        />

        <MyView style={styles.mapContainer}>
          <MapView
            style={{ width: "100%", height: "100%" }}
            initialRegion={initialRegion}
            userInterfaceStyle={mapStyle == "dark" ? "dark" : "light"}
            showsUserLocation={true}
            rotateEnabled={false}
            onRegionChangeComplete={(region) =>
              onRegionChange(region.latitude, region.longitude)
            }
            ref={mapRef}
          ></MapView>

          <View style={styles.markerFixed}>
            <Image
              style={styles.marker}
              source={require("../../../assets/icons/icon-marker.png")}
            />
          </View>

          {pickedLocation && (
            <DisplayPickLocation
              title={pickedLocation.title}
              readableAddress={pickedLocation.readableAddress}
              setTitle={setTitle}
              saveLocation={savePickedLocationHandler}
            />
          )}
        </MyView>
      </MyView>
    </Modal>
  );
}

export default CreateMapModal;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
  mapContainer: {
    flex: 1,
    alignItems: "center",
  },
  markerFixed: {
    left: "50%",
    marginLeft: -24,
    marginTop: -48,
    position: "absolute",
    top: "50%",
  },
  marker: {
    height: 48,
    width: 48,
  },
});
