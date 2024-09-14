import { StyleSheet } from "react-native";

import MyPressable from "../../global/MyPressable";
import Icon from "../../global/Icon";
import MyAppText from "../../global/MyAppText";
import MyView from "../../global/MyView";

function ChooseEmail({ email, listShareEmail, setListShareEmail }: any) {
  function onPressHandler() {
    if (listShareEmail.includes(email)) {
      setListShareEmail(
        listShareEmail.filter((_email: number) => _email !== email)
      );
    } else {
      setListShareEmail([...listShareEmail, email]);
    }
  }

  return (
    <MyView color="primary200" style={styles.chooseElement}>
      <MyAppText style={styles.textElement}>{email}</MyAppText>
      <MyPressable onPress={onPressHandler} style={{ paddingLeft: 20 }}>
        <Icon
          color="black"
          size={24}
          source={require("../../../../assets/icons/delete.png")}
        />
      </MyPressable>
    </MyView>
  );
}

export default ChooseEmail;

const styles = StyleSheet.create({
  chooseElement: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderRadius: 16,
    marginBottom: 16,
  },
  textElement: {
    fontSize: 15,
    marginLeft: 10,
    letterSpacing: 0.5,
    fontFamily: "Poppins-Medium",
  },
});
