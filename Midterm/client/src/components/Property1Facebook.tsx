import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, ImageSourcePropType } from "react-native";
import { Border, Color, Padding } from "../../GlobalStyles";

export type Property1FacebookType = {
  vector?: ImageSourcePropType;

  /** Style props */
  property1FacebookPosition?: string;
  property1FacebookMarginLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1Facebook = ({
  vector,
  property1FacebookPosition,
  property1FacebookMarginLeft,
}: Property1FacebookType) => {
  const property1FacebookStyle = useMemo(() => {
    return {
      ...getStyleValue("position", property1FacebookPosition),
      ...getStyleValue("marginLeft", property1FacebookMarginLeft),
    };
  }, [property1FacebookPosition, property1FacebookMarginLeft]);

  return (
    <View style={[styles.property1facebook, property1FacebookStyle]}>
      <Image style={styles.vectorIcon} contentFit="cover" source={vector} />
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIcon: {
    width: 17,
    height: 32,
  },
  property1facebook: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.lightTextWhite,
    width: 60,
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: Padding.p_sm,
  },
});

export default Property1Facebook;
