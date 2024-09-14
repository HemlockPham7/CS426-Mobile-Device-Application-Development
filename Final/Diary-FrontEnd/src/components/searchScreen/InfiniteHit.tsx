import React from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import { useInfiniteHits } from "react-instantsearch-core";

import MyView from "../global/MyView";
import MyAppText from "../global/MyAppText";

export function InfiniteHits({ searchValue }: any) {
  const { hits, isLastPage, showMore } = useInfiniteHits({
    escapeHTML: false,
  });

  function sliceTitle(title: string) {
    if (title.length > 40) {
      return title.slice(0, 40) + "...";
    }
    return title;
  }

  return (
    <>
      {searchValue != "" && (
        <MyView
          color="white"
          style={[styles.container, hits.length != 0 && { borderWidth: 0.6 }]}
        >
          <FlatList
            scrollEnabled={false}
            data={hits}
            keyExtractor={(item) => item.objectID}
            onEndReached={() => {
              if (!isLastPage) {
                showMore();
              }
            }}
            renderItem={({ item }: any) => {
              return (
                <View style={styles.item}>
                  <MyAppText>{sliceTitle(item.title)}</MyAppText>
                </View>
              );
            }}
          />
        </MyView>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 70,
    left: 0,
    width: "100%",
    borderRadius: 12,
    zIndex: 5,
  },
  item: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
});
