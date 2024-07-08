import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import Property1PlaneImage from "./Property1PlaneImage";
import { Color, FontFamily, FontSize, Padding } from "../../GlobalStyles";
import { useAppSelector } from "../reduxstore/hooks";

const Content = () => {
  
  const fromDestination = useAppSelector((state) => state.flight.fromDestination);
  const toDestination = useAppSelector((state) => state.flight.toDestination);
  const flightNumber = useAppSelector((state) => state.flight.flightNumber);
  const date = useAppSelector((state) => state.flight.date);
  const time = useAppSelector((state) => state.flight.time);
  const adults = useAppSelector((state) => state.ticket.adults);
  const babies = useAppSelector((state) => state.ticket.babies);

  const splitDestination = (destination?: string) => {
    if (!destination) return ["", ""];
    const lastIndex = destination.lastIndexOf(" (");
    if (lastIndex !== -1) {
      const cityName = destination.substring(0, lastIndex);
      const cityCode = destination.substring(lastIndex + 2, destination.length - 1);
      return [cityName, cityCode];
    } else {
      return [destination, ""];
    }
  };

  const [fromCityName, fromCityCode] = splitDestination(fromDestination);
  const [toCityName, toCityCode] = splitDestination(toDestination);

  const generateSeatNumbers = () => {
    let seats = "";
    for (let i = 1; i <= adults + babies; i++) {
      seats += `${i}A `;
    }
    return seats.trim(); // Trim trailing space
  };

  return (
    <View style={[styles.content, styles.loadPosition]}>
      <View style={styles.illustration}>
        <Property1PlaneImage
          property1PlaneImageProper={require("../../assets/ticket-illustration.png")}
        />
        <Text style={[styles.britishAirwaysFlight, styles.newYorkTypo]}>
          British Airways Flight {flightNumber}
        </Text>
      </View>
      <View style={[styles.divider, styles.dividerLayout]} />
      <View style={styles.info}>
        <View style={styles.location}>
          <View>
            <Text style={styles.nyc}>{fromCityCode}</Text>
            <Text style={[styles.newYork, styles.newYorkTypo]}>{fromCityName}</Text>
          </View>
          <View style={styles.loading}>
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../../assets/vector2.png")}
            />
            <View style={[styles.load, styles.loadPosition]}>
              <Image
                style={styles.loadLayout}
                contentFit="cover"
                source={require("../../assets/ellipse-172.png")}
              />
              <View style={[styles.loadItem, styles.dividerLayout]} />
              <Image
                style={[styles.loadInner, styles.loadLayout]}
                contentFit="cover"
                source={require("../../assets/ellipse-173.png")}
              />
            </View>
          </View>
          <View style={styles.to}>
            <Text style={styles.nyc}>{toCityCode}</Text>
            <Text style={[styles.newYork, styles.newYorkTypo]}>{toCityName}</Text>
          </View>
        </View>
        <View style={styles.info1}>
          <View>
            <Text style={styles.nyc}>Date</Text>
            <Text style={[styles.newYork, styles.newYorkTypo]}>{date.toLocaleDateString()}</Text>
          </View>
          <View style={styles.departure}>
            <Text style={styles.nyc}>Departure</Text>
            <Text style={[styles.newYork, styles.newYorkTypo]}>{time}</Text>
          </View>
        </View>
      </View>
      <View style={[styles.divider, styles.dividerLayout]} />
      <View style={styles.info2}>
        <View>
          <Text style={styles.nyc}>Passenger</Text>
          <Text style={[styles.newYork, styles.newYorkTypo]}>{adults} Adult</Text>
        </View>
        <View>
          <Text style={styles.nyc}>Ticket</Text>
          <Text style={[styles.newYork, styles.newYorkTypo]}>NL82-1</Text>
        </View>
        <View>
          <Text style={styles.nyc}>Class</Text>
          <Text style={[styles.newYork, styles.newYorkTypo]}>Business</Text>
        </View>
      </View>

      <View style={styles.info2}>
        <View>
          <Text style={styles.nyc}>Passenger</Text>
          <Text style={[styles.newYork, styles.newYorkTypo]}>{babies} Baby</Text>
        </View>
        <View>
          <Text style={styles.nyc}>Seat</Text>
          <Text style={[styles.newYork, styles.newYorkTypo]}>{generateSeatNumbers()}</Text>
        </View>
      </View>
      <View style={styles.code}>
        <Image
          style={styles.barCodeIcon}
          contentFit="cover"
          source={require("../../assets/bar-code.png")}
        />
        <Text style={[styles.a3427371903848, styles.newYorkTypo]}>
          A3427371903848
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loadPosition: {
    left: 0,
    alignItems: "center",
    position: "absolute",
  },
  newYorkTypo: {
    color: Color.lightUIElementContrast,
    fontFamily: FontFamily.bodyMRegular,
    textAlign: "left",
  },
  dividerLayout: {
    height: 1,
    borderRadius: 0.001,
    borderStyle: "dashed",
  },
  loadLayout: {
    height: 3,
    width: 3,
  },
  britishAirwaysFlight: {
    marginTop: 18,
    textAlign: "left",
    lineHeight: 22,
    fontSize: FontSize.bodyXLRegular_size,
    fontFamily: FontFamily.bodyMRegular,
  },
  illustration: {
    alignItems: "center",
  },
  divider: {
    borderColor: Color.lightUIElementContrast,
    borderTopWidth: 1,
    width: 312,
    marginTop: 24,
  },
  nyc: {
    fontSize: FontSize.bodySMedium_size,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: FontFamily.bodySMedium,
    color: Color.green700,
    textAlign: "left",
  },
  newYork: {
    textAlign: "left",
    lineHeight: 22,
    fontSize: FontSize.bodyXLRegular_size,
    fontFamily: FontFamily.bodyMRegular,
  },
  vectorIcon: {
    height: "100%",
    width: "20.55%",
    top: "0%",
    right: "39%",
    bottom: "0%",
    left: "40.45%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  loadItem: {
    borderColor: Color.peach300,
    borderTopWidth: 0.5,
    width: 101,
    marginLeft: 2,
  },
  loadInner: {
    marginLeft: 2,
  },
  load: {
    top: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  loading: {
    width: 110,
    height: 23,
    marginLeft: 25,
  },
  to: {
    marginLeft: 25,
  },
  location: {
    alignItems: "flex-end",
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  departure: {
    marginLeft: 24,
  },
  info1: {
    marginTop: 23,
    flexDirection: "row",
  },
  info: {
    alignSelf: "stretch",
    marginTop: 24,
  },
  info2: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
    marginTop: 24,
  },
  barCodeIcon: {
    width: 291,
    height: 10,
  },
  a3427371903848: {
    fontSize: FontSize.bodyMRegular_size,
    lineHeight: 18,
    marginTop: 8,
    textAlign: "left",
  },
  code: {
    marginTop: 10,
    alignItems: "center",
  },
  content: {
    top: 24,
    width: 343,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: 0,
    alignItems: "center",
  },
});

export default Content;
