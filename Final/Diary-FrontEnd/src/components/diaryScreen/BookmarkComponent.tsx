import { StyleSheet } from "react-native";

import MyView from "../global/MyView";
import Icon from "../global/Icon";

function BookmarkComponent({ bookmark }: any) {
  return (
    <MyView style={{ paddingLeft: 10 }}>
      <Icon
        color={!bookmark ? "none" : "primary500"}
        size={28}
        source={
          bookmark
            ? require("../../../assets/icons/bookmark.png")
            : require("../../../assets/icons/bookmark-outline.png")
        }
      />
    </MyView>
  );
}

export default BookmarkComponent;

const styles = StyleSheet.create({});
