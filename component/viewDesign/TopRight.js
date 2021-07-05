import React from "react";
import { StyleSheet, View } from "react-native";

export default function TopRight() {
  return (
    <View style={styles.viewTopRight}></View>
  );
}

const styles = StyleSheet.create({
    viewTopRight:{
        position:'absolute',
        top:0,
        right:0,
        width:"20%",
        height:"15%",
        backgroundColor:'#edcdfe',
        borderBottomLeftRadius:10
      },
});
