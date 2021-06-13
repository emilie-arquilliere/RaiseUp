import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import IconProfil from "../component/IconProfil";
import PageTitle from "../component/PageTitle";
import PageSubtitle from "../component/PageSubtitle";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useFonts } from "expo-font";

export default function AccueilPage({ navigation }) {
  const prenom = "Emilie";
  const theme = "La peur";
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
        <View style={{ flex: 1, width: "100%" }}>
          <KeyboardAwareScrollView
            contentContainerStyle={{
              width: "100%",
              height: "100%",
              flex: 1,
              alignItems: "center",
            }}
          >
            <IconProfil navigation={navigation} />
            <PageTitle content={"Hello " + prenom} />
            <Text
              style={{
                marginTop: "40%",
                marginBottom: 15,
                fontFamily: "CormorantGaramond",
              }}
            >
              "Ne laisser pas vos peurs prendre la place de vos rêves."
            </Text>
            <Text
              style={{
                marginLeft: "60%",
                marginBottom: 10,
                fontFamily: "CormorantGaramond",
              }}
            >
              - Walt Disney
            </Text>
            <View style={styles.contour}>
              <View style={styles.interieur}>
                <Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    marginBottom: 10,
                  }}
                >
                  Le thème de la semaine
                </Text>
                <Text style={{ color: "white" }}>{theme}</Text>
              </View>
            </View>
            <PageSubtitle content="Les nouveautés" />
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

            <PageSubtitle content="Le suivi de ton évolution" />
            <View style={styles.suivi}>
              <TextInput
                style={{
                  backgroundColor: "white",
                  width: "90%",
                  height: "80%",
                }}
                multiline={true}
                placeholder="Tu peux matérialiser ici ton évolution et tes pensées."
              />
            </View>
            <PageSubtitle content="Les exercices de ton coach" />
            <View style={styles.contour}>
              <View style={styles.exercices}>
                <Text>{"\u2022"} Pratiquer la cohérence cardiaque</Text>
                <Text>
                  {"\u2022"} Noter toutes les choses positives qui te sont
                  arrivées
                </Text>
                <Text>{"\u2022"} Accepte ta peur</Text>
              </View>
            </View>
          </KeyboardAwareScrollView>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  fondNoir: {
    resizeMode: "cover",
    height: "100%",
    alignItems: "center",
  },
  theme: {
    position: "relative",
    width: "80%",
    height: "90%",
    marginBottom: 15,
    backgroundColor: "#2c4645",
  },
  contour: {
    borderTopColor: "black",
    borderBottomColor: "black",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    width: "80%",
    height: "11%",
    justifyContent: "center",
    alignItems: "center",
  },
  interieur: {
    width: "90%",
    height: "90%",
    backgroundColor: "#2c4645",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  suivi: {
    width: "80%",
    height: "15%",
    backgroundColor: "#f0efec",
    alignItems: "center",
    justifyContent: "center",
  },
  exercices: {
    width: "90%",
    height: "90%",
    backgroundColor: "#f0efec",
  },
});
