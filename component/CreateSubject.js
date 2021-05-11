import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import IconProfil from "../component/IconProfil";
import PageSubitle from "../component/PageSubtitle";
import PageTitle from "../component/PageTitle";
import ThemeTitle from "../component/ThemeTitle";

export default function ForumPage({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/fond_noir.png")}
        style={styles.fondNoir}
      >
        <IconProfil navigation={navigation} />
        <PageTitle content={"Forum"} />
        <Text>Poser une question</Text>
        <Text>Écrivez ci-dessous le sujet que vous souhaitez aborder</Text>
        <Input></Input>
        <select></select>
        <CheckBox
          title="Suivre les réponses sur le topic par mail"
          style={styles.item}
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  item: {
    textAlign: "center",
    padding: 10,
    fontSize: 20,
  },
  fondNoir: {
    resizeMode: "cover",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  viewBtnNav: {
    position: "absolute",
    bottom: "5%",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  btnNav: {
    overflow: "hidden",
    borderRadius: 25,
    backgroundColor: "#D3FCF7",
    textAlign: "center",
    padding: 15,
    margin: 10,
  },
});
