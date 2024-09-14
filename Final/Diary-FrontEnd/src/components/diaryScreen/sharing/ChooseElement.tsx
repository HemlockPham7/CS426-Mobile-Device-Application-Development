import { StyleSheet } from "react-native";

import MyPressable from "../../global/MyPressable";
import Icon from "../../global/Icon";
import MyAppText from "../../global/MyAppText";

function ChooseElement({ id, elements, setElements }: any) {
  let element = "Title";
  if (id === 1) element = "Title";
  else if (id == 2) element = "Content diary";
  else if (id == 3) element = "Hashtag";
  else if (id == 4) element = "Images";
  else if (id == 5) element = "Recordings";
  else if (id == 6) element = "Location";
  else if (id == 7) element = "Emoji";

  let image = require("../../../../assets/icons/top.png");
  if (id === 1) image = require("../../../../assets/icons/top.png");
  else if (id == 2)
    image = require("../../../../assets/icons/copy-writing.png");
  else if (id == 3) image = require("../../../../assets/icons/hashtag.png");
  else if (id == 4) image = require("../../../../assets/icons/image2.png");
  else if (id == 5) image = require("../../../../assets/icons/rec.png");
  else if (id == 6) image = require("../../../../assets/icons/earth-grid.png");
  else if (id == 7) image = require("../../../../assets/emoji/in-love.png");

  function onPressHandler() {
    if (elements.includes(id)) {
      setElements(elements.filter((element: number) => element !== id));
    } else {
      setElements([...elements, id]);
    }
  }

  return (
    <MyPressable
      color={elements.includes(id) ? "primary200" : "white"}
      onPress={onPressHandler}
      style={styles.chooseElement}
    >
      <Icon color="none" size={24} source={image}></Icon>
      <MyAppText style={styles.textElement}>{element}</MyAppText>
    </MyPressable>
  );
}

export default ChooseElement;

const styles = StyleSheet.create({
  chooseElement: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1.4,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
  },
  textElement: {
    fontSize: 14,
    marginLeft: 10,
    letterSpacing: 0.5,
  },
});
