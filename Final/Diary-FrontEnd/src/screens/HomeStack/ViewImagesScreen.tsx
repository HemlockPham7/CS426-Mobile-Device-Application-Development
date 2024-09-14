import { StyleSheet, Platform, Dimensions } from "react-native";
import { useEffect, useLayoutEffect, useState } from "react";
import { Image } from "expo-image";
import { useMutation } from "@tanstack/react-query";
import { FlatList, ScrollView } from "react-native-gesture-handler";

import MyAppText from "../../components/global/MyAppText";
import MyView from "../../components/global/MyView";
import { getImageByYear } from "../../api/storage/storageImage";
import MyPressable from "../../components/global/MyPressable";
import { getDownloadURL } from "firebase/storage";
import Icon from "../../components/global/Icon";
import PickerView from "../../components/global/PickerView";
import ModalImage from "../../components/viewImagesScreen/ModalImage";
import ModalLoading from "../../components/global/ModalLoading";

function ViewImagesScreen({ navigation }: any) {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedYear, setSelectedYear] = useState(2024);
  const [urlImage, setUrlImage] = useState<string[]>([]);
  const [isVisiblePicker, setIsVisiblePicker] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [modalImageUrl, setModalImageUrl] = useState<string>("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <MyPressable
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => setIsVisiblePicker(true)}
        >
          <MyAppText style={{ fontFamily: "Poppins-Medium", fontSize: 18 }}>
            {selectedYear}
          </MyAppText>
          <Icon
            color="black"
            size={24}
            source={require("../../../assets/icons/Arrow_Down.png")}
          ></Icon>
        </MyPressable>
      ),
    });
  }, [selectedYear]);

  async function getImage(year: number) {
    setUrlImage([]);
    setIsLoading(true);
    const results = await getImageByYear(year);

    if (results !== undefined) {
      results.forEach(async (itemRef) => {
        await getDownloadURL(itemRef).then((url) => {
          setUrlImage((prev) => [...prev, url]);
        });
      });
    }
    setIsLoading(false);
  }

  useEffect(() => {
    getImage(selectedYear);
  }, [selectedYear]);

  function pressImage(item: string) {
    setIsVisible(true);
    setModalImageUrl(item);
  }

  return (
    <MyView styles={styles.container}>
      <ModalLoading isLoading={isLoading} message="Please wait..." />
      <PickerView
        isVisible={isVisiblePicker}
        setIsVisible={setIsVisiblePicker}
        list={[2024, 2023, 2022, 2021, 2020, 2019, 2018]}
        intiialValue={selectedYear}
        onPress={(item: any) => {
          setSelectedYear(item);
        }}
      />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <FlatList
          data={urlImage}
          renderItem={({ item }) => (
            <MyPressable onPress={() => pressImage(item)}>
              <Image source={{ uri: item }} style={styles.imageStyle} />
            </MyPressable>
          )}
          keyExtractor={(item) => item}
          scrollEnabled={false}
          numColumns={3}
        />
      </ScrollView>

      <ModalImage
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        modalImageUrl={modalImageUrl}
      />
    </MyView>
  );
}

export default ViewImagesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  scrollView: {
    paddingTop: "2%",
    paddingBottom: "20%",
    alignItems: "center",
  },
  imageStyle: {
    width: Dimensions.get("window").width / 3,
    height: 200,
  },
});
