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
  textTypo: {
    fontFamily: FontFamily.bodySMedium,
    fontWeight: "500",
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
