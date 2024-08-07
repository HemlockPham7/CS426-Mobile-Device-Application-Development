import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Alert } from "react-native";
import { Image } from "expo-image";
import Tabbar from "../components/Tabbar";
import TypeTitle from "../components/TypeTitle";
import TypePrimaryLabelLabelSta from "../components/TypePrimaryLabelLabelSta";
import { FontSize, FontFamily, Border, Padding, Color } from "../../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import { useAppDispatch, useAppSelector } from "../reduxstore/hooks";
import { updateFirstName, updateIntroduction, updateLastName } from "../reduxstore/informationSlice";
import { saveFirstNameDatabase, saveIntroductionDatabase, saveLastNameDatabase } from "../api/userData/informationUser";

const AccountPersonalInformation = () => {
  const dispatch = useAppDispatch();

  const navigation = useNavigation<any>();

  function navigateAccountScreen() {
    navigation.navigate("Account");
  }

  const firstName0 = useAppSelector((state) => state.information.firstName);
  const lastName0 = useAppSelector((state) => state.information.lastName);
  const introduction0 = useAppSelector((state) => state.information.introduction);
  const email0 = useAppSelector((state) => state.information.email);

  const [avatar, setAvatar] = React.useState(require("../../assets/avatar.png"));
  const [firstName, setFirstName] = React.useState(firstName0);
  const [lastName, setLastName] = React.useState(lastName0);
  const [introduction, setIntroduction] = React.useState(introduction0);

  async function handleSaveChanges() {
    try {
      await saveFirstNameDatabase(firstName);
      await saveLastNameDatabase(lastName);
      await saveIntroductionDatabase(introduction);
      //await saveImageUrlDatabase(avatar);
      dispatch(updateFirstName({ firstName: firstName }));
      dispatch(updateLastName({ lastName: lastName }));
      dispatch(updateIntroduction({ introduction: introduction }));
      //dispatch(updateImage({ urlImage: avatar }));
      navigation.navigate("Account");
    } catch (err) {
      Alert.alert("Update Fail");
    }
  };

  return (
    <View style={styles.accountPersonalInformation}>
      <Tabbar />

      <TouchableOpacity style={styles.typearrow} onPress={navigateAccountScreen}>
        <Image
          style={styles.chevronIcon}
          contentFit="cover"
          source={require("../../assets/chevron.png")}
        />
        <Text style={styles.title}>Personal Information</Text>
      </TouchableOpacity>

      <View style={styles.accountItem}>
        <View style={styles.typetitle}>
          <Text style={[styles.name, styles.nameTypo]}>First Name</Text>
          <TextInput 
            style={[styles.text, styles.nameTypo]}
            placeholder={firstName}
            onChangeText={(text: any) => setFirstName(text)}
          />
        </View>

        <View style={[styles.typetitle, {marginTop: 16}]}>
          <Text style={[styles.name, styles.nameTypo]}>Last Name</Text>
          <TextInput 
            style={[styles.text, styles.nameTypo]}
            placeholder={lastName}
            onChangeText={(text: any) => setLastName(text)}
          />
        </View>

        <View style={[styles.typetitle, {marginTop: 16}]}>
          <Text style={[styles.name, styles.nameTypo]}>Phone</Text>
          <TextInput 
            style={[styles.text, styles.nameTypo]}
            placeholder={introduction}
            onChangeText={(text: any) => setIntroduction(text)}
          />
        </View>

        <View style={[styles.typetitle, {marginTop: 16}]}>
          <Text style={[styles.name, styles.nameTypo]}>Email</Text>
          <Text style={[styles.text, styles.nameTypo]}>{email0}</Text>
        </View>
      </View>

      <TypePrimaryLabelLabelSta
        buttonText="Save changes"
        typePrimaryLabelLabelStaPosition="absolute"
        typePrimaryLabelLabelStaTop={646}
        typePrimaryLabelLabelStaLeft={16}
        typePrimaryLabelLabelStaWidth={343}
        typePrimaryLabelLabelStaAlignSelf="unset"
        typePrimaryLabelLabelStaBackgroundColor="#fea36b"
        typePrimaryLabelLabelStaMarginTop="unset"
        typePrimaryLabelLabelStaBorderRadius={20}
        typePrimaryLabelLabelStaPaddingHorizontal="unset"
        typePrimaryLabelLabelStaPaddingVertical="unset"
        typePrimaryLabelLabelStaMarginLeft="unset"
        typePrimaryLabelLabelStaTextColor="#fff"
        onPress={handleSaveChanges}
      />

      <View style={[styles.avatar, styles.avatarLayout]}>
        <Image
          style={[styles.avatarIcon, styles.avatarLayout]}
          contentFit="cover"
          source={avatar}
        />

        <TouchableOpacity style={styles.photo}>
          <Image
            style={styles.systemIcon}
            contentFit="cover"
            source={require("../../assets/system.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  avatarLayout: {
    height: 120,
    width: 120,
    position: "absolute",
  },
  accountItem: {
    top: 254,
    left: 16,
    position: "absolute",
  },
  avatarIcon: {
    top: 0,
    left: 0,
    borderRadius: Border.br_xl,
  },
  systemIcon: {
    width: 28,
    height: 28,
    overflow: "hidden",
  },
  photo: {
    right: 0,
    bottom: 0,
    borderRadius: Border.br_6xs,
    flexDirection: "row",
    padding: Padding.p_11xs,
    position: "absolute",
    backgroundColor: Color.lightBackgroundScreen,
  },
  avatar: {
    top: 102,
    left: 128,
  },
  accountPersonalInformation: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.lightBackgroundScreen,
  },
  title: {
    flex: 1,
    fontSize: FontSize.headingH4_size,
    lineHeight: 26,
    fontWeight: "600",
    fontFamily: FontFamily.headingH4,
    color: Color.lightUIElementContrast,
    textAlign: "center",
  },
  chevronIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  typearrow: {
    width: 375,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: Padding.p_base,
    paddingTop: Padding.p_5xs,
    paddingRight: Padding.p_21xl,
    top: 44,
    left: 0,
    position: "absolute",
  },
  nameTypo: {
    textAlign: "left",
    fontFamily: FontFamily.bodyMRegular,
  },
  name: {
    fontSize: FontSize.bodySMedium_size,
    lineHeight: 16,
    color: Color.lightTextSecondary,
  },
  text: {
    fontSize: FontSize.bodyXLRegular_size,
    lineHeight: 22,
    color: Color.lightUIElementContrast,
    marginTop: 4,
  },
  typetitle: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.lightTextWhite,
    width: 343,
    height: 54,
    paddingHorizontal: Padding.p_base,
    paddingTop: Padding.p_9xs,
    paddingBottom: Padding.p_base,
  },
});

export default AccountPersonalInformation;
