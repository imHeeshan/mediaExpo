import { View, Text, SafeAreaView, StyleSheet, Image } from "react-native";
import React from "react";
import { ITEM_SIZE } from "../utils/common";
import { BackNavigate } from "../components/Header";

const DetailsScreen = ({ route, navigation }) => {
  const { media } = route.params;
  console.log(media);
  return (
    <SafeAreaView>
      <View style={{ flex: 1 }}>
        <BackNavigate navigation={navigation} />
        <Image
          style={[styles.mediaImg]}
          source={{
            uri: media.thumbnailUrl,
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  mediaImg: {
    width: "100%",
    height: ITEM_SIZE,
    resizeMode: "cover",
    borderRadius: 24,
    margin: 0,
    // margi
  },
});
