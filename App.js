import { View, Text, SafeAreaView, StatusBar } from "react-native";
import React from "react";
import StackNavigation from "./src/navigation/StackNavigation";

const App = () => {
  return (
    <>
      <StatusBar   />
      <StackNavigation />
    </>
  );
};

export default App;
