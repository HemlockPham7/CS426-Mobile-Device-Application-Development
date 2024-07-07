import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import Facility1 from "../components/Facility1";
import Tabbar2 from "../components/Tabbar2";
import SearchField from "../components/SearchField";
import { Border, FontFamily, Color, FontSize, Padding } from "../../GlobalStyles";
import { getUserDatabase } from "../api/userData/informationUser";
import { useAppDispatch } from "../reduxstore/hooks";
import { updateEmail, updateFirstName, updateImage, updateIntroduction, updateLastName } from "../reduxstore/informationSlice";

const Home = () => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    async function test() {
      const dataInformationUser = await getUserDatabase();
      dispatch(
        updateIntroduction({ introduction: dataInformationUser.introduction })
      );
      // dispatch(updateImage({ urlImage: dataInformationUser.urlImage }));
      dispatch(updateEmail({ email: dataInformationUser.email }));
      dispatch(updateFirstName({ firstName: dataInformationUser.firstName }));
      dispatch(updateLastName({ lastName: dataInformationUser.lastName }));
      console.log(dataInformationUser);
    }
    test();
  }, []);

  return (
    <View style={styles.home}>
      <View style={styles.content}>
        <Facility1 />
      </View>
      <Tabbar2 />
      <SearchField
        searchFieldPosition="absolute"
        searchFieldTop={110}
        searchFieldLeft={16}
      />
      <Text style={[styles.exploreTheBeautiful, styles.textTypo]}>
        Explore the beautiful world!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    fontFamily: FontFamily.bodySMedium,
    fontWeight: "500",
  },
  content: {
    top: 174,
    left: 16,
    height: 564,
    position: "absolute",
  },
  exploreTheBeautiful: {
    top: 68,
    left: 14,
    fontSize: FontSize.headingH4_size,
    lineHeight: 26,
    textAlign: "left",
    color: Color.lightUIElementContrast,
    position: "absolute",
  },
  home: {
    backgroundColor: Color.lightBackgroundScreen,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Home;
