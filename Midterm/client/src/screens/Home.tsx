import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import Facility1 from "../components/Facility1";
import Tabbar2 from "../components/Tabbar2";
import SearchField from "../components/SearchField";
import { Border, FontFamily, Color, FontSize, Padding } from "../../GlobalStyles";

const Home = () => {
  return (
    <View style={styles.home}>
      <View style={styles.content}>
        <Facility1 />
        <Text style={[styles.recomended, styles.recomendedSpaceBlock]}>
          Recomended
        </Text>
        <View style={[styles.content1, styles.recomendedSpaceBlock]}>
          <View>
            <View style={styles.cards}>
              <View style={styles.groupLayout}>
                <Image
                  style={[styles.groupChild, styles.groupLayout]}
                  contentFit="cover"
                  source={require("../../assets/rectangle-130.png")}
                />
                <View style={[styles.rate, styles.ratePosition]}>
                  <Image
                    style={styles.systemIcon}
                    contentFit="cover"
                    source={require("../../assets/system2.png")}
                  />
                  <Text style={[styles.text, styles.textTypo]}>4.5</Text>
                </View>
                <Image
                  style={[styles.saveButtonIcon, styles.ratePosition]}
                  contentFit="cover"
                  source={require("../../assets/save-button.png")}
                />
                <View style={styles.culturalParisFranceParent}>
                  <Text
                    style={[
                      styles.culturalParisFrance,
                      styles.startingAt300Clr,
                    ]}
                  >
                    Cultural Paris, France
                  </Text>
                  <Text style={[styles.startingAt300, styles.startingAt300Clr]}>
                    Starting at $300
                  </Text>
                </View>
              </View>
              <View style={[styles.rectangleGroup, styles.groupLayout]}>
                <Image
                  style={[styles.groupChild, styles.groupLayout]}
                  contentFit="cover"
                  source={require("../../assets/rectangle-1301.png")}
                />
                <View style={[styles.rate, styles.ratePosition]}>
                  <Image
                    style={styles.systemIcon}
                    contentFit="cover"
                    source={require("../../assets/system2.png")}
                  />
                  <Text style={[styles.text, styles.textTypo]}>4.5</Text>
                </View>
                <Image
                  style={[styles.saveButtonIcon, styles.ratePosition]}
                  contentFit="cover"
                  source={require("../../assets/save-button.png")}
                />
                <View style={styles.culturalParisFranceParent}>
                  <Text
                    style={[
                      styles.culturalParisFrance,
                      styles.startingAt300Clr,
                    ]}
                  >
                    Perfect Honeymoon, France
                  </Text>
                  <Text style={[styles.startingAt300, styles.startingAt300Clr]}>
                    Starting at $550
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.recomended1, styles.recomendedSpaceBlock]}>
          <Text style={[styles.hotOffers, styles.hotOffersClr]}>
            Hot offers
          </Text>
          <View style={styles.content2}>
            <View>
              <View style={styles.cards}>
                <View style={styles.groupLayout}>
                  <Image
                    style={[styles.groupChild, styles.groupLayout]}
                    contentFit="cover"
                    source={require("../../assets/rectangle-1302.png")}
                  />
                  <View style={[styles.rate, styles.ratePosition]}>
                    <Image
                      style={styles.systemIcon}
                      contentFit="cover"
                      source={require("../../assets/system2.png")}
                    />
                    <Text style={[styles.text, styles.textTypo]}>4.5</Text>
                  </View>
                  <Image
                    style={[styles.saveButtonIcon, styles.ratePosition]}
                    contentFit="cover"
                    source={require("../../assets/save-button.png")}
                  />
                  <View style={styles.culturalParisFranceParent}>
                    <Text
                      style={[
                        styles.culturalParisFrance,
                        styles.startingAt300Clr,
                      ]}
                    >
                      Paris Village Weekend, France
                    </Text>
                    <Text
                      style={[styles.startingAt300, styles.startingAt300Clr]}
                    >
                      Starting at $420
                    </Text>
                  </View>
                </View>
                <View style={[styles.rectangleGroup, styles.groupLayout]}>
                  <Image
                    style={[styles.groupChild, styles.groupLayout]}
                    contentFit="cover"
                    source={require("../../assets/rectangle-1301.png")}
                  />
                  <View style={[styles.rate, styles.ratePosition]}>
                    <Image
                      style={styles.systemIcon}
                      contentFit="cover"
                      source={require("../../assets/system2.png")}
                    />
                    <Text style={[styles.text, styles.textTypo]}>4.5</Text>
                  </View>
                  <Image
                    style={[styles.saveButtonIcon, styles.ratePosition]}
                    contentFit="cover"
                    source={require("../../assets/save-button.png")}
                  />
                  <View style={styles.culturalParisFranceParent}>
                    <Text
                      style={[
                        styles.culturalParisFrance,
                        styles.startingAt300Clr,
                      ]}
                    >
                      Perfect Honeymoon, France
                    </Text>
                    <Text
                      style={[styles.startingAt300, styles.startingAt300Clr]}
                    >
                      Starting at $550
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <Tabbar2 />
      <SearchField
        searchFieldPosition="absolute"
        searchFieldTop={110}
        searchFieldLeft={16}
      />
      <Text style={[styles.exploreTheBeautiful, styles.textTypo]}>
        Explore the beautiful world!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  recomendedSpaceBlock: {
    display: "none",
    marginTop: 12,
  },
  groupLayout: {
    height: 218,
    width: 163,
  },
  ratePosition: {
    borderRadius: Border.br_6xs,
    top: 8,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.bodySMedium,
    fontWeight: "500",
  },
  startingAt300Clr: {
    color: Color.lightTextWhite,
    textAlign: "left",
  },
  hotOffersClr: {
    color: Color.lightUIElementContrast,
    textAlign: "left",
  },
  recomended: {
    marginTop: 12,
    textAlign: "left",
    color: Color.lightUIElementContrast,
    fontFamily: FontFamily.bodyMRegular,
    lineHeight: 22,
    fontSize: FontSize.bodyXLRegular_size,
  },
  groupChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  systemIcon: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  text: {
    color: Color.peach300,
    lineHeight: 16,
    fontSize: FontSize.bodySMedium_size,
    fontFamily: FontFamily.bodySMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  rate: {
    left: 115,
    backgroundColor: Color.lightTextWhite,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    padding: Padding.p_11xs,
    flexDirection: "row",
  },
  saveButtonIcon: {
    left: 91,
    width: 20,
    height: 20,
  },
  culturalParisFrance: {
    alignSelf: "stretch",
    fontSize: FontSize.bodyLSemiBold_size,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: FontFamily.headingH4,
  },
  startingAt300: {
    fontFamily: FontFamily.bodySMedium,
    fontWeight: "500",
    lineHeight: 16,
    fontSize: FontSize.bodySMedium_size,
  },
  culturalParisFranceParent: {
    top: 154,
    left: 8,
    width: 147,
    position: "absolute",
  },
  rectangleGroup: {
    marginLeft: 17,
  },
  cards: {
    flexDirection: "row",
  },
  content1: {
    marginTop: 12,
  },
  hotOffers: {
    textAlign: "left",
    fontFamily: FontFamily.bodyMRegular,
    lineHeight: 22,
    fontSize: FontSize.bodyXLRegular_size,
    color: Color.lightUIElementContrast,
  },
  content2: {
    marginTop: 12,
  },
  recomended1: {
    paddingBottom: 32,
    marginTop: 12,
  },
  content: {
    top: 174,
    left: 16,
    height: 564,
    position: "absolute",
  },
  exploreTheBeautiful: {
    top: 68,
    left: 14,
    fontSize: FontSize.headingH4_size,
    lineHeight: 26,
    textAlign: "left",
    color: Color.lightUIElementContrast,
    position: "absolute",
  },
  home: {
    backgroundColor: Color.lightBackgroundScreen,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Home;
