import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Fields from "../components/Fields";
import TypePrimaryLabelLabelSta from "../components/TypePrimaryLabelLabelSta";
import Facility from "../components/Facility";
import Tabbar1 from "../components/Tabbar1";
import { FontSize, FontFamily, Color, Padding } from "../../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const TransportBooking = () => {
  const navigation = useNavigation<any>();

  function navigateBookingScreen() {
    navigation.navigate("Booking");
  }

  function navigateTransportFlightsScreen() {
    navigation.navigate("TransportFlights");
  }

  return (
    <View style={styles.transportBooking}>
      <TouchableOpacity style={styles.typearrow} onPress={navigateBookingScreen}>
        <Image
          style={styles.chevronIcon}
          contentFit="cover"
          source={require("../../assets/chevron.png")}
        />
        <Text style={styles.title}>Transport Booking</Text>
      </TouchableOpacity>
      
      <View style={styles.content}>
        <Fields />
        
        <View style={styles.passengerLuggage}>
          <Text style={styles.passengerLuggage1}>{`Passenger & Luggage`}</Text>

          <View style={styles.transportSpaceBlock}>
            <View>
              <View style={styles.icon}>
                <Image
                  style={[styles.component2Icon, styles.component2IconLayout]}
                  contentFit="cover"
                  source={require("../../assets/component-2.png")}
                />
                <Text style={styles.text}>1</Text>
              </View>
              <View style={[styles.line, styles.lineLayout]} />
            </View>

            <View style={styles.passenger1}>
              <Image
                style={styles.component2IconLayout}
                contentFit="cover"
                source={require("../../assets/component-21.png")}
              />
              <View style={[styles.line1, styles.lineLayout]} />
            </View>

            <View style={styles.passenger1}>
              <Image
                style={styles.component2IconLayout}
                contentFit="cover"
                source={require("../../assets/component-22.png")}
              />
              <View style={[styles.line1, styles.lineLayout]} />
            </View>

            <View style={styles.passenger1}>
              <Image
                style={[styles.component2Icon, styles.component2IconLayout]}
                contentFit="cover"
                source={require("../../assets/component-23.png")}
              />
              <View style={[styles.line1, styles.lineLayout]} />
            </View>
          </View>
        </View>

        <View style={styles.passengerLuggage}>
          <Text style={styles.passengerLuggage1}>Class</Text>
          <View style={[styles.transport, styles.transportSpaceBlock]}>
            <TypePrimaryLabelLabelSta
              buttonText="Economy"
              typePrimaryLabelLabelStaPosition="unset"
              typePrimaryLabelLabelStaTop="unset"
              typePrimaryLabelLabelStaLeft="unset"
              typePrimaryLabelLabelStaWidth={98}
              typePrimaryLabelLabelStaAlignSelf="stretch"
              typePrimaryLabelLabelStaBackgroundColor="#fff"
              typePrimaryLabelLabelStaMarginTop="unset"
              typePrimaryLabelLabelStaBorderRadius={12}
              typePrimaryLabelLabelStaPaddingHorizontal="unset"
              typePrimaryLabelLabelStaPaddingVertical="unset"
              typePrimaryLabelLabelStaMarginLeft="unset"
              typePrimaryLabelLabelStaTextColor="#089083"
            />
            <TypePrimaryLabelLabelSta
              buttonText="Business"
              typePrimaryLabelLabelStaPosition="unset"
              typePrimaryLabelLabelStaTop="unset"
              typePrimaryLabelLabelStaLeft="unset"
              typePrimaryLabelLabelStaWidth={98}
              typePrimaryLabelLabelStaAlignSelf="stretch"
              typePrimaryLabelLabelStaBackgroundColor="#089083"
              typePrimaryLabelLabelStaMarginTop="unset"
              typePrimaryLabelLabelStaBorderRadius={12}
              typePrimaryLabelLabelStaPaddingHorizontal="unset"
              typePrimaryLabelLabelStaPaddingVertical="unset"
              typePrimaryLabelLabelStaMarginLeft={8}
              typePrimaryLabelLabelStaTextColor="#fff"
            />
          </View>
        </View>
        <Facility facility />
        <TypePrimaryLabelLabelSta
          buttonText="Search"
          typePrimaryLabelLabelStaPosition="unset"
          typePrimaryLabelLabelStaTop="unset"
          typePrimaryLabelLabelStaLeft="unset"
          typePrimaryLabelLabelStaWidth="unset"
          typePrimaryLabelLabelStaAlignSelf="stretch"
          typePrimaryLabelLabelStaBackgroundColor="#fea36b"
          typePrimaryLabelLabelStaMarginTop={32}
          typePrimaryLabelLabelStaBorderRadius={20}
          typePrimaryLabelLabelStaPaddingHorizontal="unset"
          typePrimaryLabelLabelStaPaddingVertical="unset"
          typePrimaryLabelLabelStaMarginLeft="unset"
          typePrimaryLabelLabelStaTextColor="#fff"
          onPress={navigateTransportFlightsScreen}
        />
      </View>
      <Tabbar1 />
    </View>
  );
};

const styles = StyleSheet.create({
  component2IconLayout: {
    height: 24,
    width: 24,
  },
  lineLayout: {
    marginTop: 4,
    height: 1,
    width: 57,
    borderTopWidth: 1,
    borderStyle: "solid",
  },
  transportSpaceBlock: {
    marginTop: 8,
    flexDirection: "row",
  },
  passengerLuggage1: {
    fontSize: FontSize.bodyLSemiBold_size,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: FontFamily.headingH4,
    color: Color.lightTextSecondary,
    textAlign: "left",
  },
  component2Icon: {
    overflow: "hidden",
  },
  text: {
    fontSize: FontSize.bodyXLRegular_size,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: FontFamily.bodySMedium,
    color: Color.green700,
    marginLeft: 4,
    width: 24,
    textAlign: "center",
  },
  icon: {
    width: 56,
    alignItems: "center",
    flexDirection: "row",
  },
  line: {
    borderColor: Color.green700,
  },
  line1: {
    borderColor: Color.lightTextSecondary,
  },
  passenger1: {
    marginLeft: 24,
  },
  passengerLuggage: {
    marginTop: 32,
  },
  transport: {
    width: 343,
  },
  content: {
    position: "absolute",
    top: 114,
    left: 0,
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
  },
  transportBooking: {
    backgroundColor: Color.lightBackgroundScreen,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
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
    top: 62,
    left: 0,
    position: "absolute",
  },
});

export default TransportBooking;
