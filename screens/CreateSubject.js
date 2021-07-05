import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";
import IconProfil from "../component/IconProfil";
import PageTitle from "../component/PageTitle";
import { TouchableOpacity } from "react-native-gesture-handler";
import MiddleLeft from "../component/viewDesign/MiddleLeft";
import MiddleRightTop from "../component/viewDesign/MiddleRightTop";
import BottomRight from "../component/viewDesign/BottomRight";
import BtnCTA from "../component/BtnCTA";
import { useFonts } from "expo-font";

export default function ForumPage({ navigation }) {
  const [theme, setTheme] = useState(1);
  const [loaded] = useFonts({
    VarelaRound: require("../assets/font/VarelaRound-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  } 

  return (
    <View style={styles.container}>
      <MiddleRightTop/>
      <MiddleLeft/>
      <BottomRight/>
      <IconProfil navigation={navigation} />
      <PageTitle content={"Forum"} />
      <View style={styles.content}>
        <Text style={styles.textTitle}>Posez une question</Text> 
        <Text style={styles.textInput}>
          Écrivez ci-dessous le sujet que vous souhaitez aborder :
        </Text>
        <TextInput style={styles.input} multiline={true} />
        <Picker
          style={styles.picker}
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
        <TouchableOpacity onPress={() => navigation.navigate("CreateSubject")}>
          <BtnCTA text={"Envoyer"} />
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
  textTitle:{
    marginTop:"30%",
    marginBottom: 20,
    fontSize:20,
    fontFamily: "VarelaRound",
  },
  textInput:{
    marginBottom: 20,
    fontFamily: "VarelaRound",
  },
  input: {
    backgroundColor: "white",
    borderRadius: 25,
    width: "80%",
    height: "30%",
    padding: 15,
    marginBottom: 10,
  },
  picker:{
    height: "20%",
    width: "90%",
    marginBottom: 20,
  }
});
