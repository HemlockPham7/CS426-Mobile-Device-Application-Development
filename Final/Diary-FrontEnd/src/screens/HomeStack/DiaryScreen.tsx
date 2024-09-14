import { StyleSheet } from "react-native";
import { useState, useEffect, useLayoutEffect } from "react";
import { SimpleLineIcons } from "@expo/vector-icons";
import { useQuery } from "@tanstack/react-query";
import { ScrollView } from "react-native-gesture-handler";
import Rain from "rainy-background-reactnative";

import MyView from "../../components/global/MyView";
import MyAppText from "../../components/global/MyAppText";
import MyPressable from "../../components/global/MyPressable";
import ModalLoading from "../../components/global/ModalLoading";
import TopComponent from "../../components/diaryScreen/TopComponent";
import DisplayImagesComponent from "../../components/diaryScreen/DisplayImagesComponent";
import Icon from "../../components/global/Icon";
import ModalOptions from "../../components/diaryScreen/options/ModalOptions";
import { getDetailedDiaryFromDatabase } from "../../api/userData/diary";
import { DetailDirary } from "../../ClassObject/DiaryClass";
import { nameScreen } from "../../constants/globalVariables";
import { useAppDispatch, useAppSelector } from "../../redux store/hook";
import { initCreateDiary } from "../../redux store/createDiarySlice";

function DiaryScreen({ route, navigation }: any) {
  const dispatch = useAppDispatch();
  const { id, newDiary } = route.params;
  const { isRainy } = useAppSelector((state) => state.setting);
  const { data, isLoading, isPending, isError, error, isSuccess } = useQuery({
    queryKey: ["detailed-diaries", id],
    queryFn: () => getDetailedDiaryFromDatabase(id),
  });

  const [isVisibleModalOptions, setVisibleModalModalOptions] = useState(false);
  const [detailedDiary, setDetailedDiary] = useState<DetailDirary>();

  useEffect(() => {
    if (newDiary) {
      setDetailedDiary(route.params?.newDiary);
    }
  }, [route.params?.newDiary]);

  useLayoutEffect(() => {
    navigation.setOptions({
      // headerTitle:()=>  <EmojiIconComponent emoji={detailedDiary?.emoji} />,
      headerRight: () => {
        return (
          <MyView style={{ flexDirection: "row" }}>
            <MyPressable onPress={onPressEditScreen} style={styles.buttonEdit}>
              <Icon
                color="black"
                size={28}
                source={require("../../../assets/icons/Edit_outline.png")}
              ></Icon>
            </MyPressable>
            <MyPressable
              style={{
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                padding: 4,
              }}
              onPress={() => setVisibleModalModalOptions(true)}
            >
              <SimpleLineIcons name="options" size={24} color="black" />
            </MyPressable>
          </MyView>
        );
      },
    });
  }, [detailedDiary]);

  useEffect(() => {
    if (data) {
      const diaryDetail = new DetailDirary(
        data.id,
        data.timestamp,
        data.title,
        data.diary,
        data.hashTag ? data.hashTag : [],
        data.urlImage ? data.urlImage : [],
        data.emoji,
        data.recordings ? data.recordings : [],
        data.locations ? data.locations : [],
        data.bookmark
      );

      setDetailedDiary(diaryDetail);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [isError]);

  function onPressEditScreen() {
    if (detailedDiary) {
      dispatch(initCreateDiary(detailedDiary));
      navigation.navigate(nameScreen.edit, { detailedDiary: detailedDiary });
    }
  }

  return (
    <MyView style={styles.container}>
      {isRainy == 1 && (
        <>
         {detailedDiary?.emoji == 2 && (
            <Rain fullScreen rainCount={90} fallSpeed="slow" />
          )}
           {detailedDiary?.emoji == 1 && (
            <Rain fullScreen rainCount={90} fallSpeed="slow" />
          )}
          {detailedDiary?.emoji == 3 && (
            <Rain fullScreen rainCount={90} fallSpeed="slow" />
          )}
        </>
      )}

      <ScrollView
        alwaysBounceVertical={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 50,
          justifyContent: "flex-end",
        }}
      >
        {detailedDiary && (
          <>
            <TopComponent
              title={detailedDiary?.title}
              timestamp={detailedDiary?.timestamp}
              hashTag={detailedDiary?.hashTag}
              id={detailedDiary?.id}
              emoji={detailedDiary?.emoji}
              bookmark={detailedDiary?.bookmark}
              recordings={detailedDiary?.recordings}
              locations={detailedDiary?.locations}
            />

            <MyAppText style={styles.textDiary}>
              {detailedDiary?.diary}
            </MyAppText>

            <DisplayImagesComponent urlImage={detailedDiary?.urlImage} />
          </>
        )}
      </ScrollView>

      <ModalLoading
        isLoading={isPending || isLoading}
        message="Please wait"
      ></ModalLoading>

      {detailedDiary && (
        <ModalOptions
          isVisible={isVisibleModalOptions}
          setVisibleModal={setVisibleModalModalOptions}
          diary={detailedDiary}
        />
      )}
    </MyView>
  );
}

export default DiaryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  textDiary: {
    color: "black",
    letterSpacing: 1,
    fontSize: 14,
    fontFamily: "Poppins-Medium",
  },
  buttonEdit: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
  },
});
