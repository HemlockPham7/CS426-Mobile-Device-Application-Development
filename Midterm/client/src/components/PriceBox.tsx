import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import TypeTitle from "./TypeTitle";
import { FontSize, FontFamily, Color } from "../../GlobalStyles";

const PriceBox = () => {
  return (
    <View style={styles.price}>
      <Text style={styles.price1}>Price</Text>
      <Image
        style={[styles.sliderIcon, styles.fieldsSpaceBlock]}
        contentFit="cover"
        source={require("../../assets/slider.png")}
      />
      <View style={[styles.fields, styles.fieldsSpaceBlock]}>
        <TypeTitle
          name1="From"
          text="$50"
          typeTitlePosition="unset"
          typeTitleMarginTop="unset"
          typeTitleWidth="unset"
          typeTitleFlex={1}
          typeTitleMarginLeft="unset"
        />
        <TypeTitle
          name1="To"
          text="$250"
          typeTitlePosition="unset"
          typeTitleMarginTop="unset"
          typeTitleWidth="unset"
          typeTitleFlex={1}
          typeTitleMarginLeft={20}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fieldsSpaceBlock: {
    marginTop: 16,
    width: 343,
  },
  price1: {
    fontSize: FontSize.bodyLSemiBold_size,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: FontFamily.headingH4,
    color: Color.lightUIElementContrast,
    textAlign: "left",
  },
  sliderIcon: {
    height: 16,
  },
  fields: {
    flexDirection: "row",
  },
  price: {
    marginTop: 32,
  },
});

export default PriceBox;
