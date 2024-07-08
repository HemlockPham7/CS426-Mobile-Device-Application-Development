import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontSize, FontFamily, Color } from "../../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import { useAppDispatch } from "../reduxstore/hooks";
import { updateDate, updateFlightNumber, updateFromDestination, updateTime, updateToDestination } from "../reduxstore/flightSlice";

export type CardType = {
  /** Style props */
  propMarginTop?: number | string;
  fromDestination?: string;
  toDestination?: string;
  price?: number;
  flightNumber?: string;
  date?: Date;
  time?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const Card = ({ 
  propMarginTop,
  fromDestination,
  toDestination,
  price,
  flightNumber,
  date,
  time,
}: CardType) => {
  const cardStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", propMarginTop),
    };
  }, [propMarginTop]);

  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();

  function navigateTransportSelectSeatsScreen() {
    dispatch(updateFromDestination({ fromDestination: fromDestination }));
    dispatch(updateToDestination({ toDestination: toDestination }));
    dispatch(updateDate({ date: date }));
    dispatch(updateTime({ time: time }));
    dispatch(updateFlightNumber({ flightNumber: flightNumber }));
    navigation.navigate("TransportSelectSeats");
  }

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

  return (
    <TouchableOpacity style={[styles.card, cardStyle]} onPress={navigateTransportSelectSeatsScreen}>
      <Image
        style={styles.card}
        contentFit="cover"
        source={require("../../assets/subtract.png")}
      />
      <View style={[styles.info, styles.infoPosition]}>
        <View>
          <Text style={styles.date1}>Date</Text>
          <Text style={styles.jun}>{date.toLocaleDateString()}</Text>
        </View>
        <View>
          <Text style={styles.date1}>Departure</Text>
          <Text style={styles.jun}>{time}</Text>
        </View>
        <View>
          <Text style={styles.date1}>Price</Text>
          <Text style={styles.jun}>${price}</Text>
        </View>
        <View>
          <Text style={styles.date1}>Number</Text>
          <Text style={styles.jun}>{flightNumber}</Text>
        </View>
      </View>
      <View style={[styles.location, styles.dividerLayout]}>
        <View>
          <Text style={styles.date1}>{fromCityCode}</Text>
          <Text style={styles.jun}>{fromCityName}</Text>
        </View>

        <View style={styles.loading}>
          <View style={styles.load}>
            <Image
              style={styles.loadLayout}
              contentFit="cover"
              source={require("../../assets/ellipse-17.png")}
            />
            <View style={[styles.loadItem, styles.dividerBorder]} />
            <Image
              style={[styles.loadInner, styles.loadLayout]}
              contentFit="cover"
              source={require("../../assets/ellipse-171.png")}
            />
          </View>
          <Image
            style={styles.ticketTransportIcon}
            contentFit="cover"
            source={require("../../assets/ticket-transport1.png")}
          />
        </View>

        <View style={styles.to}>
          <Text style={styles.date1}>{toCityCode}</Text>
          <Text style={styles.jun}>{toCityName}</Text>
        </View>
      </View>
      <View style={[styles.divider, styles.dividerBorder]} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  infoPosition: {
    left: "4.66%",
    height: "22.62%",
    flexDirection: "row",
  },
  dividerLayout: {
    width: "90.96%",
    position: "absolute",
  },
  dividerBorder: {
    borderRadius: 0.001,
    borderStyle: "dashed",
  },
  loadLayout: {
    height: 3,
    width: 3,
  },
  card: {
    width: 343,
    height: 168,
  },
  date1: {
    fontSize: FontSize.bodySMedium_size,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: FontFamily.bodySMedium,
    color: Color.green700,
    textAlign: "left",
  },
  jun: {
    fontSize: 10,
    lineHeight: 22,
    fontFamily: FontFamily.bodyMRegular,
    color: Color.lightUIElementContrast,
    textAlign: "left",
  },
  info: {
    width: "90.67%",
    top: "67.86%",
    right: "4.66%",
    bottom: "9.52%",
    justifyContent: "space-between",
    flexDirection: "row",
    position: "absolute",
  },
  loadItem: {
    borderColor: Color.peach300,
    borderTopWidth: 0.5,
    width: 121,
    height: 1,
    marginLeft: 2,
  },
  loadInner: {
    marginLeft: 2,
  },
  load: {
    top: 10,
    left: 0,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  ticketTransportIcon: {
    height: "100%",
    width: "18.46%",
    top: "0%",
    right: "41.54%",
    bottom: "0%",
    left: "40%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  loading: {
    width: 130,
    height: 24,
    marginLeft: 25,
  },
  to: {
    marginLeft: 25,
  },
  location: {
    top: "9.52%",
    right: "4.37%",
    bottom: "67.86%",
    alignItems: "flex-end",
    justifyContent: "center",
    flexDirection: "row",
    left: "4.66%",
    height: "22.62%",
  },
  divider: {
    height: "0.6%",
    top: "49.7%",
    right: "4.52%",
    bottom: "49.7%",
    left: "4.52%",
    backgroundColor: Color.lightUIElementContrast,
    borderColor: Color.lightUIElementContrast,
    borderTopWidth: 1,
    width: "90.96%",
    position: "absolute",
  },
});

export default Card;
