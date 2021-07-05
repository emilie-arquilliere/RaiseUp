import React from "react";
import { StyleSheet, View } from "react-native";

export default function MiddleLeft() {
  return (
    <View style={styles.viewMiddleLeft}></View>
  );
}

const styles = StyleSheet.create({
    viewMiddleLeft:{
        position:"absolute",
        backgroundColor:"#f9ddff",
        top:"45%",
        left:0,
        width:"50%",
        height:"25%",
        borderBottomRightRadius:10,
        borderTopRightRadius:10
      },
});
