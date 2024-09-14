import { StyleSheet } from "react-native";
import { Image } from "expo-image";
import { useState } from "react";

import MyView from "../global/MyView";
import MyPressable from "../global/MyPressable";
import React from "react";
import Icon from "../global/Icon";
import CarouselImages from "./CarouselImages";

function DisplayImagesComponent({ urlImage }: any) {
  const [idChangeView, setIdChangeView] = useState(0);

  function changeView() {
    idChangeView == 0 ? setIdChangeView(1) : setIdChangeView(0);
  }

  return (
    <>
      <MyView style={styles.container}>
        {urlImage.length > 0 && (
          <MyPressable onPress={changeView} style={styles.iconChangeView}>
            {urlImage.length >= 2 &&
              (idChangeView == 0 ? (
                <Icon
                  color="black"
                  size={28}
                  source={require("../../../assets/icons/Category.png")}
                ></Icon>
              ) : (
                <Icon
                  color="black"
                  size={28}
                  source={require("../../../assets/icons/stack2.png")}
                ></Icon>
              ))}
          </MyPressable>
        )}

        {idChangeView == 0 && urlImage.length >= 2 ? (
          <CarouselImages urlImage={urlImage} />
        ) : (
          urlImage.map((path: string) => {
            return (
              <MyPressable key={path} style={styles.imageContainer}>
                <Image
                  contentFit="cover"
                  style={styles.image}
                  source={{ uri: path }}
                  cachePolicy={"memory-disk"}
                  key={path}
                ></Image>
              </MyPressable>
            );
          })
        )}
      </MyView>
    </>
  );
}

export default DisplayImagesComponent;

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 20,
  },
  iconChangeView: {
    justifyContent: "flex-end",
    flexDirection: "row",
    width: "100%",
    marginBottom: 6,
    marginTop: 4,
  },
  imageContainer: {
    height: 250,
    width: "100%",
    borderRadius: 12,
    marginBottom: 12,
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: 12,
  },
});
