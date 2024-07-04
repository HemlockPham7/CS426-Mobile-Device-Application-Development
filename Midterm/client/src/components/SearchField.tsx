import React, { useMemo, useState } from "react";
import { Text, StyleSheet, View, TextInput, TouchableOpacity, Alert } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border, Padding } from "../../GlobalStyles";

export type SearchFieldType = {
  /** Style props */
  searchFieldPosition?: string;
  searchFieldTop?: number | string;
  searchFieldLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const SearchField = ({
  searchFieldPosition,
  searchFieldTop,
  searchFieldLeft,
}: SearchFieldType) => {
  const [searchText, setSearchText] = useState("");

  const searchFieldStyle = useMemo(() => {
    return {
      ...getStyleValue("position", searchFieldPosition),
      ...getStyleValue("top", searchFieldTop),
      ...getStyleValue("left", searchFieldLeft),
    };
  }, [searchFieldPosition, searchFieldTop, searchFieldLeft]);

  const handleSearch = () => {
    Alert.alert("Search Text: ", searchText);
    setSearchText("");
  };

  return (
    <View style={[styles.searchField, styles.searchFlexBox, searchFieldStyle]}>
      <TextInput 
        style={styles.search} 
        placeholder="Search"
        value={searchText}
        onChangeText={setSearchText}
      />
      <TouchableOpacity style={[styles.search1, styles.searchFlexBox]} onPress={handleSearch}>
        <Image
          style={styles.systemIcon}
          contentFit="cover"
          source={require("../../assets/system3.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  search: {
    fontSize: FontSize.bodyLSemiBold_size,
    lineHeight: 20,
    fontFamily: FontFamily.bodyMRegular,
    color: Color.lightTextSecondary,
    textAlign: "center",
  },
  systemIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  search1: {
    borderRadius: Border.br_smi,
    backgroundColor: Color.peach300,
    padding: Padding.p_7xs,
  },
  searchField: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.lightTextWhite,
    width: 343,
    justifyContent: "space-between",
    paddingLeft: Padding.p_base,
    paddingTop: Padding.p_11xs,
    paddingRight: Padding.p_11xs,
    paddingBottom: Padding.p_11xs,
  },
});

export default SearchField;
