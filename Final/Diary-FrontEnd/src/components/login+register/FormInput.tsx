import {
  View,
  StyleSheet,
  TextInput,
  Image,
  Pressable,
} from "react-native";

function FormInput({
  title,
  placeholder,
  secure,
  onChangeText,
  onPress,
  showPassword,
}: any) {
  function opPressShowPassword() {
    onPress();
  }
  return (
    <View style={styles.formInputContainer}>
      {title == "Email" ? (
        <Image
          style={styles.icon}
          source={require("../../../assets/icons/Message.png")}
        />
      ) : (
        <Image
          style={styles.icon}
          source={require("../../../assets/icons/Lock.png")}
        />
      )}
      <View style={styles.textInputContainer}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={"#586e85"}
          style={styles.textInput}
          secureTextEntry={secure}
          onChangeText={onChangeText}
          autoCapitalize="none"
          autoCorrect={false}
        ></TextInput>
      </View>

      {title != "Email" && (
        <Pressable onPress={onPress}>
          {showPassword ? (
            <Image
              style={styles.icon}
              source={require("../../../assets/icons/Show.png")}
            />
          ) : (
            <Image
              style={styles.icon}
              source={require("../../../assets/icons/Hide.png")}
            />
          )}
        </Pressable>
      )}
    </View>
  );
}

export default FormInput;

const styles = StyleSheet.create({
  formInputContainer: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1.6,
    borderRadius: 12,

    paddingHorizontal: 8,
  },
  icon: {
    height: 22,
    width: 22,
  },
  textInputContainer: {
    overflow: "hidden",
    flex: 1,
  },
  textInput: {
    fontFamily: "Poppins-SemiBold",
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
});
