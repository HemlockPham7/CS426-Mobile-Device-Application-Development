import React, { useLayoutEffect, useState } from "react";
import {
  InputAccessoryView,
  Keyboard,
  Platform,
  StyleSheet,
} from "react-native";
import { Configure, useInfiniteHits } from "react-instantsearch-core";
import { ScrollView } from "react-native-gesture-handler";

import { SearchBox } from "../../components/searchScreen/searchScreen/SearchBox";
import AdvancedSearchComponent from "../../components/searchScreen/searchScreen/AdvancedSearchComponent";
import MyView from "../../components/global/MyView";
import MyPressable from "../../components/global/MyPressable";
import MyAppText from "../../components/global/MyAppText";
import Filter from "../../components/searchScreen/searchScreen/Filter";
import { nameScreen } from "../../constants/globalVariables";
import { GeneralDiary } from "../../ClassObject/DiaryClass";
import { InfiniteHits } from "../../components/searchScreen/InfiniteHit";
import { auth } from "../../api/firebaseConfig/firebase";
import { useAppSelector } from "../../redux store/hook";

function SearchScreen({ navigation }: any) {
  const diaries = useAppSelector((state) => state.diaries.diaries);
  const [isAdvancedSearch, setIsAdvancedSearch] = useState(true);
  const [filterMoods, setFilterMoods] = useState<number[]>([]);
  const [searchValue, setSearchValue] = useState("");

  const { hits } = useInfiniteHits({
    escapeHTML: false,
  });

  function navigateResultScreen() {
    Keyboard.dismiss();

    let generalDiaries: GeneralDiary[] = [];

    if (isAdvancedSearch) {
      hits.map((hit: any) => {
        generalDiaries.push(
          new GeneralDiary(
            hit.objectID,
            hit.timestamp,
            hit.title,
            hit.hashTag,
            hit.emoji,
            hit.bookmark,
            false,
            []
          )
        );
      });
    } else {
      const filteredDiaries = diaries.filter((diary) => {
        if (filterMoods.length > 0 && !filterMoods.includes(diary.emoji))
          return false;

        const pattern = new RegExp(searchValue, "i");

        const titleMatches = pattern.test(diary.title);
        const hashtagMatches = diary.hashTag.some((tag) => pattern.test(tag));

        return titleMatches || hashtagMatches;
      });
      generalDiaries = filteredDiaries;
    }

    navigation.navigate(nameScreen.resultSearchScreen, {
      hits: generalDiaries,
      isAdvancedSearch: isAdvancedSearch,
    });
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <MyPressable
          onPress={navigateResultScreen}
          isStylePress
          color="primary200"
          style={styles.doneButton}
        >
          <MyAppText style={{ fontFamily: "Poppins-Medium" }}>Search</MyAppText>
        </MyPressable>
      ),
    });
  }, [navigateResultScreen]);

  const moodFilter =
    filterMoods.length == 0
      ? ""
      : "AND " +
        "(" +
        filterMoods.map((mood) => `emoji:${mood}`).join(" OR ") +
        ")";

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        alwaysBounceVertical={false}
      >
        <MyPressable
          style={styles.container}
          // onPress={() => Keyboard.dismiss()}
        >
          <Configure filters={`uid:${auth.currentUser?.uid} ${moodFilter}`} />
          <MyView>
            <SearchBox
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />

            <InfiniteHits searchValue={searchValue} />

            <AdvancedSearchComponent
              isAdvancedSearch={isAdvancedSearch}
              setIsAdvancedSearch={setIsAdvancedSearch}
            />
            <Filter filterMoods={filterMoods} setFilterMoods={setFilterMoods} />
          </MyView>
        </MyPressable>
      </ScrollView>

      {Platform.OS === "ios" && (
        <InputAccessoryView nativeID={"searchBoxID"}>
          <MyView style={{ paddingHorizontal: 12, marginBottom: 12 }}>
            <MyPressable
              color="primary500"
              style={styles.buttonSearch}
              isStylePress
              onPress={navigateResultScreen}
            >
              <MyAppText
                color="white"
                style={{ fontSize: 16, fontFamily: "Poppins-SemiBold" }}
              >
                Search
              </MyAppText>
            </MyPressable>
          </MyView>
        </InputAccessoryView>
      )}
    </>
  );
}

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    marginHorizontal: 16,
    marginBottom: "12%",
  },
  doneButton: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 12,
  },

  buttonSearch: {
    alignItems: "center",
    borderRadius: 16,
    paddingVertical: 16,
    borderColor: "black",
    zIndex: 10000,
  },
});
