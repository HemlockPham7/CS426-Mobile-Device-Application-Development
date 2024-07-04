import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import Seats from "../components/Seats";
import TypePrimaryLabelLabelSta from "../components/TypePrimaryLabelLabelSta";
import { Padding, FontFamily, Color, Border, FontSize } from "../../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const TransportSelectSeats = () => {
  const navigation = useNavigation<any>();

  function navigateTransportFlightsScreen() {
    navigation.navigate("TransportFlights");
  }

  function navigateTransportBoardingPassScreen() {
    navigation.navigate("TransportBoardingPass");
  }

  return (
    <View style={styles.transportSelectSeats}>
      <View style={styles.content}>
        <View style={[styles.traveller, styles.statusSpaceBlock]}>
          <Text style={styles.traveller1}>Traveller</Text>
          <View style={styles.exe}>
            <View style={styles.active}>
              <Text style={[styles.text, styles.textTypo]}>1</Text>
            </View>
            <View style={[styles.date, styles.dateFlexBox]}>
              <View style={styles.date1}>
                <Text style={[styles.text, styles.textTypo]}>2</Text>
              </View>
              <View style={styles.date1}>
                <Text style={[styles.text, styles.textTypo]}>3</Text>
              </View>
              <View style={styles.date1}>
                <Text style={[styles.text, styles.textTypo]}>4</Text>
              </View>
              <View style={styles.date1}>
                <Text style={[styles.text, styles.textTypo]}>5</Text>
              </View>
              <View style={styles.date1}>
                <Text style={[styles.text, styles.textTypo]}>6</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.status, styles.statusSpaceBlock]}>
          <View style={styles.ticket}>
            <View style={[styles.vector, styles.vectorLayout]} />
            <Text style={[styles.selected, styles.selectedTypo]}>Selected</Text>
          </View>
          <View style={styles.ticket1}>
            <View style={[styles.vector1, styles.vectorLayout]} />
            <Text style={[styles.selected, styles.selectedTypo]}>Booked</Text>
          </View>
          <View style={styles.ticket1}>
            <View style={[styles.vector2, styles.vectorLayout]} />
            <Text style={[styles.selected, styles.selectedTypo]}>
              Avaliable
            </Text>
          </View>
        </View>
        <Seats />
      </View>

      <View style={styles.action}>
        <View style={styles.info}>
          <View style={[styles.seats, styles.dateFlexBox]}>
            <Text style={[styles.yourSeats, styles.selectedTypo]}>
              Your seats
            </Text>
            <Text style={[styles.traveller11, styles.selectedTypo]}>
              Traveller 1 / Seat 2A
            </Text>
          </View>
          <View style={[styles.price, styles.dateFlexBox]}>
            <Text style={[styles.yourSeats, styles.selectedTypo]}>
              Total price
            </Text>
            <Text style={[styles.traveller11, styles.selectedTypo]}>
              $50.00
            </Text>
          </View>
        </View>
        <TypePrimaryLabelLabelSta
          buttonText="Continue"
          typePrimaryLabelLabelStaPosition="unset"
          typePrimaryLabelLabelStaTop="unset"
          typePrimaryLabelLabelStaLeft="unset"
          typePrimaryLabelLabelStaWidth={343}
          typePrimaryLabelLabelStaAlignSelf="unset"
          typePrimaryLabelLabelStaBackgroundColor="#fea36b"
          typePrimaryLabelLabelStaMarginTop={24}
          typePrimaryLabelLabelStaBorderRadius={20}
          typePrimaryLabelLabelStaPaddingHorizontal="unset"
          typePrimaryLabelLabelStaPaddingVertical="unset"
          typePrimaryLabelLabelStaMarginLeft="unset"
          typePrimaryLabelLabelStaTextColor="#fff"
          onPress={navigateTransportBoardingPassScreen}
        />
      </View>

      <TouchableOpacity style={styles.typearrow} onPress={navigateTransportFlightsScreen}>
        <Image
          style={styles.chevronIcon}
          contentFit="cover"
          source={require("../../assets/chevron.png")}
        />
        <Text style={styles.title}>Select Seats</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  statusSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
  },
  textTypo: {
    fontFamily: FontFamily.headingH4,
    fontWeight: "600",
    color: Color.lightUIElementContrast,
  },
  dateFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  vectorLayout: {
    height: 20,
    width: 20,
    borderRadius: Border.br_8xs,
  },
  selectedTypo: {
    textAlign: "left",
    lineHeight: 20,
    fontSize: FontSize.bodyLSemiBold_size,
  },
  traveller1: {
    fontSize: FontSize.bodyXLRegular_size,
    lineHeight: 22,
    textAlign: "center",
    color: Color.lightUIElementContrast,
    fontFamily: FontFamily.bodyMRegular,
  },
  text: {
    lineHeight: 20,
    fontSize: FontSize.bodyLSemiBold_size,
    fontFamily: FontFamily.headingH4,
    fontWeight: "600",
    textAlign: "center",
  },
  active: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.peach50,
    paddingHorizontal: 17,
    paddingVertical: 10,
    alignItems: "center",
  },
  date1: {
    alignItems: "center",
  },
  date: {
    marginLeft: 30,
    flex: 1,
  },
  exe: {
    marginTop: 8,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  traveller: {
    width: 375,
    paddingVertical: 0,
  },
  vector: {
    backgroundColor: Color.peach300,
  },
  selected: {
    marginLeft: 8,
    color: Color.lightUIElementContrast,
    fontFamily: FontFamily.bodyMRegular,
    textAlign: "left",
  },
  ticket: {
    flexDirection: "row",
    alignItems: "center",
  },
  vector1: {
    backgroundColor: Color.green500,
  },
  ticket1: {
    marginLeft: 24,
    flexDirection: "row",
    alignItems: "center",
  },
  vector2: {
    backgroundColor: Color.green50,
  },
  status: {
    marginTop: 25,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  content: {
    top: 102,
    alignItems: "center",
    left: 0,
    position: "absolute",
  },
  yourSeats: {
    fontWeight: "500",
    fontFamily: FontFamily.bodySMedium,
    color: Color.green700,
  },
  traveller11: {
    fontFamily: FontFamily.headingH4,
    fontWeight: "600",
    color: Color.lightUIElementContrast,
  },
  seats: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  price: {
    marginTop: 16,
    alignSelf: "stretch",
    alignItems: "center",
  },
  info: {
    alignSelf: "stretch",
  },
  action: {
    top: 594,
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    backgroundColor: Color.lightTextWhite,
    paddingTop: Padding.p_5xl,
    paddingBottom: Padding.p_base,
    paddingHorizontal: Padding.p_base,
    width: 375,
    alignItems: "center",
    left: 0,
    position: "absolute",
  },
  transportSelectSeats: {
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

export default TransportSelectSeats;
