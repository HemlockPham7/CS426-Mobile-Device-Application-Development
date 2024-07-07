import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Alert } from "react-native";
import { Image } from "expo-image";
import TypeTitle from "../components/TypeTitle";
import TypePrimaryLabelLabelSta from "../components/TypePrimaryLabelLabelSta";
import { FontSize, FontFamily, Border, Padding, Color } from "../../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import { useAppDispatch } from "../reduxstore/hooks";
import { signUp } from "../api/authentication/auth";
import { saveFirstNameDatabase, saveImageUrlDatabase, saveIntroductionDatabase, saveLastNameDatabase } from "../api/userData/informationUser";
import { updateFirstName, updateImage, updateIntroduction, updateLastName } from "../reduxstore/informationSlice";

function AccountSetting({ navigation, route }: any) {

  const [avatar, setAvatar] = React.useState(require("../../assets/avatar.png"));
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [phone, setPhone] = React.useState("");

  const dispatch = useAppDispatch();
  const { email, password } = route.params;

  async function register() {
    try {
      await signUp(email, password);
      try {
        await saveFirstNameDatabase(firstName);
        await saveLastNameDatabase(lastName);
        await saveIntroductionDatabase(phone);
        //await saveImageUrlDatabase(avatar);
        dispatch(updateFirstName({ firstName: firstName }));
        dispatch(updateLastName({ lastName: lastName }));
        dispatch(updateIntroduction({ introduction: phone }));
        //dispatch(updateImage({ urlImage: avatar }));
        navigation.navigate("Home");
      } catch (err) {
        Alert.alert("SIGN UP FAILED", "Please sign up again");
      }
    } catch (err) {
      Alert.alert("SIGN UP FAILED", "Please sign up again");
    }
  }

  return (
    <View style={styles.accountPersonalInformation}>

      <TouchableOpacity style={styles.typearrow}>
        <Text style={styles.title}>Information Setting</Text>
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
            placeholder={phone}
            onChangeText={(text: any) => setPhone(text)}
          />
        </View>

        <View style={[styles.typetitle, {marginTop: 16}]}>
          <Text style={[styles.name, styles.nameTypo]}>Email</Text>
          <Text style={[styles.text, styles.nameTypo]}>{email}</Text>
        </View>
      </View>

      <TypePrimaryLabelLabelSta
        buttonText="Save"
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
        onPress={register}
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

export default AccountSetting;
