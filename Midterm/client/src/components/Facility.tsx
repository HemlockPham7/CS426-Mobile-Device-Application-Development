import * as React from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import TypePrimaryLabelIconStat from "./TypePrimaryLabelIconStat";
import { FontSize, FontFamily, Color } from "../../GlobalStyles";

export type FacilityType = {
  facilities?: string;
  convenience?: ImageSourcePropType;
  convenience1?: ImageSourcePropType;
  convenience2?: ImageSourcePropType;
  convenience3?: ImageSourcePropType;
  facility?: boolean;
};

const Facility = ({
  facilities,
  convenience,
  convenience1,
  convenience2,
  convenience3,
  facility,
}: FacilityType) => {
  return (
    facility && (
      <View style={styles.facility}>
        <Text style={styles.facilities}>Transport</Text>
        <View style={styles.facility1}>
          <TypePrimaryLabelIconStat
            chevron={require("../../assets/transport.png")}
            typePrimaryLabelIconStatPosition="unset"
            typePrimaryLabelIconStatBackgroundColor="#089083"
            typePrimaryLabelIconStatBorderRadius={15}
            typePrimaryLabelIconStatWidth={60}
            typePrimaryLabelIconStatHeight={60}
            typePrimaryLabelIconStatPadding={9}
            typePrimaryLabelIconStatMarginLeft="unset"
          />
          <TypePrimaryLabelIconStat
            chevron={require("../../assets/transport1.png")}
            typePrimaryLabelIconStatPosition="unset"
            typePrimaryLabelIconStatBackgroundColor="#fff"
            typePrimaryLabelIconStatBorderRadius={15}
            typePrimaryLabelIconStatWidth={60}
            typePrimaryLabelIconStatHeight={60}
            typePrimaryLabelIconStatPadding={9}
            typePrimaryLabelIconStatMarginLeft={16}
          />
          <TypePrimaryLabelIconStat
            chevron={require("../../assets/transport2.png")}
            typePrimaryLabelIconStatPosition="unset"
            typePrimaryLabelIconStatBackgroundColor="#fff"
            typePrimaryLabelIconStatBorderRadius={15}
            typePrimaryLabelIconStatWidth={60}
            typePrimaryLabelIconStatHeight={60}
            typePrimaryLabelIconStatPadding={9}
            typePrimaryLabelIconStatMarginLeft={16}
          />
          <TypePrimaryLabelIconStat
            chevron={require("../../assets/transport3.png")}
            typePrimaryLabelIconStatPosition="unset"
            typePrimaryLabelIconStatBackgroundColor="#fff"
            typePrimaryLabelIconStatBorderRadius={15}
            typePrimaryLabelIconStatWidth={60}
            typePrimaryLabelIconStatHeight={60}
            typePrimaryLabelIconStatPadding={9}
            typePrimaryLabelIconStatMarginLeft={16}
          />
        </View>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  facilities: {
    fontSize: FontSize.bodyLSemiBold_size,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: FontFamily.headingH4,
    color: Color.lightUIElementContrast,
    textAlign: "left",
  },
  facility1: {
    width: 343,
    flexDirection: "row",
    marginTop: 8,
  },
  facility: {
    marginTop: 32,
  },
});

export default Facility;
