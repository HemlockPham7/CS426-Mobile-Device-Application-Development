import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useLayoutEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";

import MyView from "../global/MyView";
import MyAppText from "../global/MyAppText";
import Icon from "../global/Icon";
import MyPressable from "../global/MyPressable";
import { useAppSelector } from "../../redux store/hook";
import MyFastImage from "../global/MyFastImage";
import { nameScreen } from "../../constants/globalVariables";

let urlImagePrev = "";

function AccountDetailComponent() {
  const name = useAppSelector((state) => state.information.name);
  const urlImage = useAppSelector((state) => state.information.urlImage);
  const introduction = useAppSelector(
    (state) => state.information.introduction
  );
  const navigation = useNavigation<any>();

  function navigateHandler() {
    navigation.navigate(nameScreen.profile);
  }

  return (
    <MyPressable onPress={navigateHandler} style={styles.container}>
      <MyView isBorder={urlImage == ""} style={styles.imageContainer}>
        {!urlImage ? (
          <Icon
            size={50}
            source={require("../../../assets/icons/Profile.png")}
          ></Icon>
        ) : (
          <MyFastImage
            cacheKey="avatar"
            style={styles.imageStyle}
            source={urlImage}
          ></MyFastImage>
        )}
      </MyView>
      <MyView style={styles.textContainer}>
        <MyAppText style={styles.nameText}>
          {name != "" ? name : "Set your name"}
        </MyAppText>
        <MyAppText style={styles.profileText}>
          {!introduction ? "You haven't added any profiles yet":introduction}
        </MyAppText>
      </MyView>
      <MyPressable onPress={navigateHandler}>
        <Icon
          source={require("../../../assets/icons/ArrowRight2.png")}
          size={32}
          color="black"
        ></Icon>
      </MyPressable>
    </MyPressable>
  );
}

export default AccountDetailComponent;

const styles = StyleSheet.create({
  container: {
    height: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 16,
    marginBottom: 20,
  },
  imageContainer: {
    height: 80,
    width: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  imageStyle: {
    height: "100%",
    width: "100%",
    borderRadius: 40,
  },
  textContainer: {
    height: "100%",
    width: "70%",
    justifyContent: "center",
    paddingLeft: 16,
    paddingBottom: 8,
  },
  nameText: {
    fontSize: 20,
  },
  profileText: {
    fontSize: 12,
    flexWrap: "wrap",
    fontFamily: "Poppins-Light",
  },
});
