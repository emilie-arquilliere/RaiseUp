import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { StyleSheet } from "react-native";

export default function PodcastsPage({ navigation }) {
  return (
    <FontAwesomeIcon
      icon={faCaretLeft}
      color={"#D3FCF7"}
      size={55}
      style={styles.btn}
      onPress={() => navigation.goBack()}
    />
  );
}

const styles = StyleSheet.create({
  btn: {
    position: "absolute",
    left: "5%",
    top: "17%",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
});
