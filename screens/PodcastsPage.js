import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import IconProfil from "../component/IconProfil";
import PageSubitle from "../component/PageSubtitle";
import PageTitle from "../component/PageTitle";
import MiddleLeft from "../component/viewDesign/MiddleLeft";
import TopRight from "../component/viewDesign/TopRight";
import MiddleRightBottom from "../component/viewDesign/MiddleRightBottom";

export default function PodcastsPage({ navigation }) {
  const titre = "La peur";
  return (
    <View style={styles.container}>
      <TopRight/>
      <MiddleLeft/>
      <MiddleRightBottom/>
      <IconProfil navigation={navigation} />
      <PageTitle content={"Podcast"} />
      <View style={styles.content}>
        <View style={styles.viewBigPic}>
          <Image
            source={require("../assets/images/respirer.jpg")}
            style={styles.bigPic}
          />
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
              <Image
                source={require("../assets/images/livre.jpg")}
                style={styles.littlePic}
              />
              <Text style={{ fontWeight: "bold" }}>{titre}</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <PageSubitle content="Les podcasts de RaiseUp" />
        <View style={{ width: "95%", height: "25%", alignItems: "center" }}>
          <ScrollView horizontal style={{ width: "90%", padding: 10 }}>
            <TouchableOpacity
              style={{
                height: "100%",
                alignItems: "center",
              }}
              onPress={() => navigation.navigate("PlayPodcast")}
            >
              <Image  source={require("../assets/images/livre.jpg")}
                style={styles.littlePic}/>
              <Text style={{ fontWeight: "bold" }}>{titre}</Text>
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
    width:"100%",
    alignSelf:"center",
  },
  viewBigPic:{
    width: "100%",
    height: "20%",
    marginTop:"35%",
    marginBottom:10
  },
  bigPic:{
    position:"absolute",
    right:0,
    borderBottomLeftRadius:10,
    borderTopLeftRadius:10,
    width:"80%",
    height:"100%"
  },
  littlePic:{
    width: 150,
    height: "90%",
    resizeMode: "cover",
    borderRadius:10,
  }
});
