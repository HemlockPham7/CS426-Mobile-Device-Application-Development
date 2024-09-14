import { StyleSheet } from "react-native";

import MyView from "../../global/MyView";
import MyPressable from "../../global/MyPressable";
import Icon from "../../global/Icon";
import { useAppSelector, useAppDispatch } from "../../../redux store/hook";
import { changeBookmark } from "../../../redux store/createDiarySlice";

function HeaderLeftButton() {
  const dispatch = useAppDispatch();
  const bookmark = useAppSelector((state) => state.createDiary.bookmark);

  function modifyBookmark() {
    dispatch(changeBookmark());
  }

  return (
    <MyPressable style={{ padding: 5 }} onPress={modifyBookmark}>
      <Icon
        color={!bookmark ? "none" : "primary500"}
        size={28}
        source={
          bookmark
            ? require("../../../../assets/icons/bookmark.png")
            : require("../../../../assets/icons/bookmark-outline.png")
        }
      />
    </MyPressable>
  );
}

export default HeaderLeftButton;

const styles = StyleSheet.create({});
