import { StyleSheet, Image, Dimensions, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useEffect, useLayoutEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { v4 as uuidv4 } from "uuid";
import { FlatList, ScrollView } from "react-native-gesture-handler";

import MyView from "../../components/global/MyView";
import Icon from "../../components/global/Icon";
import MyPressable from "../../components/global/MyPressable";
import MyAppText from "../../components/global/MyAppText";
import { detectTextFromImage } from "../../api/scan/scan";
import ModalLoading from "../../components/global/ModalLoading";
import { nameScreen } from "../../constants/globalVariables";
import { useAppDispatch } from "../../redux store/hook";
import { changeDate, changeDiary } from "../../redux store/createDiarySlice";
import {
  createPromptScanDiary,
  createPromptGetDateFromScanImage,
  textInputGenerate,
} from "../../api/ai/ai";

function ScanScreen({ navigation }: any) {
  const dispatch = useAppDispatch();
  const [base64Image, setBase64Image] = useState<string[]>([]);
  const [imageUri, setImageUri] = useState<string[]>([]);
  const [isPending, setIsPending] = useState<boolean>(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "",
    });
  }, []);

  async function scan() {
    if (base64Image.length == 0) {
      Alert.alert("No image selected", "Please select an image to scan");
      return;
    }
    try {
      setIsPending(true);

      const data = await detectTextFromImage(base64Image);

      generateDiary(data);
    } catch (error) {
      console.log(error);
      Alert.alert("Scanning failed", "Please try again");
    }
  }

  async function generateDiary(data: string[]) {
    let diary: string = "";
    data.map((item: string) => {
      diary += item + "\n";
    });

    const datePrompt = createPromptGetDateFromScanImage(diary);
    const date = await textInputGenerate(datePrompt);

    if (date != "2000/01/01" ) {
      const [yearString, monthString, dayString] = date.split("-");
      const year = parseInt(yearString);
      const month = parseInt(monthString);
      const day = parseInt(dayString);

      console.log({ day: day, month: month, year: year });
      dispatch(changeDate({ day: day, month: month, year: year }));
    }

    const prompt = createPromptScanDiary(diary);
    const text = await textInputGenerate(prompt);

    dispatch(changeDiary(text));
    setIsPending(false);

    navigation.reset({
      index: 0,
      routes: [{ name: nameScreen.functions }],
    });
    navigation.navigate("CreateStack");
  }

  async function pickImage(usedCamera: boolean) {
    let pickerResult;

    if (usedCamera) {
      const isPermission = await ImagePicker.getCameraPermissionsAsync();
      if (isPermission.status != "granted") {
        // Linking.openSettings();
        await ImagePicker.requestCameraPermissionsAsync();
      } else {
        await ImagePicker.requestCameraPermissionsAsync();
      }

      pickerResult = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        aspect: [16, 9],
        quality: 1,
        base64: true,
      });
    } else {
      pickerResult = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        aspect: [4, 3],
        quality: 1,
        base64: true,
      });
    }
    if (!pickerResult.canceled) {
      setImageUri([...imageUri, pickerResult.assets[0].uri]);
      setBase64Image([...base64Image, pickerResult.assets[0].base64]);
    }
  }

  return (
    <MyView
      style={{
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <ScrollView>
        <ModalLoading isLoading={isPending} message="Scanning..." />

        <MyView>
          <MyAppText
            style={{
              fontSize: 16,
              fontFamily: "Poppins-SemiBold",
              textAlign: "center",
              marginTop: "5%",
              marginBottom: "10%",
              marginHorizontal: 24,
            }}
          >
            Please upload your old diaries, quick input, or documents...
          </MyAppText>

          <MyView style={styles.buttonContainer}>
            <MyPressable
              color="#faedc8"
              style={styles.button}
              onPress={() => pickImage(true)}
            >
              <Icon
                size={34}
                source={require("../../../assets/icons/Camera.png")}
                color="black"
              ></Icon>
              <MyAppText>Camera</MyAppText>
            </MyPressable>
            <MyPressable
              color="primary200"
              style={styles.button}
              onPress={() => pickImage(false)}
            >
              <Icon
                size={34}
                source={require("../../../assets/icons/Image.png")}
                color="black"
              ></Icon>
              <MyAppText>Library</MyAppText>
            </MyPressable>
          </MyView>

          <MyAppText
            style={{
              fontSize: 13,
              fontFamily: "Poppins-Light",
              textAlign: "center",
              paddingHorizontal: 24,
            }}
          >
            Note: The scanning feature is currently in beta. After scanning,
            please manually review and correct the text as needed.
          </MyAppText>

          <MyView style={styles.imageContainer}>
            <FlatList
              numColumns={2}
              scrollEnabled={false}
              data={imageUri}
              renderItem={(item) => {
                return (
                  <Image
                    style={{
                      width: 170,
                      height: 300,
                      marginHorizontal: 12,
                      marginBottom: 12,
                      borderRadius: 16,
                    }}
                    source={{ uri: item.item }}
                  />
                );
              }}
              keyExtractor={(item) => item}
            />
          </MyView>
        </MyView>
      </ScrollView>

      <MyPressable onPress={scan} color="primary500" style={styles.buttonScan}>
        <MyAppText color="white" style={styles.textButton}>
          Scan
        </MyAppText>
      </MyPressable>
    </MyView>
  );
}

export default ScanScreen;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",

    marginBottom: "5%",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    borderWidth: 2,
    paddingVertical: 8,
    marginHorizontal: 32,
    width: 100,
  },
  imageContainer: {
    marginTop: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonScan: {
    width: Dimensions.get("window").width * 0.9,
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 16,
    marginTop: 8,
  },
  textButton: {
    fontSize: 16,
    fontFamily: "Poppins-SemiBold",
  },
});
