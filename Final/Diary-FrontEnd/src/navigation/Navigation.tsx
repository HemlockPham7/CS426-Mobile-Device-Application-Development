import { NavigationContainer } from "@react-navigation/native";
import { useEffect, useState, useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../api/firebaseConfig/firebase";
import * as SecureStore from "expo-secure-store";

import AuthenticatedStack from "./AuthenticatedStack";
import AuthStack from "./AuthStack";
import { useAppDispatch, useAppSelector } from "../redux store/hook";
import { clearInformation, updateUid } from "../redux store/informationSlice";
import {
  changeColor,
  changeFirstDayCalendar,
  changeHourReminder,
  changeIsRainy,
  changeIsReminder,
  changeMinuteReminder,
  initMapStyle,
} from "../redux store/settingSlice";
import LoadingLayoutNavigation from "../components/login+register/LoadingLayoutNavigation";

SplashScreen.preventAutoHideAsync();
let fetchOneTime = false;

function Navigation() {
  const uid = useAppSelector((state) => state.information.uid);
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(true);

  const [fontsLoaded, fontError] = useFonts({
    // "Poppins-Black": require("../../fonts/poppins/Poppins-Black.ttf"),
    // "Poppins-Bold": require("../../fonts/poppins/Poppins-Bold.ttf"),
    // "Poppins-Light": require("../../fonts/poppins/Poppins-Light.ttf"),
    // "Poppins-Regular": require("../../fonts/poppins/Poppins-Regular.ttf"),
    // "Poppins-SemiBold": require("../../fonts/poppins/Poppins-SemiBold.ttf"),
    // "Poppins-Italic": require("../../fonts/poppins/Poppins-Italic.ttf"),
    // "Poppins-Medium": require("../../fonts/poppins/Poppins-Medium.ttf"),

    "Poppins-Black": require("../../fonts/quicksand/Quicksand-Bold.ttf"),
    "Poppins-Bold": require("../../fonts/quicksand/Quicksand-Bold.ttf"),
    "Poppins-Light": require("../../fonts/quicksand/Quicksand-Regular.ttf"),
    "Poppins-Regular": require("../../fonts/quicksand/Quicksand-Medium.ttf"),
    "Poppins-SemiBold": require("../../fonts/quicksand/Quicksand-SemiBold.ttf"),
    "Poppins-Medium": require("../../fonts/quicksand/Quicksand-Medium.ttf"),
  });
  useEffect(() => {
    async function loadFont() {
      if (fontsLoaded || fontError) {
        await SplashScreen.hideAsync();
      }
    }
    loadFont();
  }, [fontsLoaded, fontError]);

  async function getLocalStorage() {
    let colorId = await SecureStore.getItemAsync("color");
    if (colorId) {
      dispatch(changeColor({ id: parseInt(colorId) }));
    }

    let firstDayCalendar = await SecureStore.getItemAsync("firstDayCalendar");
    if (firstDayCalendar) {
      dispatch(changeFirstDayCalendar({ id: parseInt(firstDayCalendar) }));
    }

    let isRainy = await SecureStore.getItemAsync("isRainy");
    if (isRainy) {
      dispatch(changeIsRainy({ isRainy: parseInt(isRainy) }));
    }

    let mapStyle = await SecureStore.getItemAsync("mapStyle");
    if (mapStyle) {
      dispatch(initMapStyle(mapStyle));
    }

    let hourReminder = await SecureStore.getItemAsync("hourReminder");
    let minuteReminder = await SecureStore.getItemAsync("minuteReminder");
    let isReminder = await SecureStore.getItemAsync("isReminder");
    if (hourReminder && minuteReminder && isReminder) {
      dispatch(changeHourReminder(parseInt(hourReminder)));
      dispatch(changeMinuteReminder(parseInt(minuteReminder)));
      dispatch(changeIsReminder(parseInt(isReminder)));
    }
  }

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      setIsLoading(true);
      if (user) {
        dispatch(updateUid({ uid: user.uid }));
        await getLocalStorage();
        setIsLoading(false);
      } else {
        setIsLoading(false);
        dispatch(clearInformation());
        console.log("No user yet");
        fetchOneTime = false;
      }
    });
  }, [uid]);

  if (!fontsLoaded && !fontError) return null;
  if (isLoading && uid == "") return <LoadingLayoutNavigation />;

  return (
    <NavigationContainer>
      {uid == "" ? <AuthStack /> : <AuthenticatedStack />}
    </NavigationContainer>
  );
}

export default Navigation;
