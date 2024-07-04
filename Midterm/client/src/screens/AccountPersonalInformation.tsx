import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import Tabbar from "../components/Tabbar";
import TypeTitle from "../components/TypeTitle";
import TypePrimaryLabelLabelSta from "../components/TypePrimaryLabelLabelSta";
import { FontSize, FontFamily, Border, Padding, Color } from "../../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const AccountPersonalInformation = () => {
  const navigation = useNavigation<any>();

  function navigateAccountScreen() {
    navigation.navigate("Account");
  }

  const [avatar, setAvatar] = React.useState(require("../../assets/avatar.png"));
  const [firstName, setFirstName] = React.useState("Victoriaaaa");
  const [lastName, setLastName] = React.useState("Yoker");
  const [phone, setPhone] = React.useState("+380 12 345 67 89");
  const [email, setEmail] = React.useState("victoria.yoker@gmail.com");

  const handleSaveChanges = () => {

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
        <TypeTitle
          name1="First Name"
          text={firstName}
          onChangeText={setFirstName}
          typeTitlePosition="unset"
          typeTitleMarginTop="unset"
          typeTitleWidth={343}
          typeTitleMarginLeft="unset"
        />
        <TypeTitle
          name1="Last Name"
          text={lastName}
          onChangeText={setLastName}
          typeTitlePosition="unset"
          typeTitleMarginTop={16}
          typeTitleWidth={343}
          typeTitleMarginLeft="unset"
        />
        <TypeTitle
          name1="Phone"
          text={phone}
          onChangeText={setPhone}
          typeTitlePosition="unset"
          typeTitleMarginTop={16}
          typeTitleWidth={343}
          typeTitleMarginLeft="unset"
        />
        <TypeTitle
          name1="Email"
          text={email}
          onChangeText={setEmail}
          typeTitlePosition="unset"
          typeTitleMarginTop={16}
          typeTitleWidth={343}
          typeTitleMarginLeft="unset"
        />
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
});

export default AccountPersonalInformation;
