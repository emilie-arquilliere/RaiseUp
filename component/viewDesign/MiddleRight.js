import React from "react";
import { StyleSheet, View } from "react-native";

export default function MiddleRight() {
  return (
    <View style={styles.viewMiddleRight}></View>
  );
}

const styles = StyleSheet.create({
    viewMiddleRight:{
        position:"absolute",
        backgroundColor:"#f9ddff",
        top:"45%",
        right:0,
        width:"50%",
        height:"25%",
        borderBottomLeftRadius:10,
        borderTopLeftRadius:10
      },
});
