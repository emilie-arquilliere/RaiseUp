import React from "react";
import { StyleSheet, View } from "react-native";

export default function MiddleRightBottom() {
  return (
    <View style={styles.viewMiddleRightBottom}></View>
  );
}

const styles = StyleSheet.create({
    viewMiddleRightBottom:{
        position:"absolute",
        backgroundColor:"#edcdfe",
        top:"70%",
        right:0,
        width:"40%",
        height:"25%",
        borderBottomLeftRadius:10,
        borderTopLeftRadius:10
      },
});
