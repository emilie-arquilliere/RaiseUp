import React, { useState } from "react";
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
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_pwd, setConfirmPwd] = useState("");

  const inscription = {
    lastname: lastname,
    firstname: firstname,
    email: email,
    password: password,
    confirm_password: confirm_pwd,
  };

  const register = async () => {
    try {
      let response = await fetch("http://172.30.92.123:3000/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inscription),
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
          justifyContent:"center"
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
          <Text style={styles.title}>Raise Up</Text>
          <Text style={styles.item}>Nom</Text>
          <TextInput
            placeholder="Doe"
            style={styles.input}
            onChangeText={(lastname) => setLastname(lastname)}
          />
          <Text style={styles.item}>Prénom</Text>
          <TextInput
            placeholder="John"
            style={styles.input}
            onChangeText={(firstname) => setFirstname(firstname)}
          />
          <Text style={styles.item}>Email</Text>
          <TextInput
            placeholder="email@address.com"
            style={styles.input}
            onChangeText={(email) => setEmail(email)}
          />
          <Text style={styles.item}>Mot de passe</Text>
          <TextInput
            placeholder="**********"
            style={styles.input}
            onChangeText={(password) => setPassword(password)}
            secureTextEntry={true}
          />
          <Text style={styles.item}>Confirmation de mot de passe</Text>
          <TextInput
            placeholder="**********"
            style={styles.input}
            onChangeText={(confirm_password) =>
              setConfirmPwd(confirm_password)
            }
            secureTextEntry={true}
          />
          <TouchableOpacity onPress={() => register()}>
            <BtnCTA text={"S'inscrire"} />
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
    marginBottom:10
  },
  item: {
    fontFamily:"VarelaRound",
    textAlign:"justify",
    lineHeight:20,
    marginTop:5,
    marginBottom:5,
    fontWeight:"bold"
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
