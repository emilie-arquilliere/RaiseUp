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
        <Text>
          Pour devenir la meilleure version de toi même, échange avec la
          communauté sur le thème de la semaine ! L'entraide est le début de
          l'élévation.
        </Text>
        <TouchableOpacity
          style={styles.viewBtnNavContent}
          onPress={() => navigation.navigate("CreateSubject")}
        >
          <Text style={styles.btnNav}>Créer un sujet</Text>
        </TouchableOpacity>
        <PageSubitle>Les Topics les plus actifs</PageSubitle>
        <ScrollView horizontal={true}>
          <View onPress={() => navigation.navigate("PageSubject")}>
            <ImageBackground source={require("../assets/images/ascension.jpg")}>
              <ThemeTitle content="La peur" />
            </ImageBackground>
          </View>
        </ScrollView>
        <PageSubitle>Les Topics du forum RaiseUp</PageSubitle>
        <ScrollView horizontal={true}>
          <View onPress={() => navigation.navigate("PageSubject")}>
            <ImageBackground source={require("../assets/images/ascension.jpg")}>
              <ThemeTitle content="La peur" />
            </ImageBackground>
          </View>
          <View onPress={() => navigation.navigate("PageSubject")}>
            <ImageBackground source={require("../assets/images/cabane.jpg")}>
              <ThemeTitle content="Comming soon" />
            </ImageBackground>
          </View>
        </ScrollView>
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
