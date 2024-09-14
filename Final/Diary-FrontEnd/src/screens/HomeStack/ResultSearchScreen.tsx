import React, { useEffect, useLayoutEffect, useState } from "react";
import { StyleSheet } from "react-native";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch } from "react-instantsearch-core";
import { ScrollView } from "react-native-gesture-handler";

import MyView from "../../components/global/MyView";
import MyAppText from "../../components/global/MyAppText";
import Icon from "../../components/global/Icon";
import { useAppSelector } from "../../redux store/hook";
import { GeneralDiary } from "../../ClassObject/DiaryClass";
import DiaryItem2 from "../../components/homeScreen/DiaryItem2";
import DiaryItem from "../../components/homeScreen/DiaryItem";

const searchClient = algoliasearch(
  "51LT7H7B48",
  "2accc3eb8d7152201e6ebfe82767000d"
);

function ResultSearchScreen({ navigation, route }: any) {
  const { hits, isAdvancedSearch } = route.params;
  const [searchResults, setSearchResults] = useState<GeneralDiary[]>([]);

  useEffect(() => {
    setSearchResults(hits);
  }, [hits]);

  return (
    <InstantSearch searchClient={searchClient} indexName="thesis">
      {isAdvancedSearch ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical={false}
          contentContainerStyle={{
            paddingHorizontal: 16,
            paddingTop: 12,
            paddingBottom: "12%",
          }}
        >
          {searchResults.map((diary) => (
            <DiaryItem
              key={diary?.id}
              id={diary?.id}
              timestamp={diary?.timestamp as number}
              title={diary?.title}
              hashTag={diary?.hashTag}
              emoji={diary?.emoji}
              bookmark={diary?.bookmark}
            />
          ))}
          {searchResults.length == 0 && (
            <MyView style={styles.notFound}>
              <Icon
                color="none"
                size={350}
                source={require("../../../assets/icons/resultNotFound.png")}
              />
              <MyAppText style={{ fontSize: 20, fontFamily: "Poppins-Medium" }}>
                Result Not Found
              </MyAppText>
            </MyView>
          )}
        </ScrollView>
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical={false}
          contentContainerStyle={{
            paddingHorizontal: 16,
            paddingTop: 12,
            paddingBottom: "12%",
          }}
        >
          {searchResults.map((diary) => (
            <DiaryItem2
              key={diary.id}
              id={diary.id}
              timestamp={diary.timestamp}
              title={diary.title}
              hashTag={diary.hashTag}
              emoji={diary.emoji}
              bookmark={diary.bookmark}
            />
          ))}
          {searchResults.length == 0 && (
            <MyView style={styles.notFound}>
              <Icon
                color="none"
                size={350}
                source={require("../../../assets/icons/resultNotFound.png")}
              />
              <MyAppText style={{ fontSize: 20, fontFamily: "Poppins-Medium" }}>
                Result Not Found
              </MyAppText>
            </MyView>
          )}
        </ScrollView>
      )}
    </InstantSearch>
  );
}

export default ResultSearchScreen;

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

  notFound: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
});
