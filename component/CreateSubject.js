import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import IconProfil from "../component/IconProfil";
import BtnRetour from "../component/BtnRetour";
import PageTitle from "../component/PageTitle";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function ForumPage({ navigation }) {
  const [theme, setTheme] = useState(1);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/fond_noir.png")}
        style={styles.fondNoir}
      >
        <IconProfil navigation={navigation} />
        <PageTitle content={"Forum"} />
        <BtnRetour navigation={navigation} />
        <Text
          style={{ fontWeight: "bold", marginTop: "40%", marginBottom: 50 }}
        >
          Poser une question
        </Text>
        <Text style={{ marginBottom: 20 }}>
          Écrivez ci-dessous le sujet que vous souhaitez aborder
        </Text>
        <TextInput style={styles.input} multiline={true} />
        <Picker
          style={{
            height: "20%",
            width: "90%",
            marginBottom: 10,
          }}
          mode="dialog"
          onValueChange={(itemValue, itemIndex) => setTheme(itemValue)}
          selectedValue={theme}
          itemStyle={{
            color: "black",
            height: "100%",
          }}
        >
          <Picker.Item label="Sélectionner un thème" value="0" />
          <Picker.Item label="La peur" value="1" />
          <Picker.Item label="La confiance en soi" value="2" />
          <Picker.Item label="L'estime de soi" value="3" />
        </Picker>

        <TouchableOpacity style={styles.viewBtnNav} onPress={() => alert("ok")}>
          <Text style={styles.btnNav}>Enregistrer</Text>
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
  input: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 25,
    width: "80%",
    height: "30%",
    padding: 15,
    marginBottom: 20,
  },
  fondNoir: {
    resizeMode: "cover",
    height: "100%",
    alignItems: "center",
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
    backgroundColor: "#D3FCF7",
    textAlign: "center",
    padding: 15,
    margin: 10,
  },
});
