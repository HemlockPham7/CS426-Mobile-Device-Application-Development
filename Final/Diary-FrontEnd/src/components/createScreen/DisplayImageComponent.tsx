import { StyleSheet, Image, Pressable } from "react-native";

import MyAppText from "../global/MyAppText";
import MyPressable from "../global/MyPressable";
import MyView from "../global/MyView";
import Icon from "../global/Icon";

import { useAppSelector, useAppDispatch } from "../../redux store/hook";
import { removeImage } from "../../redux store/createDiarySlice";

function DisplayImageComponent() {
  const dispatch = useAppDispatch();
  const imagesTemporary = useAppSelector(
    (state) => state.createDiary.imagesTemporary
  );

  function deleteImage(path: string) {
    dispatch(removeImage(path));
  }

  return (
    <MyView style={styles.container}>
      {imagesTemporary.map((path: string) => {
        return (
          <MyPressable key={path} style={styles.imageContainer}>
            <Image
              resizeMode="cover"
              style={styles.image}
              source={{ uri: path }}
            ></Image>
            <MyPressable
              color="white"
              style={styles.buttonClose}
              onPress={() => deleteImage(path)}
            >
              <Icon
                color="black"
                size={12}
                source={require("../../../assets/icons/close-2.png")}
              ></Icon>
            </MyPressable>
          </MyPressable>
        );
      })}
    </MyView>
  );
}

export default DisplayImageComponent;

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 20,
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
  buttonClose: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 8,
    end: 8,
    borderRadius: 20,
    height: 25,
    width: 25,
  },
});
