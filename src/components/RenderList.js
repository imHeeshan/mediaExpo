import {
  View,
  Text,
  Image,
  StyleSheet,
  Animated,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { ITEM_SIZE, SPACING, width } from "../utils/common";
import { AntDesign, EvilIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const RenderList = ({ media, index, scrollx }) => {
  const navigation = useNavigation();
  const inputRange = [
    (index - 2) * ITEM_SIZE,
    index * ITEM_SIZE,
    (index + 2) * ITEM_SIZE,
  ];
  const translateY = scrollx.interpolate({
    inputRange,
    outputRange: [0, -50, 0],
  });
  const translateX = scrollx.interpolate({
    inputRange: [(index - 2) * ITEM_SIZE, (index - 1) * ITEM_SIZE],
    outputRange: [0, width],
    // extrapolate:'clamp'
  });
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Details", { media: media })}
      style={{ width: ITEM_SIZE }}
    >
      <Animated.View
        style={{
          marginHorizontal: SPACING,
          // padding: SPACING * 2,
          // alignItems: "center",
          backgroundColor: "white",
          borderRadius: 34,
          transform: [{ translateY: 50 }],
        }}
      >
        <Image
          style={[styles.mediaImg, { transform: [{ translateY: 40 }] }]}
          source={{
            uri: media.thumbnailUrl,
          }}
        />
        <View>
          <Text>aa</Text>
          <Text>aa</Text>
          <Text>aa</Text>
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default RenderList;

const styles = StyleSheet.create({
  mediaImg: {
    width: "100%",
    height: ITEM_SIZE * 1.2,
    resizeMode: "cover",
    borderRadius: 24,
    margin: 0,
    // marginBottom: 10,
  },

  mediaComponent: {
    marginHorizontal: 10,
  },

  textContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignItems: "center",
  },
});
