import React from "react";
import { StyleSheet, Text } from "react-native";
import { useFonts } from "expo-font";

export default function PodcastsPage({ text }) {
  const [loaded] = useFonts({
    VarelaRound: require("../assets/font/VarelaRound-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Text style={styles.btnCTA}>{text}</Text>
  );
}

const styles = StyleSheet.create({
  btnCTA: {
    overflow:"hidden",
    borderRadius: 10,
    backgroundColor: "#724997",
    padding: 15,
    textAlign:'center',
    color:"white",
    fontSize:15,
    fontFamily:"VarelaRound",
    fontWeight:"bold",
    marginBottom:10,
    marginTop:10
  },
});
