import React, { useEffect } from "react";
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
                <Text style={styles.titre}>Connexion</Text>
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

                <TouchableOpacity
                  style={styles.viewBtnNavContent}
                  onPress={() => connect()}
                >
                  <Text style={styles.btnNavContent}>Connexion</Text>
                </TouchableOpacity>
                <Text style={{ textAlign: "center" }}>
                  Nouveau sur l'application ? C'est par ici :
                </Text>
                <TouchableOpacity
                  style={styles.viewBtnNavContent}
                  onPress={() => navigation.navigate("Inscription")}
                >
                  <Text style={styles.btnNavContent}>Je m'inscris</Text>
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
    width: "100%",
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
    height: "55%",
    borderBottomWidth: 2,
    borderBottomColor: "grey",
  },
  item: {
    margin: 10,
  },
  titre: {
    textAlign: "center",
    fontSize: 25,
    marginTop: 10,
    fontFamily: "CormorantGaramond",
  },
  input: {
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: "#f0efec",
    width: "100%",
    height: "15%",
    padding: "5%",
  },
  viewBtnNavContent: {
    position: "relative",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    width: "80%",
    left: 25,
    marginTop: 20,
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
    margin: 10,
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
