import { View, Animated, Easing, StyleSheet } from "react-native";
import React from "react";

const dotAnimations = Array.from({ length: 8 }).map(
  () => new Animated.Value(1)
);

export const AnimatedSoundBars = ({ barColor = "red" }) => {
  const loopAnimation = (node) => {
    const keyframes = [1.3, 0.6, 1];

    const loop = Animated.sequence(
      keyframes.map((toValue) =>
        Animated.timing(node, {
          toValue,
          easing: Easing.ease,
          useNativeDriver: true,
        })
      )
    );

    return loop;
  };

  const loadAnimation = (nodes) =>
    Animated.loop(Animated.stagger(300, nodes.map(loopAnimation))).start();

  React.useEffect(() => {
    loadAnimation(dotAnimations);
  }, []);

  return (
    <View style={styles.row}>
      {dotAnimations.map((animation, index) => {
        return (
          <Animated.View
            key={`${index}`}
            style={[
              styles.bar,
              { backgroundColor: barColor },
              {
                transform: [
                  {
                    scale: animation,
                  },
                ],
              },
            ]}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "center",
  },
  bar: {
    height: 8,
    width: 8,
    borderRadius: 4,
    marginHorizontal: 3,
  },
});
