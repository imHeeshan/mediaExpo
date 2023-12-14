import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Animated,
} from "react-native";
import React, { useEffect, useRef } from "react";
import {Header} from "../components/Header";
import { observer } from "mobx-react";
import { MediaStore } from "../store/MediaStore";
import RenderList from "../components/RenderList";
import { ITEM_SIZE } from "../utils/common";
import Spinner from "../components/Spinner";
const HomeScreen = () => {
  useEffect(() => {
    MediaStore.fetchItems();
  }, []);
  const scrollx = useRef(new Animated.Value(0)).current;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      {MediaStore.isLoading ? (
        <Spinner />
      ) : (
        <>
          <Text style={styles.screenTitle}>Video And Images</Text>
          <View style={{ marginHorizontal: 10, margin: 20 }}>
            <Animated.FlatList
              horizontal
              data={MediaStore.mediaFiles}
              renderItem={({ item, index }) => (
                <RenderList scrollx={scrollx} media={item} index={index} />
              )}
              showsHorizontalScrollIndicator={false}
              snapToInterval={ITEM_SIZE}
              decelerationRate={0}
              contentContainerStyle={{ alignItems: "center" }}
              scrollEventThrottle={16}
              bounces={false}
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollx } } }],
                { useNativeDriver: true }
              )}
            />
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default observer(HomeScreen);

const styles = StyleSheet.create({
  screenTitle: {
    fontSize: 20,
    marginTop: 20,
    marginHorizontal: 10,
    fontWeight: "600",
    color: "#323740",
  },
});
