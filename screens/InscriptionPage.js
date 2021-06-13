import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useFonts } from "expo-font";
import { cond } from "react-native-reanimated";

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
    console.log(inscription);
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
    CormorantGaramond: require("../assets/font/CormorantGaramond-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View>
      <ImageBackground
        source={require("../assets/images/fleur_NB.png")}
        style={styles.fondPalme}
      >
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
              <Image
                source={require("../assets/images/logo_raise_up.png")}
                style={styles.logo}
              />
              <View style={styles.content}>
                <Text style={styles.titre}>Inscription</Text>
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
                <TouchableOpacity
                  style={styles.viewBtnNavContent}
                  onPress={() => register()}
                >
                  <Text style={styles.btnNavContent}>Connexion</Text>
                </TouchableOpacity>
              </View>
            </KeyboardAwareScrollView>
          </View>
        </ImageBackground>
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
  fondPalme: {
    resizeMode: "contain",
    height: "100%",
  },
  fondNoir: {
    resizeMode: "cover",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    resizeMode: "cover",
    height: "20%",
    position: "absolute",
    top: "5%",
    width: "100%",
  },
  content: {
    position: "absolute",
    top: "20%",
    width: "70%",
    height: "60%",
    borderBottomWidth: 2,
    borderBottomColor: "grey",
  },
  item: {
    margin: 5,
  },
  titre: {
    textAlign: "center",
    fontSize: 25,
    fontFamily: "CormorantGaramond",
    marginTop: 10,
  },
  input: {
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: "#f0efec",
    width: "100%",
    height: "10%",
    padding: "5%",
  },
  viewBtnNavContent: {
    position: "relative",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    width: "80%",
    margin: 10,
    left: 15,
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
    backgroundColor: "#BD7B49",
    textAlign: "center",
    padding: 15,
    margin: 5,
    color: "white",
  },
  btnNavContent: {
    overflow: "hidden",
    borderRadius: 25,
    backgroundColor: "#D3FCF7",
    textAlign: "center",
    padding: 15,
    margin: 10,
  },
});
