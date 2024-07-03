import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import TypeArrow from "../components/TypeArrow";
import TypePrimaryLabelLabelSta from "../components/TypePrimaryLabelLabelSta";
import PriceBox from "../components/PriceBox";
import Facility from "../components/Facility";
import { Padding, Color, FontSize, FontFamily } from "../../GlobalStyles";

const TransportFilters = () => {
  return (
    <View style={styles.transportFilters}>
      <TypeArrow
        title="Filters"
        typeArrowPosition="absolute"
        typeArrowTop={44}
        typeArrowLeft={0}
      />
      <View style={[styles.filters, styles.filtersSpaceBlock]}>
        <View>
          <Text style={[styles.departure1, styles.departure1Typo]}>
            Departure
          </Text>
          <View style={styles.departure2}>
            <TypePrimaryLabelLabelSta
              buttonText="12AM - 06AM"
              typePrimaryLabelLabelStaPosition="unset"
              typePrimaryLabelLabelStaTop="unset"
              typePrimaryLabelLabelStaLeft="unset"
              typePrimaryLabelLabelStaWidth={124}
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
              buttonText="06AM - 12PM"
              typePrimaryLabelLabelStaPosition="unset"
              typePrimaryLabelLabelStaTop="unset"
              typePrimaryLabelLabelStaLeft="unset"
              typePrimaryLabelLabelStaWidth={124}
              typePrimaryLabelLabelStaAlignSelf="stretch"
              typePrimaryLabelLabelStaBackgroundColor="#089083"
              typePrimaryLabelLabelStaMarginTop="unset"
              typePrimaryLabelLabelStaBorderRadius={12}
              typePrimaryLabelLabelStaPaddingHorizontal="unset"
              typePrimaryLabelLabelStaPaddingVertical="unset"
              typePrimaryLabelLabelStaMarginLeft={8}
              typePrimaryLabelLabelStaTextColor="#fff"
            />
            <TypePrimaryLabelLabelSta
              buttonText="12PM - 06PM"
              typePrimaryLabelLabelStaPosition="unset"
              typePrimaryLabelLabelStaTop="unset"
              typePrimaryLabelLabelStaLeft="unset"
              typePrimaryLabelLabelStaWidth={124}
              typePrimaryLabelLabelStaAlignSelf="stretch"
              typePrimaryLabelLabelStaBackgroundColor="#fff"
              typePrimaryLabelLabelStaMarginTop="unset"
              typePrimaryLabelLabelStaBorderRadius={12}
              typePrimaryLabelLabelStaPaddingHorizontal="unset"
              typePrimaryLabelLabelStaPaddingVertical="unset"
              typePrimaryLabelLabelStaMarginLeft={8}
              typePrimaryLabelLabelStaTextColor="#089083"
            />
            <TypePrimaryLabelLabelSta
              buttonText="06PM - 12AM"
              typePrimaryLabelLabelStaPosition="unset"
              typePrimaryLabelLabelStaTop="unset"
              typePrimaryLabelLabelStaLeft="unset"
              typePrimaryLabelLabelStaWidth={124}
              typePrimaryLabelLabelStaAlignSelf="stretch"
              typePrimaryLabelLabelStaBackgroundColor="#fff"
              typePrimaryLabelLabelStaMarginTop="unset"
              typePrimaryLabelLabelStaBorderRadius={12}
              typePrimaryLabelLabelStaPaddingHorizontal="unset"
              typePrimaryLabelLabelStaPaddingVertical="unset"
              typePrimaryLabelLabelStaMarginLeft={8}
              typePrimaryLabelLabelStaTextColor="#089083"
            />
          </View>
        </View>
        <View style={styles.arrival}>
          <Text style={[styles.departure1, styles.departure1Typo]}>
            Arrival
          </Text>
          <View style={styles.departure2}>
            <TypePrimaryLabelLabelSta
              buttonText="12AM - 06AM"
              typePrimaryLabelLabelStaPosition="unset"
              typePrimaryLabelLabelStaTop="unset"
              typePrimaryLabelLabelStaLeft="unset"
              typePrimaryLabelLabelStaWidth={124}
              typePrimaryLabelLabelStaAlignSelf="stretch"
              typePrimaryLabelLabelStaBackgroundColor="#089083"
              typePrimaryLabelLabelStaMarginTop="unset"
              typePrimaryLabelLabelStaBorderRadius={12}
              typePrimaryLabelLabelStaPaddingHorizontal="unset"
              typePrimaryLabelLabelStaPaddingVertical="unset"
              typePrimaryLabelLabelStaMarginLeft="unset"
              typePrimaryLabelLabelStaTextColor="#fff"
            />
            <TypePrimaryLabelLabelSta
              buttonText="06AM - 12PM"
              typePrimaryLabelLabelStaPosition="unset"
              typePrimaryLabelLabelStaTop="unset"
              typePrimaryLabelLabelStaLeft="unset"
              typePrimaryLabelLabelStaWidth={124}
              typePrimaryLabelLabelStaAlignSelf="stretch"
              typePrimaryLabelLabelStaBackgroundColor="#fff"
              typePrimaryLabelLabelStaMarginTop="unset"
              typePrimaryLabelLabelStaBorderRadius={12}
              typePrimaryLabelLabelStaPaddingHorizontal="unset"
              typePrimaryLabelLabelStaPaddingVertical="unset"
              typePrimaryLabelLabelStaMarginLeft={8}
              typePrimaryLabelLabelStaTextColor="#089083"
            />
            <TypePrimaryLabelLabelSta
              buttonText="12PM - 06PM"
              typePrimaryLabelLabelStaPosition="unset"
              typePrimaryLabelLabelStaTop="unset"
              typePrimaryLabelLabelStaLeft="unset"
              typePrimaryLabelLabelStaWidth={124}
              typePrimaryLabelLabelStaAlignSelf="stretch"
              typePrimaryLabelLabelStaBackgroundColor="#fff"
              typePrimaryLabelLabelStaMarginTop="unset"
              typePrimaryLabelLabelStaBorderRadius={12}
              typePrimaryLabelLabelStaPaddingHorizontal="unset"
              typePrimaryLabelLabelStaPaddingVertical="unset"
              typePrimaryLabelLabelStaMarginLeft={8}
              typePrimaryLabelLabelStaTextColor="#089083"
            />
            <TypePrimaryLabelLabelSta
              buttonText="06PM - 12AM"
              typePrimaryLabelLabelStaPosition="unset"
              typePrimaryLabelLabelStaTop="unset"
              typePrimaryLabelLabelStaLeft="unset"
              typePrimaryLabelLabelStaWidth={124}
              typePrimaryLabelLabelStaAlignSelf="stretch"
              typePrimaryLabelLabelStaBackgroundColor="#fff"
              typePrimaryLabelLabelStaMarginTop="unset"
              typePrimaryLabelLabelStaBorderRadius={12}
              typePrimaryLabelLabelStaPaddingHorizontal="unset"
              typePrimaryLabelLabelStaPaddingVertical="unset"
              typePrimaryLabelLabelStaMarginLeft={8}
              typePrimaryLabelLabelStaTextColor="#089083"
            />
          </View>
        </View>
        <PriceBox />
        <View style={styles.arrival}>
          <Text style={[styles.departure1, styles.departure1Typo]}>
            Sort by
          </Text>
          <View style={styles.radio}>
            <View style={styles.radio1}>
              <Image
                style={styles.radiobuttonIcon}
                contentFit="cover"
                source={require("../../assets/selectedno.png")}
              />
              <Text style={[styles.arrivalTime, styles.departure1Typo]}>
                Arrival time
              </Text>
            </View>
            <View style={styles.radio2}>
              <Image
                style={styles.radiobuttonIcon}
                contentFit="cover"
                source={require("../../assets/selectedno.png")}
              />
              <Text style={[styles.arrivalTime, styles.departure1Typo]}>
                Departure time
              </Text>
            </View>
            <View style={styles.radio2}>
              <Image
                style={styles.radiobuttonIcon}
                contentFit="cover"
                source={require("../../assets/selectedyes.png")}
              />
              <Text style={[styles.arrivalTime, styles.departure1Typo]}>
                Price
              </Text>
            </View>
            <View style={styles.radio2}>
              <Image
                style={styles.radiobuttonIcon}
                contentFit="cover"
                source={require("../../assets/selectedno.png")}
              />
              <Text style={[styles.arrivalTime, styles.departure1Typo]}>
                Lowest fare
              </Text>
            </View>
            <View style={styles.radio2}>
              <Image
                style={styles.radiobuttonIcon}
                contentFit="cover"
                source={require("../../assets/selectedno.png")}
              />
              <Text style={[styles.arrivalTime, styles.departure1Typo]}>
                Duration
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.buttons, styles.filtersSpaceBlock]}>
        <TypePrimaryLabelLabelSta
          buttonText="Reset"
          typePrimaryLabelLabelStaPosition="unset"
          typePrimaryLabelLabelStaTop="unset"
          typePrimaryLabelLabelStaLeft="unset"
          typePrimaryLabelLabelStaWidth="unset"
          typePrimaryLabelLabelStaAlignSelf="unset"
          typePrimaryLabelLabelStaBackgroundColor="#fff"
          typePrimaryLabelLabelStaMarginTop="unset"
          typePrimaryLabelLabelStaBorderRadius={20}
          typePrimaryLabelLabelStaPaddingHorizontal="unset"
          typePrimaryLabelLabelStaPaddingVertical="unset"
          typePrimaryLabelLabelStaMarginLeft="unset"
          typePrimaryLabelLabelStaFlex={1}
          typePrimaryLabelLabelStaTextColor="#fea36b"
        />
        <TypePrimaryLabelLabelSta
          buttonText="Done"
          typePrimaryLabelLabelStaPosition="unset"
          typePrimaryLabelLabelStaTop="unset"
          typePrimaryLabelLabelStaLeft="unset"
          typePrimaryLabelLabelStaWidth="unset"
          typePrimaryLabelLabelStaAlignSelf="unset"
          typePrimaryLabelLabelStaBackgroundColor="#fea36b"
          typePrimaryLabelLabelStaMarginTop="unset"
          typePrimaryLabelLabelStaBorderRadius={20}
          typePrimaryLabelLabelStaPaddingHorizontal="unset"
          typePrimaryLabelLabelStaPaddingVertical="unset"
          typePrimaryLabelLabelStaMarginLeft={16}
          typePrimaryLabelLabelStaFlex={1}
          typePrimaryLabelLabelStaTextColor="#fff"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  filtersSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
    left: 0,
    position: "absolute",
  },
  departure1Typo: {
    textAlign: "left",
    color: Color.lightUIElementContrast,
    lineHeight: 20,
    fontSize: FontSize.bodyLSemiBold_size,
  },
  departure1: {
    fontWeight: "600",
    fontFamily: FontFamily.headingH4,
  },
  departure2: {
    width: 343,
    marginTop: 8,
    flexDirection: "row",
  },
  arrival: {
    marginTop: 32,
  },
  radiobuttonIcon: {
    width: 20,
    height: 20,
  },
  arrivalTime: {
    fontFamily: FontFamily.bodyMRegular,
    marginLeft: 8,
  },
  radio1: {
    flexDirection: "row",
  },
  radio2: {
    marginTop: 12,
    flexDirection: "row",
  },
  radio: {
    marginTop: 16,
  },
  filters: {
    top: 102,
    height: 592,
  },
  buttons: {
    top: 710,
    width: 375,
    flexDirection: "row",
    backgroundColor: Color.lightBackgroundScreen,
  },
  transportFilters: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.lightBackgroundScreen,
  },
});

export default TransportFilters;
