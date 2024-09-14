import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useIsFocused } from "@react-navigation/native";

import MyView from "../../components/global/MyView";
import SwitchModeView from "../../components/shareScreen/SwitchModeView";
import { getSharedDiaries } from "../../api/sharing/sharingAPI";
import { useAppSelector } from "../../redux store/hook";
import ModalLoading from "../../components/global/ModalLoading";
import { GeneralDiary, SharedDiary } from "../../ClassObject/DiaryClass";
import FriendDiaryItem from "../../components/shareScreen/FriendDiaryItem";
import SharedDiaryItem from "../../components/shareScreen/SharedDiaryItem";

function SharedDiariesScreen({ navigation }: any) {
  const isFocused = useIsFocused();
  const email = useAppSelector((state) => state.information.email);
  const diaries = useAppSelector((state) => state.diaries.diaries);

  const [selectedMode, setSeletedMode] = useState(0);
  const [listFriendsDiaries, setListFriendsDiaries] = useState<SharedDiary[]>(
    []
  );
  const [listSharedDiaries, setListSharedDiaries] = useState<GeneralDiary[]>(
    []
  );

  const { data, isLoading, isPending, isError, error, isSuccess } = useQuery({
    queryKey: ["shared-diaries", email],
    queryFn: () => getSharedDiaries(email),
  });

  useEffect(() => {
    if (data) {
      let tmp: SharedDiary[] = [];
      data.forEach((doc) => {
        const {
          id,
          timestamp,
          title,
          diary,
          hashTag,
          urlImage,
          recordings,
          emoji,
          locations,
          uid,
          from,
        } = doc.data();
        tmp.push(
          new SharedDiary(
            id,
            timestamp,
            title,
            diary,
            hashTag,
            urlImage,
            emoji,
            recordings,
            locations,
            uid,
            from
          )
        );
      });

      setListFriendsDiaries(tmp);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isFocused) {
      let sharedDiaries = diaries.filter((diary) => diary.share);
      setListSharedDiaries(sharedDiaries);
    }
  }, [diaries, isFocused, selectedMode]);

  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [isError]);

  return (
    <MyView color="background" style={{ flex: 1, paddingTop: 12 }}>
      <ModalLoading isLoading={isLoading || isPending} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        alwaysBounceVertical={false}
        contentContainerStyle={{ paddingBottom: 40, marginHorizontal: 16 }}
      >
        <SwitchModeView
          selectedMode={selectedMode}
          setSeletedMode={setSeletedMode}
        />
        {selectedMode === 0 ? (
          <MyView>
            {listFriendsDiaries.map((diary) => {
              return <FriendDiaryItem key={diary.id} diary={diary} />;
            })}
          </MyView>
        ) : (
          <MyView>
            {listSharedDiaries.map((diary) => {
              return <SharedDiaryItem key={diary.id} diary={diary} />;
            })}
          </MyView>
        )}
      </ScrollView>
    </MyView>
  );
}

export default SharedDiariesScreen;

const styles = StyleSheet.create({});
