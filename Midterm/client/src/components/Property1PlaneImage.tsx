import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, ImageSourcePropType } from "react-native";

export type Property1PlaneImageType = {
  property1PlaneImageProper?: ImageSourcePropType;
};

const Property1PlaneImage = ({
  property1PlaneImageProper,
}: Property1PlaneImageType) => {
  return (
    <Image
      style={styles.property1planeIcon}
      contentFit="cover"
      source={property1PlaneImageProper}
    />
  );
};

const styles = StyleSheet.create({
  property1planeIcon: {
    width: 180,
    height: 155,
  },
});

export default Property1PlaneImage;
