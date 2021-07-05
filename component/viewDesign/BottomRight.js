import React from "react";
import { StyleSheet, View } from "react-native";

export default function BottomRight() {
  return (
    <View style={styles.viewBottomRight}></View>
  );
}

const styles = StyleSheet.create({
    viewBottomRight:{
        position: "absolute",
        bottom: 0,
        right:0,
        width:"85%",
        height:"25%",
        backgroundColor:"#edcdfe",
        borderTopLeftRadius:10
      },
});
