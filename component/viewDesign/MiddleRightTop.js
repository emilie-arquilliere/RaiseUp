import React from "react";
import { StyleSheet, View } from "react-native";

export default function MiddleRightTop() {
  return (
    <View style={styles.viewMiddleRightTop}></View>
  );
}

const styles = StyleSheet.create({
    viewMiddleRightTop:{
        position:"absolute",
        backgroundColor:"#f9ddff",
        top:"30%",
        right:0,
        width:"20%",
        height:"20%",
        borderBottomLeftRadius:10,
        borderTopLeftRadius:10
      },
});
