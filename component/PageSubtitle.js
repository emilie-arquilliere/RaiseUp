import React from "react";
import { StyleSheet, Text } from "react-native";
import { useFonts } from "expo-font";

export default function PageSubitle({ content }) {
  const [loaded] = useFonts({
    VarelaRound: require("../assets/font/VarelaRound-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return <Text style={styles.subtitle}>{content}</Text>;
}

const styles = StyleSheet.create({
  subtitle: {
    position: "relative",
    left: "10%",
    width: "100%",
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5,
    fontFamily: "VarelaRound",
  },
});
