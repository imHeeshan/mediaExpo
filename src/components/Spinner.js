import { View, Text, ActivityIndicator } from "react-native";
import React from "react";

const Spinner = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <ActivityIndicator size={"large"} color={"#d6a400"} />
    </View>
  );
};

export default Spinner;
