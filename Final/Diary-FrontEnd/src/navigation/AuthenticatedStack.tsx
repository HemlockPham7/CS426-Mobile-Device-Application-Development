import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

import HomeTab from "./HomeTab";
import { getUserDatabase } from "../api/userData/informationUser";
import { getGeneralDiaryFromDatabase } from "../api/userData/diary";
import ModalLoading from "../components/global/ModalLoading";
import { useAppDispatch } from "../redux store/hook";
import {
  updateEmail,
  updateImage,
  updateIntroduction,
  updateName,
} from "../redux store/informationSlice";
import { GeneralDiary } from "../ClassObject/DiaryClass";
import { initialDiaries } from "../redux store/diarySlice";
import LoadingLayout from "../components/login+register/LoadingLayout";

function AuthenticatedStack() {
  const {
    isPending: isPendingInformationUser,
    isSuccess: isSuccessInformationUser,
    data: dataInformationUser,
    error: errorInformationUser,
    isError: isErrorInformationUser,
  } = useQuery({
    queryKey: ["user-information"],
    queryFn: getUserDatabase,
  });

  const {
    isPending: isPendingGeneralDiaries,
    isSuccess: isSuccessGeneralDiaries,
    data: dataGeneralDiaries,
    error: errorGeneralDiaries,
    isError: isErrorGeneralDiaries,
  } = useQuery({
    queryKey: ["general-diaries"],
    queryFn: getGeneralDiaryFromDatabase,
  });

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (dataInformationUser) {
      dispatch(
        updateIntroduction({ introduction: dataInformationUser.introduction })
      );
      dispatch(updateImage({ urlImage: dataInformationUser.urlImage }));
      dispatch(updateEmail({ email: dataInformationUser.email }));
      dispatch(updateName({ name: dataInformationUser.name }));
    }
  }, [isSuccessInformationUser]);

  useEffect(() => {
    if (dataGeneralDiaries) {
      let newDiaries: GeneralDiary[] = [];

      dataGeneralDiaries.forEach((doc) => {
        const {
          id,
          title,
          hashTag,
          emoji,
          timestamp,
          bookmark,
          share,
          whoShare,
        } = doc.data();
        newDiaries.push(
          new GeneralDiary(
            id,
            timestamp,
            title,
            hashTag,
            emoji,
            bookmark,
            share,
            whoShare
          )
        );
      });
      dispatch(initialDiaries(newDiaries));
    }
  }, [isSuccessGeneralDiaries]);

  useEffect(() => {
    if (errorGeneralDiaries) {
      console.log(errorGeneralDiaries);
    } else if (errorInformationUser) {
      console.log(errorInformationUser);
    }
  }, [isErrorInformationUser, isErrorGeneralDiaries]);

  if (isPendingGeneralDiaries || isPendingInformationUser)
    return <LoadingLayout />;

  return <HomeTab />;
}

export default AuthenticatedStack;
