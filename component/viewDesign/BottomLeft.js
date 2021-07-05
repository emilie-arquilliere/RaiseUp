import React from "react";
import { StyleSheet, View } from "react-native";

export default function BottomLeft() {
  return (
    <View style={styles.viewBottomLeft}></View>
  );
}

const styles = StyleSheet.create({
    viewBottomLeft:{
        position: "absolute",
        bottom: 0,
        width:"85%",
        height:"25%",
        backgroundColor:"#edcdfe",
        borderTopRightRadius:10
      },
});
