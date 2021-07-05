import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useFonts } from "expo-font";
import TopLeft from "../component/viewDesign/TopLeft";
import TopRight from "../component/viewDesign/TopRight";
import MiddleRight from "../component/viewDesign/MiddleRight";
import BottomLeft from "../component/viewDesign/BottomLeft";
import BtnCTA from "../component/BtnCTA";

export default function ConnexionPage({ navigation }) {
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);

  const login = {
    email: email,
    password: password,
  };

  const connect = async () => {
    try {
      let response = await fetch("http://172.30.92.123:3000/connect", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(login),
      });
      let json = await response.json();
      if (json.ok === 1) {
        navigation.navigate("Menu");
      } else {
        alert(json.message);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const [loaded] = useFonts({
    VarelaRound: require("../assets/font/VarelaRound-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        contentContainerStyle={{
          width: "100%",
          height: "100%",
          justifyContent:"center",
        }}
      >
        <TopLeft/>
        <TopRight/>
        <MiddleRight/>
        <BottomLeft/>
        <View style={styles.content}>
          <Image
            source={require("../assets/images/logo.png")}
            style={styles.imgLogo}
          />
          <Text style={styles.title}>Connexion</Text>
          <Text style={styles.item}>Email</Text>
          <TextInput
            placeholder="email@address.com"
            style={styles.input}
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
          <Text style={styles.item}>Mot de passe</Text>
          <TextInput
            placeholder="**********"
            style={styles.input}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
            value={password}
          />
          <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
            <BtnCTA text={"Connexion"} />
          </TouchableOpacity>
          <Text style={styles.item}>
            Vous commencez l'aventure ?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Inscription")}>
            <BtnCTA text={"Je m'inscris"} />
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
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
    alignSelf:"center"
  },
  imgLogo:{
    height:150,
    width:150
  },
  title:{
    fontFamily:"VarelaRound",
    fontSize:30,
    marginBottom:20
  },
  item: {
    fontFamily:"VarelaRound",
    textAlign:"justify",
    lineHeight:20,
    marginTop:10,
    marginBottom:5
  },
  input: {
    fontFamily:"VarelaRound",
    borderRadius: 10,
    backgroundColor: "#f0efec",
    width: "60%",
    height: 50,
    padding: "5%",
    marginBottom:10
  },
});
