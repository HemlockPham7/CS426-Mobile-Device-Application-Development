import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, ImageSourcePropType, TouchableOpacity } from "react-native";
import TypeTripImage from "./TypeTripImage";
import { Color, Padding, FontSize, FontFamily, Border } from "../../GlobalStyles";

export type Card1Type = {
  bookingIllustration?: ImageSourcePropType;
  name1?: string;

  /** Style props */
  dividerMarginTop?: number | string;
  onPress?: () => void;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Card1 = ({ bookingIllustration, name1, dividerMarginTop, onPress }: Card1Type) => {
  const card1Style = useMemo(() => {
    return {
      ...getStyleValue("marginTop", dividerMarginTop),
    };
  }, [dividerMarginTop]);

  return (
    <TouchableOpacity style={[styles.card, styles.cardLayout, card1Style]} onPress={onPress}>
      <Image
        style={styles.cardLayout}
        contentFit="cover"
        source={require("../../assets/subtract1.png")}
      />
      <View style={[styles.content, styles.cardLayout]}>
        <TypeTripImage
          typeTripImageTypeTrip={require("../../assets/booking-illustration1.png")}
          typeTripIconWidth="100%"
          typeTripIconOverflow="hidden"
          typeTripIconMaxHeight="100%"
        />
        <View style={styles.divider}>
          <View style={styles.divider1} />
        </View>
        <Text style={styles.name}>{name1}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardLayout: {
    height: 311,
    width: 343,
  },
  divider1: {
    borderStyle: "dashed",
    borderColor: Color.lightUIElementContrast,
    borderRadius: 0.001,
    borderTopWidth: 1,
    height: 1,
    alignSelf: "stretch",
  },
  divider: {
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: 0,
    marginTop: 16,
    alignSelf: "stretch",
  },
  name: {
    fontSize: FontSize.headingH3_size,
    lineHeight: 28,
    fontWeight: "600",
    fontFamily: FontFamily.headingH4,
    color: Color.lightUIElementContrast,
    textAlign: "left",
    marginTop: 16,
  },
  content: {
    position: "absolute",
    top: 0,
    left: 0,
    alignItems: "center",
    padding: Padding.p_5xs,
  },
  card: {
    borderRadius: Border.br_xl,
  },
});

export default Card1;
