import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import TopLeft from "../component/viewDesign/TopLeft";
import TopRight from "../component/viewDesign/TopRight";
import MiddleRight from "../component/viewDesign/MiddleRight";
import BottomLeft from "../component/viewDesign/BottomLeft";
import BtnCTA from "../component/BtnCTA";
import { TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";

export default function FirstPage({ navigation }) {
  const [loaded] = useFonts({
    VarelaRound: require("../assets/font/VarelaRound-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <TopLeft/>
      <TopRight/>
      <MiddleRight/>
      <BottomLeft/>
      <View style={styles.content}>
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.imgLogo}
        />
        <Text style={styles.title}>Raise Up</Text>
        <Text style={styles.item}>
          Bienvenue sur l'application RaiseUp. Toute l'équipe est là pour
          t'aider à devenir la meilleure version de toi-même. Tu pourras
          t'élever, t'améliorer grâce à des podcasts abordants différents thèmes du développement personnel.
          Tu auras même accès à un forum pour partager ton expérience avec les autres utilisateurs.
        </Text>
        <Text style={styles.item}>
          Nous te remercions pour ta confiance.
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Connexion")}>
          <BtnCTA text={"Je veux m'élever !"} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor:"#f7e4ff",
    width: "100%",
    height: "100%"
  },
  content:{
    justifyContent:"center",
    alignItems:"center",
    width:"90%",
    alignSelf:"center",
  },
  imgLogo:{
    height:150,
    width:150
  },
  title:{
    fontFamily:"VarelaRound",
    fontSize:30,
    marginBottom:10
  },
  item:{
    fontFamily:"VarelaRound",
    textAlign:"justify",
    lineHeight:20,
    margin:30
  },
});
