import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Avatar } from "react-native-elements/dist/avatar/Avatar";
import { useFonts } from "expo-font";

export default function ProfilPage({ navigation }) {
  const [loaded] = useFonts({
    CormorantGaramond: require("../assets/font/CormorantGaramond-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View>
      <ImageBackground
        source={require("../assets/images/fond_noir.png")}
        style={styles.fondNoir}
      >
        <Text style={styles.title}>Profil</Text>
        <View style={styles.contour}>
          <View style={styles.interieur}>
            <View style={{ padding: 3, flexDirection: "row" }}>
              <Avatar
                rounded
                source={require("../assets/images/accroupie.jpg")}
                size="medium"
                containerStyle={styles.photo}
              />
              <Text style={{ textAlign: "center", marginLeft: "15%" }}>
                Emilie {"\n"}
                {true ? (
                  <Text>Abonnement annuel</Text>
                ) : (
                  <Text>Abonnement gratuit</Text>
                )}
              </Text>
            </View>
            <TouchableOpacity
              style={{ padding: 5, paddingLeft: 20 }}
              onPress={() => navigation.navigate("Coach")}
            >
              <Text>Mon coach</Text>
              <FontAwesomeIcon
                icon={faChevronRight}
                color={"black"}
                size={15}
                style={styles.arrow}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ padding: 5, paddingLeft: 20 }}
              onPress={() => navigation.navigate("ListChallenge")}
            >
              <Text>Mes challenges</Text>
              <FontAwesomeIcon
                icon={faChevronRight}
                color={"black"}
                size={15}
                style={styles.arrow}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            height: "20%",
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          <ImageBackground
            source={require("../assets/images/yoga.jpg")}
            style={{
              width: "100%",
              height: "100%",
              resizeMode: "contain",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontWeight: "bold",
                marginBottom: 30,
                marginTop: 10,
              }}
            >
              Abonnement RaiseUp
            </Text>
            <Text
              style={{
                width: "80%",
                color: "white",
                textAlign: "center",
                marginBottom: 30,
              }}
            >
              Votre évolution est à portée de doigt grâce aux séances de
              coaching et aux challenges !
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Abonnement")}>
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Je veux en savoir plus sur l'abonnement
              </Text>
              <FontAwesomeIcon
                icon={faChevronRight}
                color={"white"}
                size={15}
                style={{ position: "absolute", right: "-5%" }}
              />
            </TouchableOpacity>
          </ImageBackground>
        </View>

        <View style={styles.param}>
          <Text style={{ fontWeight: "bold", padding: 8 }}>
            Paramètres du compte
          </Text>
          <View style={styles.paramItem}>
            <Text>Changer le mot de passe</Text>
            <FontAwesomeIcon
              icon={faChevronRight}
              color={"black"}
              size={15}
              style={styles.arrow}
            />
          </View>
          <View style={styles.paramItem}>
            <Text>Mes informations personnelles</Text>
            <FontAwesomeIcon
              icon={faChevronRight}
              color={"black"}
              size={15}
              style={styles.arrow}
            />
          </View>
          <View style={styles.paramItem}>
            <Text>Politique de confidentialité</Text>
            <FontAwesomeIcon
              icon={faChevronRight}
              color={"black"}
              size={15}
              style={styles.arrow}
            />
          </View>
          <View style={styles.paramItem}>
            <Text>Conditions générales d'utilisation</Text>
            <FontAwesomeIcon
              icon={faChevronRight}
              color={"black"}
              size={15}
              style={styles.arrow}
            />
          </View>
          <View style={{ flexDirection: "row", padding: 8 }}>
            <Text style={{ textAlign: "left" }}>
              Conditions générales de vente
            </Text>
            <FontAwesomeIcon
              icon={faChevronRight}
              color={"black"}
              size={15}
              style={styles.arrow}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.viewBtnNav} onPress={() => alert("ok")}>
          <Text style={styles.btnNav}>Je me déconnecte</Text>
        </TouchableOpacity>
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
  title: {
    position: "absolute",
    top: "13%",
    fontSize: 25,
    fontFamily: "CormorantGaramond",
  },
  item: {
    textAlign: "center",
    padding: 10,
    fontSize: 78,
  },
  fondNoir: {
    resizeMode: "cover",
    height: "100%",
    alignItems: "center",
  },
  contour: {
    borderTopColor: "black",
    borderBottomColor: "black",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    width: "80%",
    height: "18%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "35%",
  },
  interieur: {
    width: "90%",
    height: "90%",
    backgroundColor: "#d1bdb1",
    borderRadius: 15,
  },
  viewBtnNav: {
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
  param: {
    width: "90%",
    height: "27%",
    backgroundColor: "#d1bdb1",
    borderRadius: 15,
    marginBottom: 15,
  },
  paramItem: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    flexDirection: "row",
    padding: 8,
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
