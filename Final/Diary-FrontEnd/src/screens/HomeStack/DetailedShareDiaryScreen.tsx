import { StyleSheet } from "react-native";
import { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";

import MyView from "../../components/global/MyView";
import MyAppText from "../../components/global/MyAppText";
import TopComponent from "../../components/shareScreen/TopComponent";
import DisplayImagesComponent from "../../components/diaryScreen/DisplayImagesComponent";
import ModalOptions from "../../components/diaryScreen/options/ModalOptions";
import { useAppDispatch } from "../../redux store/hook";

function DetailedShareDiaryScreen({ route, navigation }: any) {
  const dispatch = useAppDispatch();
  const { diary } = route.params;

  const [isVisibleModalOptions, setVisibleModalModalOptions] = useState(false);

  return (
    <MyView style={styles.container}>
      <ScrollView
        alwaysBounceVertical={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 50,
          justifyContent: "flex-end",
        }}
      >
        {diary && (
          <>
            <TopComponent
              title={diary?.title}
              timestamp={diary?.timestamp}
              hashTag={diary?.hashTag}
              emoji={diary?.emoji}
              from={diary?.from}
              recordings={diary?.recordings}
              locations={diary?.locations}
            />

            <MyAppText style={styles.textDiary}>{diary?.diary}</MyAppText>

            <DisplayImagesComponent urlImage={diary?.urlImage} />
          </>
        )}
      </ScrollView>

      {diary && (
        <ModalOptions
          isVisible={isVisibleModalOptions}
          setVisibleModal={setVisibleModalModalOptions}
          diary={diary}
        />
      )}
    </MyView>
  );
}

export default DetailedShareDiaryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  textDiary: {
    color: "black",
    letterSpacing: 0.5,
    fontSize: 14,
    fontFamily: "Poppins-Light",
  },
  buttonEdit: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
  },
});
