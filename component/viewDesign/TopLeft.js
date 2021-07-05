import React from "react";
import { StyleSheet, View } from "react-native";

export default function TopLeft() {
  return (
    <View style={styles.viewTopLeft}></View>
  );
}

const styles = StyleSheet.create({
  viewTopLeft:{
    position: "absolute",
    backgroundColor:'#f8d8ff',
    top:0,
    width:"70%",
    height:"40%",
    borderBottomRightRadius:10
  }
});
