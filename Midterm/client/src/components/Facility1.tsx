import * as React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import TypePrimaryLabelIconStat from "./TypePrimaryLabelIconStat";
import { Color, FontFamily, FontSize } from "../../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const Facility1 = () => {
  const navigation = useNavigation<any>();

  function navigateTransportBookingScreen() {
    navigation.navigate("TransportBooking");
  }
  
  return (
    <View>
      <Text style={[styles.bookingServices, styles.tripsTypo]}>
        Booking Services
      </Text>
      <View style={styles.facility1}>
        <TouchableOpacity style={styles.service}>
          <TypePrimaryLabelIconStat
            chevron={require("../../assets/category-icon.png")}
            typePrimaryLabelIconStatPosition="unset"
            typePrimaryLabelIconStatBackgroundColor="#01635d"
            typePrimaryLabelIconStatBorderRadius={20}
            typePrimaryLabelIconStatWidth={60}
            typePrimaryLabelIconStatHeight={60}
            typePrimaryLabelIconStatPadding={14}
            typePrimaryLabelIconStatMarginLeft="unset"
          />
          <Text style={[styles.trips, styles.tripsTypo]}>Trips</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.service}>
          <TypePrimaryLabelIconStat
            chevron={require("../../assets/category-icon1.png")}
            typePrimaryLabelIconStatPosition="unset"
            typePrimaryLabelIconStatBackgroundColor="#01635d"
            typePrimaryLabelIconStatBorderRadius={20}
            typePrimaryLabelIconStatWidth={60}
            typePrimaryLabelIconStatHeight={60}
            typePrimaryLabelIconStatPadding={14}
            typePrimaryLabelIconStatMarginLeft="unset"
          />
          <Text style={[styles.trips, styles.tripsTypo]}>Hotel</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.service} onPress={navigateTransportBookingScreen}>
          <TypePrimaryLabelIconStat
            chevron={require("../../assets/category-icon2.png")}
            typePrimaryLabelIconStatPosition="unset"
            typePrimaryLabelIconStatBackgroundColor="#01635d"
            typePrimaryLabelIconStatBorderRadius={20}
            typePrimaryLabelIconStatWidth={60}
            typePrimaryLabelIconStatHeight={60}
            typePrimaryLabelIconStatPadding={14}
            typePrimaryLabelIconStatMarginLeft="unset"
          />
          <Text style={[styles.trips, styles.tripsTypo]}>Transport</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.service}>
          <TypePrimaryLabelIconStat
            chevron={require("../../assets/category-icon3.png")}
            typePrimaryLabelIconStatPosition="unset"
            typePrimaryLabelIconStatBackgroundColor="#01635d"
            typePrimaryLabelIconStatBorderRadius={20}
            typePrimaryLabelIconStatWidth={60}
            typePrimaryLabelIconStatHeight={60}
            typePrimaryLabelIconStatPadding={14}
            typePrimaryLabelIconStatMarginLeft="unset"
          />
          <Text style={[styles.trips, styles.tripsTypo]}>Events</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tripsTypo: {
    textAlign: "left",
    color: Color.lightUIElementContrast,
    fontFamily: FontFamily.bodyMRegular,
  },
  bookingServices: {
    fontSize: FontSize.bodyXLRegular_size,
    lineHeight: 22,
  },
  trips: {
    fontSize: FontSize.bodyMRegular_size,
    lineHeight: 18,
    marginTop: 4,
  },
  service: {
    alignItems: "center",
  },
  facility1: {
    width: 343,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },
});

export default Facility1;
