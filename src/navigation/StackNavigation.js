import * as React from "react";
import { Button, View, Text, ListItem, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Video, { VideoRef } from "react-native-video";
import {HomeScreen, DetailsScreen} from "../screens";




const Stack = createNativeStackNavigator();

function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigation;
