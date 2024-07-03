import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, ImageSourcePropType } from "react-native";

export type TypeTripImageType = {
  typeTripImageTypeTrip?: ImageSourcePropType;

  /** Style props */
  typeTripIconWidth?: number | string;
  typeTripIconOverflow?: string;
  typeTripIconMaxHeight?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const TypeTripImage = ({
  typeTripImageTypeTrip,
  typeTripIconWidth,
  typeTripIconOverflow,
  typeTripIconMaxHeight,
}: TypeTripImageType) => {
  const typeTripIconStyle = useMemo(() => {
    return {
      ...getStyleValue("width", typeTripIconWidth),
      ...getStyleValue("overflow", typeTripIconOverflow),
      ...getStyleValue("maxHeight", typeTripIconMaxHeight),
    };
  }, [typeTripIconWidth, typeTripIconOverflow, typeTripIconMaxHeight]);

  return (
    <Image
      style={[styles.typetripIcon, typeTripIconStyle]}
      contentFit="cover"
      source={typeTripImageTypeTrip}
    />
  );
};

const styles = StyleSheet.create({
  typetripIcon: {
    width: 200,
    alignSelf: "stretch",
    flex: 1,
  },
});

export default TypeTripImage;
