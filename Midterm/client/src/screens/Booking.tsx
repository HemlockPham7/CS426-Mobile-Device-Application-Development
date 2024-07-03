import * as React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Image } from "expo-image";
import Card1 from "../components/Card1";
import Tabbar1 from "../components/Tabbar1";
import TypeLabel from "../components/TypeLabel";
import { Padding, Color } from "../../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const Booking = () => {
  const navigation = useNavigation<any>();

  function navigateTransportBookingScreen() {
    navigation.navigate("TransportBooking");
  }

  return (
    <View style={styles.booking}>
      <ScrollView style={styles.cards}>
        <Card1
          bookingIllustration={require("../../assets/booking-illustration1.png")}
          name1="Hotel"
        />
        <Card1
          bookingIllustration={require("../../assets/booking-illustration2.png")}
          name1="Transport"
          dividerMarginTop={16}
          onPress={navigateTransportBookingScreen}
        />
        <Card1
          bookingIllustration={require("../../assets/booking-illustration3.png")}
          name1="Trips"
          dividerMarginTop={16}
        />
        <Card1
          bookingIllustration={require("../../assets/booking-illustration4.png")}
          name1="Events"
          dividerMarginTop={16}
        />
      </ScrollView>

      <Tabbar1 propTop={722} />
      <TypeLabel
        title="Booking"
        typeLabelPosition="absolute"
        typeLabelTop={52}
        typeLabelLeft={0}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cards: {
    position: "absolute",
    top: 110,
    left: 0,
    height: 616,
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
  },
  booking: {
    backgroundColor: Color.lightBackgroundScreen,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Booking;
