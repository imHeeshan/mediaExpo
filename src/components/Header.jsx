import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

export const Header = () => {
  return (
    <View style={styles.header}>
      <AntDesign name="bars" size={24} color="white" />
      <Text style={styles.headerTitle}>
        <Text style={{ color: "#d6a400", fontSize: 22 }}>M</Text>edia
      </Text>

      <Feather name="search" size={24} color="white" />
    </View>
  );
};
export const BackNavigate = ({ navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={{
        // position: "absolute",
        // zIndex: 111,
        // top: 10,
        // left: 10,
        // borderRadius: 50,
        // padding: 10,
        // width: 40,
        // height: 40,
        // shadowColor: "#000",
        // shadowOffset: {
        //   width: 0,
        //   height: 2,
        // },
        // shadowOpacity: 0.23,
        // shadowRadius: 2.62,
        
        // elevation: 4,
      }}
    >
      <Text>Back</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#323740",
    paddingVertical: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    borderBottomWidth: 2,
    borderBottomColor: "white",
  },
  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
