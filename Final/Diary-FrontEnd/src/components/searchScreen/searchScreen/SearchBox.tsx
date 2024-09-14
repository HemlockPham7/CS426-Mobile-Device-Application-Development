import React, { useRef } from "react";
import { StyleSheet, TextInput } from "react-native";
import { useSearchBox } from "react-instantsearch-core";

import MyView from "../../global/MyView";
import Icon from "../../global/Icon";

export function SearchBox({ searchValue, setSearchValue }: any) {
  const { query, refine } = useSearchBox();

  const inputRef = useRef<TextInput>(null);

  function setQuery(newQuery: any) {
    setSearchValue(newQuery);
    refine(newQuery);
  }

  if (query !== searchValue && !inputRef.current?.isFocused()) {
    setSearchValue(query);
  }

  return (
    <>
      <MyView color="white" style={styles.container}>
        <Icon
          size={20}
          color="black"
          source={require("../../../../assets/icons/search.png")}
        />
        <TextInput
          ref={inputRef}
          style={styles.input}
          value={searchValue}
          onChangeText={setQuery}
          clearButtonMode="while-editing"
          placeholder="Search diaries"
          placeholderTextColor={"#8a8a8a"}
          autoCapitalize="none"
          autoCorrect={false}
          spellCheck={false}
          autoComplete="off"
          inputAccessoryViewID={"searchBoxID"}
        />
      </MyView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    paddingLeft: 12,
    marginTop: 12,
  },
  input: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
    fontSize: 16,
  },
});
