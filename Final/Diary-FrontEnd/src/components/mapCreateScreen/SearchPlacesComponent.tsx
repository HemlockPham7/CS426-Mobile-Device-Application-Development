import { StyleSheet } from "react-native";
import { APIKEY_GOOGLE } from "@env";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import MyView from "../global/MyView";
import MyPressable from "../global/MyPressable";
import MyAppText from "../global/MyAppText";
import Icon from "../global/Icon";

function SearchPlacesComponent({ setModalVisible, searchHandler }: any) {
  function handleSearch(data: any, detail: any) {
    searchHandler(
      detail.geometry.location.lat,
      detail.geometry.location.lng,
      data.structured_formatting.main_text
    );
  }

  return (
    <MyView style={styles.topContainer}>
      <MyPressable
        color="white"
        style={styles.buttonBack}
        onPress={() => setModalVisible(false)}
      >
        <Icon
          size={35}
          source={require("../../../assets/icons/ArrowLeft2.png")}
        ></Icon>
      </MyPressable>

      <MyView style={styles.searchContainer}>
        <GooglePlacesAutocomplete
          placeholder="Search your favorite place"
          onFail={(error) => console.log(error)}
          onNotFound={() => console.log("no results")}
          onPress={(data, detail) => {
            handleSearch(data, detail);
          }}
          fetchDetails={true}
          query={{
            key: APIKEY_GOOGLE,
            language: "vn",
            components: "country:vn",
          }}
          // listEmptyComponent={() => {
          //   return (
          //     <MyView color="white" style={{ flex: 1, padding: 13 }}>
          //       <MyAppText>No results were found</MyAppText>
          //     </MyView>
          //   );
          // }}
          textInputProps={{
            placeholderTextColor: "#575757",
          }}
          styles={{
            textInputContainer: {
              backgroundColor: "transparent",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 20,

              shadowColor: "black",
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.3,
              shadowRadius: 2.22,

              elevation: 3,
            },
            textInput: {
              height: 45,
              justifyContent: "center",
              color: "#575757",
              fontSize: 14,
              fontFamily: "Poppins-Regular",
              backgroundColor: "white",
              borderRadius: 20,
            },
            listView: {
              borderRadius: 20,
              position: "absolute",
              top: 50,
            },
            row: {
              backgroundColor: "#FFFFFF",
              padding: 13,
              height: 44,
              flexDirection: "row",
            },
          }}
        />
      </MyView>
    </MyView>
  );
}

export default SearchPlacesComponent;

const styles = StyleSheet.create({
  topContainer: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    top: 70,
    zIndex: 1000,

    marginLeft: 20,
  },
  buttonBack: {
    height: 45,
    width: 45,
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 4,
    marginRight: 12,
    borderRadius: 100,
    marginBottom: 5,

    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2.22,

    elevation: 3,
  },
  searchContainer: {
    width: "75%",
    justifyContent: "center",
  },
});
