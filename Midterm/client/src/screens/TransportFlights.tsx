import * as React from "react";
import { Text, StyleSheet, View, TouchableOpacity, ScrollView } from "react-native";
import { Image } from "expo-image";
import Card from "../components/Card";
import { Padding, FontSize, Color, FontFamily, Border } from "../../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const TransportFlights = () => {
  const navigation = useNavigation<any>();

  function navigateTransportBookingScreen() {
    navigation.navigate("TransportBooking");
  }

  function navigateTransportFiltersScreen() {
    navigation.navigate("TransportFilters");
  }

  return (
    <View style={styles.transportFlights}>
      <View style={styles.content}>
        <View style={[styles.date, styles.dateSpaceBlock]}>
          <View style={styles.active}>
            <Text style={styles.th}>TH</Text>
            <Text style={[styles.text, styles.textTypo]}>02</Text>
          </View>
          <View style={[styles.date1, styles.date1FlexBox]}>
            <View style={styles.date2}>
              <Text style={styles.th}>FR</Text>
              <Text style={[styles.text, styles.textTypo]}>03</Text>
            </View>
            <View style={styles.date2}>
              <Text style={styles.th}>SA</Text>
              <Text style={[styles.text, styles.textTypo]}>04</Text>
            </View>
            <View style={styles.date2}>
              <Text style={styles.th}>SU</Text>
              <Text style={[styles.text, styles.textTypo]}>05</Text>
            </View>
            <View style={styles.date2}>
              <Text style={styles.th}>MO</Text>
              <Text style={[styles.text, styles.textTypo]}>06</Text>
            </View>
            <View style={styles.date2}>
              <Text style={styles.th}>TU</Text>
              <Text style={[styles.text, styles.textTypo]}>07</Text>
            </View>
            <View style={styles.date2}>
              <Text style={styles.th}>WE</Text>
              <Text style={[styles.text, styles.textTypo]}>08</Text>
            </View>
          </View>
        </View>

        <View style={[styles.filter, styles.date1FlexBox]}>
          <Text style={[styles.flightsAvaliableNew, styles.textTypo]}>
            7 flights avaliable New York to London
          </Text>
          <TouchableOpacity style={styles.button} onPress={navigateTransportFiltersScreen}>
            <Image
              style={styles.systemIcon}
              contentFit="cover"
              source={require("../../assets/system1.png")}
            />
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.flights}>
          <Card />
          <Card propMarginTop={16} />
          <Card propMarginTop={16} />
          <Card propMarginTop={16} />
          <Card propMarginTop={16} />
          <Card propMarginTop={16} />
          <Card propMarginTop={16} />
        </ScrollView>
      </View>
      <TouchableOpacity style={styles.typearrow} onPress={navigateTransportBookingScreen}>
        <Image
          style={styles.chevronIcon}
          contentFit="cover"
          source={require("../../assets/chevron.png")}
        />
        <Text style={styles.title}>Flights</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  dateSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
  },
  textTypo: {
    lineHeight: 20,
    fontSize: FontSize.bodyLSemiBold_size,
    textAlign: "center",
    color: Color.lightUIElementContrast,
  },
  date1FlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  th: {
    fontSize: FontSize.bodyMRegular_size,
    lineHeight: 18,
    textAlign: "center",
    color: Color.lightUIElementContrast,
    fontFamily: FontFamily.bodyMRegular,
  },
  text: {
    fontWeight: "600",
    fontFamily: FontFamily.headingH4,
    marginTop: 2,
  },
  active: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.peach50,
    padding: Padding.p_5xs,
  },
  date2: {
    alignItems: "center",
  },
  date1: {
    marginLeft: 23,
    flex: 1,
  },
  date: {
    width: 375,
    flexDirection: "row",
  },
  flightsAvaliableNew: {
    fontFamily: FontFamily.bodyMRegular,
    lineHeight: 20,
    fontSize: FontSize.bodyLSemiBold_size,
  },
  systemIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  button: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.peach300,
    width: 40,
    height: 40,
    justifyContent: "center",
    padding: Padding.p_sm,
    flexDirection: "row",
    alignItems: "center",
  },
  filter: {
    alignSelf: "stretch",
    marginTop: 16,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
  },
  flights: {
    marginTop: 16,
    height: 550,
  },
  content: {
    position: "absolute",
    top: 102,
    left: 0,
    alignItems: "center",
  },
  transportFlights: {
    backgroundColor: Color.lightBackgroundScreen,
    width: "100%",
    height: 812,
    overflow: "hidden",
    flex: 1,
  },
  title: {
    flex: 1,
    fontSize: FontSize.headingH4_size,
    lineHeight: 26,
    fontWeight: "600",
    fontFamily: FontFamily.headingH4,
    color: Color.lightUIElementContrast,
    textAlign: "center",
  },
  chevronIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  typearrow: {
    width: 375,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: Padding.p_base,
    paddingTop: Padding.p_5xs,
    paddingRight: Padding.p_21xl,
    top: 44,
    left: 0,
    position: "absolute",
  },
});

export default TransportFlights;
