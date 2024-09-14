import { StyleSheet } from "react-native";
import { useState } from "react";
import { Menu, MenuOptions, MenuTrigger } from "react-native-popup-menu";

import MyAppText from "../global/MyAppText";
import MyPressable from "../global/MyPressable";
import MyImageBackground from "../global/MyImageBackground";
import Icon from "../global/Icon";
import { getColorIcon, getImageIcon } from "../../constants/imageList";
import { getEmojiName } from "../../constants/imageList";

function EmojiIconComponent({ emoji }: any) {
  const [isModalEmoji, setIsModalEmoji] = useState(false);

  return (
    <MyPressable
      style={{
        height: 40,
        paddingLeft: 4,
        marginRight: 4,
        justifyContent: "center",
        alignItems: "flex-end",
      }}
      onPress={() => setIsModalEmoji(!isModalEmoji)}
    >
      <Icon
        size={36}
        source={getImageIcon(emoji)}
        color={getColorIcon(emoji)}
      ></Icon>
      <Menu
        onBackdropPress={() => setIsModalEmoji(false)}
        opened={isModalEmoji}
      >
        <MenuTrigger />
        <MenuOptions
          customStyles={{
            optionsContainer: {
              backgroundColor: "transparent",
              height: 150,
              width: 150,
              shadowOpacity: 0,
              elevation: 0,
            },
          }}
        >
          <MyImageBackground
            style={styles.backgroundImage}
            source={require("../../../assets/1.png")}
            color="primary500"
          >
            <MyAppText style={styles.text}>{getEmojiName(emoji)}</MyAppText>
          </MyImageBackground>
        </MenuOptions>
      </Menu>
    </MyPressable>
  );
}

export default EmojiIconComponent;

const styles = StyleSheet.create({
  backgroundImage: {
    height: 130,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
    paddingLeft: 4,
    marginTop: "-5%",
    marginLeft: "42%",
  },
  text: {
    color: "black",
    fontSize: 14,
    fontFamily: "Poppins-Medium",
  },
});
