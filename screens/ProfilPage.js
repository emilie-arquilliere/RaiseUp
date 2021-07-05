import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Avatar } from "react-native-elements/dist/avatar/Avatar";
import { useFonts } from "expo-font";
import MiddleLeftTop from "../component/viewDesign/MiddleLeftTop";
import MiddleRight from "../component/viewDesign/MiddleRight";
import BottomLeft from "../component/viewDesign/BottomLeft";
import PageTitle from "../component/PageTitle";
import BtnCTA from "../component/BtnCTA";

export default function ProfilPage({ navigation }) {
  const [loaded] = useFonts({
    VarelaRound: require("../assets/font/VarelaRound-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  } 

  return (
    <View style={styles.container}>
      <MiddleLeftTop/>
      <MiddleRight/>
      <BottomLeft/>
      <PageTitle content={"Profil"} />
      <View style={styles.content}>
        <Avatar
          rounded
          source={require('../assets/images/accroupie.jpg')}
          size='large'
          containerStyle={styles.avatar}
        />
        <View style={styles.param}>
          <Text style={styles.titleParam}>Paramètres du compte</Text>
          <View style={styles.paramItem}>
            <Text style={styles.textParam}>Changer le mot de passe</Text>
            <FontAwesomeIcon
              icon={faChevronRight}
              color={"white"}
              size={15}
              style={styles.arrow}
            />
          </View>
          <View style={styles.paramItem}>
            <Text style={styles.textParam}>Mes informations personnelles</Text>
            <FontAwesomeIcon
              icon={faChevronRight}
              color={"white"}
              size={15}
              style={styles.arrow}
            />
          </View>
          <View style={styles.paramItem}>
            <Text style={styles.textParam}>Politique de confidentialité</Text>
            <FontAwesomeIcon
              icon={faChevronRight}
              color={"white"}
              size={15}
              style={styles.arrow}
            />
          </View>
          <View style={{ flexDirection: "row", padding: 10 }}>
            <Text style={styles.textParam}>Conditions générales d'utilisation</Text>
            <FontAwesomeIcon
              icon={faChevronRight}
              color={"white"}
              size={15}
              style={styles.arrow}
            />
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("CreateSubject")}>
          <BtnCTA text={"Déconnexion"} />
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
    height: "100%",
  },
  content:{
    justifyContent:"center",
    alignItems:"center",
    width:"90%",
    alignSelf:"center",
  },
  avatar:{
    marginTop:"20%",
    marginBottom:30
  },
  param: {
    width: "90%",
    height: "36%",
    backgroundColor: "#D77AFF",
    borderRadius: 15,
    marginBottom: 30,
    marginTop:20
  },
  titleParam:{
    textAlign:"center",
    color:"white",
    margin:10,
    fontFamily: "VarelaRound",
    fontSize:18
  },
  textParam:{
    color:"white",
    fontFamily: "VarelaRound",
    fontSize:15
  },
  paramItem: {
    borderBottomColor: "white",
    borderBottomWidth: 1,
    flexDirection: "row",
    padding: 10,
  },
  arrow: {
    position: "absolute",
    right: "5%",
    top: "50%",
  },
  photo: {
    marginLeft: "5%",
    borderColor: "#BD7B49",
    borderWidth: 4,
  },
});
