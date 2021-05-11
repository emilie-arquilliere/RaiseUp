import React from "react";
import { StyleSheet, Text } from "react-native";

export default function PageTitle({ content }) {
  return <Text style={styles.title}>{content}</Text>;
}

const styles = StyleSheet.create({
  title: {
    justifyContent: "center",
    color: "white",
    fontSize: 30,
  },
});
