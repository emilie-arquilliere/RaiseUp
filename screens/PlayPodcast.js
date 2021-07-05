import BtnRetour from "../component/BtnRetour";
import React, { useEffect } from "react";
import IconProfil from "../component/IconProfil";
import PageTitle from "../component/PageTitle";
import { StyleSheet, View, ImageBackground, Text, Image } from "react-native";
import { useFonts } from "expo-font";

export default function PodcastsPage({ navigation }) {
  const titre = "La peur";

  const [loaded] = useFonts({
    CormorantGaramond: require("../assets/font/CormorantGaramond-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/fond_noir.png")}
        style={styles.fondNoir}
      >
        <IconProfil navigation={navigation} />
        <PageTitle content={"Podcast"} />
        <BtnRetour navigation={navigation} />
        <Text
          style={{
            marginTop: "25%",
            textAlign: "center",
            marginBottom: 40,
            fontFamily: "CormorantGaramond",
            fontSize: 15,
          }}
        >
          Lecture en cours {"\n"} {titre}
        </Text>
        <View style={styles.ensemble}>
          <Image
            source={require("../assets/images/saut_mer.jpg")}
            style={styles.photo}
          />
          <Text style={{ marginTop: 30 }}>en cours</Text>
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
  ensemble: {
    width: "90%",
    height: "65%",
    backgroundColor: "#F0EFEC",
    alignItems: "center",
  },
  photo: {
    width: "90%",
    height: "80%",
    marginTop: 15,
  },
});
