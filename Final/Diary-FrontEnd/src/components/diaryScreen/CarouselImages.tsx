import { Dimensions, StyleSheet } from "react-native";
import { FadeInRight } from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";

import { SBItem } from "../../UILibraryComponent/SBItem";
import MyView from "../global/MyView";
import React from "react";

const windowWidth = Dimensions.get("window").width;

function CarouselImages({ urlImage }: any) {
  const data = React.useRef<number[]>([...new Array(urlImage.length)]).current;
  const viewCount = urlImage.length;

  return (
    <MyView style={styles.container}>
      <Carousel
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
        width={320}
        height={250}
        pagingEnabled={true}
        snapEnabled={true}
        mode={"horizontal-stack"}
        loop={true}
        autoPlay={false}
        autoPlayReverse={false}
        data={data}
        modeConfig={{
          snapDirection: "left",
        }}
        customConfig={() => ({ type: "positive", viewCount })}
        renderItem={({ index }) => (
          <SBItem
            img={{ uri: urlImage[index] }}
            index={index}
            key={urlImage[index]}
            entering={FadeInRight.delay((viewCount - index) * 100).duration(
              400
            )}
          />
        )}
      />
    </MyView>
  );
}

export default CarouselImages;

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
  },
});
