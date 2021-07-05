import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import IconProfil from "../component/IconProfil";
import PageSubitle from "../component/PageSubtitle";
import PageTitle from "../component/PageTitle";
import MiddleRight from "../component/viewDesign/MiddleRight";
import TopLeft from "../component/viewDesign/TopLeft";
import BottomLeft from "../component/viewDesign/BottomLeft";
import { useFonts } from "expo-font";
import BtnCTA from "../component/BtnCTA";

export default function ForumPage({ navigation }) {
  const titre = "La peur";

  const [loaded] = useFonts({
    VarelaRound: require("../assets/font/VarelaRound-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  } 

  return (
    <View style={styles.container}>
      <TopLeft/>
      <MiddleRight/>
      <BottomLeft/>
      <IconProfil navigation={navigation} />
      <PageTitle content={"Forum"} />
      <View style={styles.content}>
        <Text style={styles.text} >
          Pour devenir la meilleure version de toi même, échange avec la
          communauté sur le thème de la semaine ! L'entraide est le début de
          l'élévation.
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("CreateSubject")}>
          <BtnCTA text={"Créer un sujet"} />
        </TouchableOpacity>
        <PageSubitle content="Les Topics les plus actifs" />
        <View style={{ width: "95%", height: "25%", alignItems: "center" }}>
          <ScrollView horizontal style={{ width: "90%", padding: 10 }}>
            <TouchableOpacity
              style={styles.choice}
              onPress={() => navigation.navigate("ForumSubject")}
            >
              <Text style={styles.subject}>{titre}</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <PageSubitle content="Les Topics du forum RaiseUp" />
        <View style={{ width: "95%", height: "25%", alignItems: "center" }}>
          <ScrollView horizontal style={{ width: "90%", padding: 10 }}>
            <TouchableOpacity
              style={styles.choice}
              onPress={() => navigation.navigate("ForumSubject")}
            >
              <Text style={styles.subject}>{titre}</Text>
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
  text:{
    width: "90%",
    textAlign: "justify",
    marginTop: "30%",
    marginBottom: 10,
    fontFamily: "VarelaRound",
  },
  choice:{
    borderRadius:10,
    width:140,
    height:"90%",
    backgroundColor:"#D77AFF",
    justifyContent:"center",
    alignItems:"center"
  },
  subject:{
    fontFamily: "VarelaRound",
    color:"white",
    fontSize:15
  }
});
