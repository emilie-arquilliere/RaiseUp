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
import { useFonts } from "expo-font";
import MiddleLeftTop from "../component/viewDesign/MiddleLeftTop";
import MiddleRightBottom from "../component/viewDesign/MiddleRightBottom";
import MiddleRightTop from "../component/viewDesign/MiddleRightTop";

export default function AccueilPage({ navigation }) {
  const prenom = "Emilie";
  const theme = "La peur";
  const titre = "La peur";

  const [loaded] = useFonts({
    VarelaRound: require("../assets/font/VarelaRound-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <MiddleLeftTop/>
      <MiddleRightTop/>
      <MiddleRightBottom/>
      <IconProfil navigation={navigation} />
      <PageTitle content={"Hello " + prenom} />
      <View style={styles.content}>
        <Text
          style={{
            marginTop: "40%",
            marginBottom: 15,
            fontFamily: "VarelaRound",
          }}
        >
          "Ne laisser pas vos peurs prendre la place de vos rêves."
        </Text>
        <Text
          style={{
            marginLeft: "60%",
            marginBottom: 10,
            fontFamily: "VarelaRound",
          }}
        >
          - Walt Disney
        </Text>
        <View style={styles.theme}>
          <PageSubtitle content={"Thème du mois : "+theme} />
          <Image source={require("../assets/images/peur.jpg")}
                 style={styles.imgTheme}/>
        </View>
        <PageSubtitle content="Les nouveautés" />
        <View style={{ width: "100%", height: "25%", alignItems: "center" }}>
          <ScrollView horizontal style={{ width: "90%", padding: 10 }}>
            <TouchableOpacity
              style={{
                height: "100%",
                alignItems: "center",
              }}
              onPress={() => navigation.navigate("PlayPodcast")}
            >
              <Image
                source={require("../assets/images/livre.jpg")}
                style={styles.imgPodcast} />
              <Text style={{ fontWeight: "bold",marginTop:10 }}>{titre}</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor:"#f7e4ff",
    width: "100%",
    height: "100%",
  },
  content:{
    justifyContent:"center",
    alignItems:"center",
    width:"90%",
    alignSelf:"center",
  },
  theme: {
    width: "100%",
    height: "35%",
    marginTop: 30,
  },
  imgTheme:{
    alignSelf:"center",
    width: "85%",
    height: "70%",
    resizeMode: "cover",
    borderRadius:10
  },
  imgPodcast:{
    width: 150,
    height: "90%",
    resizeMode: "cover",
    borderRadius:10
  }
});
