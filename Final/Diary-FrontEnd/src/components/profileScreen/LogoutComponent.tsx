import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Modal from "react-native-modal";
import { useQueryClient } from "@tanstack/react-query";

import MyAppText from "../global/MyAppText";
import MyPressable from "../global/MyPressable";

import MyView from "../global/MyView";
import { useState } from "react";
import { auth } from "../../api/firebaseConfig/firebase";
import { signOut } from "firebase/auth";
import ModalLoading from "../global/ModalLoading";
import { nameScreen } from "../../constants/globalVariables";

function LogoutComponent() {
  const queryClient = useQueryClient();
  const [isModalVisible, setModalVisible] = useState(false);
  const [isLoading, saveIsLoading] = useState(false);

  const navigation = useNavigation<any>();

  async function logOutHandler() {
    saveIsLoading(true);
    setTimeout(function () {
      signOut(auth)
        .then(() => {
          saveIsLoading(false);
          queryClient.removeQueries();
        })
        .catch((error) => {
          // An error happened.
        });
    }, 1000);
  }
  function deleteAccount() {
    navigation.navigate(nameScreen.deleteAccount);
  }

  return (
    <>
      <MyPressable
        color="primary500"
        onPress={() => setModalVisible(true)}
        style={styles.logoutButton}
      >
        <MyAppText color="white" style={styles.logoutText}>
          Logout
        </MyAppText>
      </MyPressable>
      <MyPressable onPress={deleteAccount} style={styles.deleteAccountButton}>
        <MyAppText style={styles.deleteAccountText}>Delete Account</MyAppText>
      </MyPressable>

      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}
        animationInTiming={400}
        animationOutTiming={400}
        animationIn={"pulse"}
        backdropOpacity={0.4}
        avoidKeyboard={true}
      >
        <ModalLoading isLoading={isLoading} message="Loading"></ModalLoading>
        <MyView isBorder color="background" style={styles.modalStyle}>
          <MyAppText style={{ fontSize: 16, fontFamily: "Poppins-Medium" }}>
            Logout
          </MyAppText>

          <MyView style={styles.buttonModalContainer}>
            <MyPressable
              onPress={() => setModalVisible(false)}
              color="#ff4a4a"
              style={styles.buttonModal}
            >
              <MyAppText
                color="white"
                style={{
                  fontFamily: "Poppins-SemiBold",
                  fontSize: 13,
                }}
              >
                Cancel
              </MyAppText>
            </MyPressable>

            <MyPressable
              onPress={logOutHandler}
              color="primary500"
              style={styles.buttonModal}
            >
              <MyAppText
                color="white"
                style={{
                  fontFamily: "Poppins-SemiBold",
                  fontSize: 13,
                }}
              >
                OK
              </MyAppText>
            </MyPressable>
          </MyView>
        </MyView>
      </Modal>
    </>
  );
}

export default LogoutComponent;

const styles = StyleSheet.create({
  logoutButton: {
    borderRadius: 12,

    paddingVertical: 12,
  },
  logoutText: {
    textAlign: "center",
    fontFamily: "Poppins-SemiBold",
    fontSize: 15,
  },
  deleteAccountButton: {
    paddingVertical: 12,
  },
  deleteAccountText: {
    textAlign: "center",
    fontSize: 13,
    opacity: 0.6,
  },

  modalStyle: {
    height: 100,
    borderRadius: 12,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "space-evenly",
    marginHorizontal: 40,
    paddingHorizontal: 16,
  },
  buttonModalContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  buttonModal: {
    alignItems: "center",
    borderRadius: 12,
    paddingVertical: 8,
    width: 80,
  },
});
