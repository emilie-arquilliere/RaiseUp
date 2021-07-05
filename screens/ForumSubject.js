import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
} from "react-native";
import IconProfil from "../component/IconProfil";
import PageTitle from "../component/PageTitle";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Avatar } from "react-native-elements/dist/avatar/Avatar";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import TopLeft from "../component/viewDesign/TopLeft";
import MiddleRight from "../component/viewDesign/MiddleRight";
import BottomLeft from "../component/viewDesign/BottomLeft";
import BtnCTA from "../component/BtnCTA";
import { useFonts } from "expo-font";

export default function ForumPage({ navigation }) {
  const theme = "La peur";

  const [questions, setQuestions] = useState([
    "Comment se débarasser de sa peur ?",
    "Je suis toujours angoissé, comment faire pour arrêter ?",
  ]);
  const [answers, setAnswers] = useState([
    "reponse1",
    "reponse2",
    "reponse3",
    "reponse4",
  ]);

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
        <View style={styles.viewSubject}>
          <Text style={styles.subject}>Topic : {theme}</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("CreateSubject")}>
          <BtnCTA text={"Créer un sujet"} />
        </TouchableOpacity>
        <View style={{ width: "100%", height: "60%" }}>
          <KeyboardAwareScrollView
            contentContainerStyle={{ alignItems: "center" }}
          >
            {questions.map((question, index) => (
              <View style={styles.ensemble} key={index}>
                <View style={styles.question}>
                  <View style={{ alignItems: "center" }}>
                    <Avatar
                      rounded
                      source={require("../assets/images/accroupie.jpg")}
                      size="medium"
                      containerStyle={styles.photo}
                    />
                    <Text>nom</Text>
                  </View>
                  <Text style={styles.question_content}>{question}</Text>
                </View>
                <View
                  style={{
                    width: "100%",
                    height: "75%",
                  }}
                >
                  <KeyboardAwareScrollView
                    contentContainerStyle={{ alignItems: "center" }}
                  >
                    {answers.map((answer, index) => (
                      <View style={styles.answer} key={index}>
                        <View style={{ alignItems: "center" }}>
                          <Avatar
                            rounded
                            source={require("../assets/images/accroupie.jpg")}
                            size="medium"
                            containerStyle={styles.photo}
                          />
                          <Text>nom</Text>
                        </View>
                        <Text style={styles.answer_content}>{answer}</Text>
                      </View>
                    ))}
                    <View style={styles.answer} key={index}>
                      <View style={{ alignItems: "center" }}>
                        <Avatar
                          rounded
                          source={require("../assets/images/accroupie.jpg")}
                          size="medium"
                          containerStyle={styles.photo}
                        />
                        <Text>nom</Text>
                      </View>
                      <TextInput
                        style={styles.answer_content}
                        multiline={true}
                      />
                      <FontAwesomeIcon
                        icon={faAngleDoubleRight}
                        style={{ alignSelf: "center", marginLeft: 5 }}
                        onPress={() => alert("ok")}
                        size={20}
                      />
                    </View>
                  </KeyboardAwareScrollView>
                </View>
              </View>
            ))}
          </KeyboardAwareScrollView>
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
  viewSubject:{
    width:"100%",
    height:"10%",
    backgroundColor:"#D77AFF",
    justifyContent:"center",
    marginTop:"30%",
    marginBottom:10
  },
  subject:{
    color:"white",
    textAlign:"center",
    fontFamily: "VarelaRound",
    fontSize:20
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
  ensemble: {
    marginTop: 10,
    marginBottom: 20,
    width: "80%",
    height: 300,
  },
  question: {
    flexDirection: "row",
    backgroundColor: "#d1bdb1",
    height: "25%",
    borderRadius: 5,
    padding: 5,
    width: "100%",
  },
  question_content: {
    width: "75%",
    marginLeft: 10,
    textAlign: "center",
    alignSelf: "center",
  },
  answer: {
    flexDirection: "row",
    backgroundColor: "#f0efec",
    width: "97%",
    padding: 10,
  },
  answer_content: {
    backgroundColor: "white",
    overflow: "hidden",
    marginLeft: 15,
    padding: 5,
    borderRadius: 10,
    width: "70%",
  },
  photo: {
    borderColor: "#BD7B49",
    borderWidth: 4,
  },
});
