import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import IconProfil from "../component/IconProfil";
import PageSubitle from "../component/PageSubtitle";
import PageTitle from "../component/PageTitle";

export default function ForumPage({ navigation }) {
  const titre = "La peur";
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/fond_noir.png")}
        style={styles.fondNoir}
      >
        <IconProfil navigation={navigation} />
        <PageTitle content={"Forum"} />
        <Text
          style={{
            width: "90%",
            textAlign: "justify",
            marginTop: "30%",
            marginBottom: 10,
          }}
        >
          Pour devenir la meilleure version de toi même, échange avec la
          communauté sur le thème de la semaine ! L'entraide est le début de
          l'élévation.
        </Text>
        <TouchableOpacity
          style={styles.viewBtnNav}
          onPress={() => navigation.navigate("CreateSubject")}
        >
          <Text style={styles.btnNav}>Créer un sujet</Text>
        </TouchableOpacity>
        <PageSubitle content="Les Topics les plus actifs" />
        <View style={{ width: "95%", height: "25%", alignItems: "center" }}>
          <ScrollView horizontal style={{ width: "90%", padding: 10 }}>
            <TouchableOpacity
              style={{
                height: "100%",
                alignItems: "center",
              }}
              onPress={() => navigation.navigate("ForumSubject")}
            >
              <ImageBackground
                source={require("../assets/images/livre.jpg")}
                style={{
                  width: 150,
                  height: "90%",
                  resizeMode: "contain",
                }}
              ></ImageBackground>
              <Text style={{ fontWeight: "bold" }}>{titre}</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        <PageSubitle content="Les Topics du forum RaiseUp" />
        <View style={{ width: "95%", height: "25%", alignItems: "center" }}>
          <ScrollView horizontal style={{ width: "90%", padding: 10 }}>
            <TouchableOpacity
              style={{
                height: "100%",
                alignItems: "center",
              }}
              onPress={() => navigation.navigate("ForumSubject")}
            >
              <ImageBackground
                source={require("../assets/images/livre.jpg")}
                style={{
                  width: 150,
                  height: "90%",
                  resizeMode: "contain",
                }}
              ></ImageBackground>
              <Text style={{ fontWeight: "bold" }}>{titre}</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
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
  viewBtnNav: {
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
