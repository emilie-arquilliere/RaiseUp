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
        backgroundColor:"#edcdfe",
        top:"10%",
        left:0,
        width:"50%",
        height:"25%",
        borderBottomRightRadius:10,
        borderTopRightRadius:10
      },
});
