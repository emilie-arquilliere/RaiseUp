import React from "react";
import { StyleSheet, View, ImageBackground, Text } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import IconProfil from "../component/IconProfil";
import PageSubitle from "../component/PageSubtitle";
import PageTitle from "../component/PageTitle";

export default function PodcastsPage({ navigation }) {
  const titre = "La peur";
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/fond_noir.png")}
        style={styles.fondNoir}
      >
        <IconProfil navigation={navigation} />
        <PageTitle content={"Podcast"} />
        <View
          style={{
            width: "100%",
            height: "25%",
            marginTop: "35%",
            marginBottom: 15,
          }}
        >
          <ImageBackground
            source={require("../assets/images/respirer.jpg")}
            style={{ width: "100%", height: "100%" }}
          ></ImageBackground>
        </View>

        <PageSubitle content="Derniers podcasts écoutés" />
        <View style={{ width: "95%", height: "25%", alignItems: "center" }}>
          <ScrollView horizontal style={{ width: "90%", padding: 10 }}>
            <TouchableOpacity
              style={{
                height: "100%",
                alignItems: "center",
              }}
              onPress={() => navigation.navigate("PlayPodcast")}
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
        <PageSubitle content="Les podcasts de RaiseUp" />
        <View style={{ width: "95%", height: "25%", alignItems: "center" }}>
          <ScrollView horizontal style={{ width: "90%", padding: 10 }}>
            <View
              style={{
                height: "100%",
                alignItems: "center",
              }}
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
            </View>
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
    fontSize: 78,
  },
  fondNoir: {
    resizeMode: "cover",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
