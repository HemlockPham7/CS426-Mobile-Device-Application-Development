import * as React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import TypeTitle from "./TypeTitle";
import { Border, Color, Padding } from "../../GlobalStyles";

const Fields = () => {
  return (
    <View>
      <View style={styles.fields1}>
        <View style={styles.fields2}>
          <TypeTitle
            name1="From"
            text="New York (NYC)"
            typeTitlePosition="unset"
            typeTitleMarginTop="unset"
            typeTitleWidth={343}
            typeTitleMarginLeft="unset"
          />
          <TypeTitle
            name1="To"
            text="London (LDN)"
            typeTitlePosition="unset"
            typeTitleMarginTop={8}
            typeTitleWidth={343}
            typeTitleMarginLeft="unset"
          />
        </View>
        <TouchableOpacity style={styles.button}>
          <Image
            style={styles.arrowsIcon}
            contentFit="cover"
            source={require("../../assets/arrows.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.fields3}>
        <TypeTitle
          name1="Departure"
          text="Jun 02, 2022"
          typeTitlePosition="unset"
          typeTitleMarginTop="unset"
          typeTitleWidth="unset"
          typeTitleFlex={1}
          typeTitleMarginLeft="unset"
        />
        <TypeTitle
          name1="Return"
          text="Jun 12, 2022"
          typeTitlePosition="unset"
          typeTitleMarginTop="unset"
          typeTitleWidth="unset"
          typeTitleFlex={1}
          typeTitleMarginLeft={16}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fields2: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  arrowsIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  button: {
    top: 38,
    left: 271,
    borderRadius: Border.br_xs,
    backgroundColor: Color.peach300,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    padding: Padding.p_sm,
    flexDirection: "row",
    position: "absolute",
  },
  fields1: {
    height: 116,
    width: 343,
  },
  fields3: {
    marginTop: 16,
    flexDirection: "row",
    width: 343,
  },
});

export default Fields;
