import { StyleSheet } from "react-native";
import Modal from "react-native-modal";
import { ScrollView } from "react-native-gesture-handler";

import MyView from "../../global/MyView";
import Icon from "../../global/Icon";
import OptionItem from "../OptionItem";
import OptionDeleteComponent from "./OptionDeleteComponent";
import OptionSpeakComponent from "../speaker/OptionSpeakComponent";
import OptionSharingComponent from "../sharing/OptionSharingComponent";
import OptionRemoveSharing from "../removeSharing/OptionRemoveSharing";

function ModalOptions({ isVisible, setVisibleModal, diary }: any) {
  function onPressInvite() {
    console.log("Invite diary");
  }
  function onPressCopy() {
    console.log("Copy diary");
  }
  function onPressAddGroup() {
    console.log("Add to group");
  }

  return (
    <Modal
      isVisible={isVisible}
      animationInTiming={400}
      animationOutTiming={500}
      onBackdropPress={() => setVisibleModal(false)}
      backdropOpacity={0.5}
      style={{ justifyContent: "flex-end", margin: 0 }}
    >
      <MyView isBorder color="background" style={styles.container}>
        <MyView style={styles.arrowContainer}>
          <Icon
            color="black"
            size={22}
            source={require("../../../../assets/icons/ArrowRight2.png")}
          ></Icon>
        </MyView>

        {/* <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            // alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: 12,
            marginBottom: 8,
          }}
        >
          <OptionItem
            text="Add to group"
            type="addGroup"
            onPress={onPressAddGroup}
          />
          <OptionItem text="Copy" type="copy" onPress={onPressCopy} />
          <OptionItem text="Share" type="share" onPress={onPressShare} />
          <OptionItem text="Invite" type="invite" onPress={onPressInvite} />
          <OptionDeleteComponent id={id} urlImage={urlImage} />
        </ScrollView> */}

        <MyView
          color="background"
          style={{
            justifyContent: "space-evenly",
            marginBottom: 24,
            flexDirection: "row",
            marginHorizontal: 20,
          }}
        >
          <OptionSpeakComponent diary={diary.diary} />
          {/* <OptionItem text="Copy" type="copy" onPress={onPressCopy} /> */}
          <OptionSharingComponent diary={diary} />
          <OptionRemoveSharing diary={diary} />
          {/* <OptionItem text="Invite" type="invite" onPress={onPressInvite} /> */}
          <OptionDeleteComponent
            id={diary.id}
            urlImage={diary.urlImage}
            recordings={diary.recordings}
          />
        </MyView>
      </MyView>
    </Modal>
  );
}

export default ModalOptions;

const styles = StyleSheet.create({
  container: {
    height: 170,
    paddingTop: 16,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
  },
  arrowContainer: {
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center",
    height: 10,
    marginBottom: 12,
    marginRight: 8,
  },
});
