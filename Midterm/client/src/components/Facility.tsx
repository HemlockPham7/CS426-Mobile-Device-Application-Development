import * as React from "react";
import { Text, StyleSheet, View, ImageSourcePropType, TouchableOpacity, Alert } from "react-native";
import { Image } from "expo-image";
import TypePrimaryLabelIconStat from "./TypePrimaryLabelIconStat";
import { FontSize, FontFamily, Color, Border, Padding } from "../../GlobalStyles";

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
  function handlerAlert() {
    Alert.alert("This function will be developed soon");
  }

  return (
    facility && (
      <View style={styles.facility}>
        <Text style={styles.facilities}>Transport</Text>
        <View style={styles.facility1}>
          <TouchableOpacity
            style={[styles.typeprimaryLabeliconStat, {backgroundColor: "#089083"}]}
          >
            <Image style={styles.chevronIcon} contentFit="cover" source={require("../../assets/transport.png")} />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.typeprimaryLabeliconStat, {backgroundColor: "#fff", marginLeft: 16}]}
            onPress={handlerAlert}
          >
            <Image style={styles.chevronIcon} contentFit="cover" source={require("../../assets/transport1.png")} />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.typeprimaryLabeliconStat, {backgroundColor: "#fff", marginLeft: 16}]}
            onPress={handlerAlert}
          >
            <Image style={styles.chevronIcon} contentFit="cover" source={require("../../assets/transport2.png")} />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.typeprimaryLabeliconStat, {backgroundColor: "#fff", marginLeft: 16}]}
            onPress={handlerAlert}
          >
            <Image style={styles.chevronIcon} contentFit="cover" source={require("../../assets/transport3.png")} />
          </TouchableOpacity>
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
  chevronIcon: {
    alignSelf: "stretch",
    flex: 1,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    width: "100%",
  },
  typeprimaryLabeliconStat: {
    borderRadius: 15,
    backgroundColor: Color.peach300,
    width: 60,
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 9,
  },
});

export default Facility;
