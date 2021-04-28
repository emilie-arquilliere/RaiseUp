import React from "react";
import { Image } from "react-native";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import PageSubitle from "../component/PageSubtitle";

export default function ProfilPage({ navigation }) {
  return (
    <View>
      <ImageBackground
        source={require("../assets/images/fond_noir.png")}
        style={styles.fondNoir}
      >
        <Text style={styles.title}>Profil</Text>
        <View>
          <Image />
          <Text>Blabla</Text>
        </View>
        <Image />
        <View>
          <PageSubitle content="Paramètres du compte" />
          <Text>Changer le mot de passe</Text>
          <Text>Mes informations personnelles</Text>
          <Text>Politique de confidentialité</Text>
          <Text>Conditions générales d'utilisation</Text>
          <Text>Conditions générales de vente</Text>
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
  title: {
    position: "absolute",
    top: "13%",
    fontSize: 20,
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
