import React from "react";
import { StyleSheet, Text } from "react-native";
import { useFonts } from "expo-font";

export default function PageTitle({ content }) {
  const [loaded] = useFonts({
    VarelaRound: require("../assets/font/VarelaRound-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return <Text style={styles.title}>{content}</Text>;
}

const styles = StyleSheet.create({
  title: {
    position: "absolute",
    top: "13%",
    left: "10%",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "VarelaRound",
  },
});
