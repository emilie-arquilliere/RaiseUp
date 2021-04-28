import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TextInput } from 'react-native';
import { CheckBox } from 'react-native-elements';

export default function ConnexionPage({navigation}) {
  return (
    <View>
      <ImageBackground source={require("../assets/images/palme_NB.jpg")} style={styles.fondPalme}>
        <ImageBackground source={require("../assets/images/fond_noir.png")} style={styles.fondNoir}>
          <Image source={require('../assets/images/raise_up_logo_FB.png')} style={styles.logo}/>
          <View style={styles.content}>
            <Text style={styles.titre}>Connexion</Text>
            <Text style={styles.item}>Email</Text>
            <TextInput placeholder='email@address.com' style={styles.input}/>
            <Text style={styles.item}>Mot de passe</Text>
            <TextInput placeholder='**********' style={styles.input}/>
            <CheckBox title='Se souvenir de moi' style={styles.item} />
            <View style={styles.viewBtnNavContent}>
              <Text onPress={() => navigation.navigate('Menu')} style={styles.btnNav}>Connexion</Text>
            </View>
            <Text style={{textAlign:'center'}}>Nouveau sur l'application ? C'est par ici :</Text>
            <View style={styles.viewBtnNavContent}>
              <Text onPress={() => navigation.navigate('Inscription')} style={styles.btnNav}>Je m'inscris</Text>
            </View>
          </View>
          <View style={styles.viewBtnNav}>
            <Text onPress={() => navigation.navigate('Menu')} style={styles.btnNav}>Connexion avec Facebook</Text>
            <Text onPress={() => navigation.navigate('Menu')} style={styles.btnNav}>Connexion avec Gmail</Text>
          </View>
        </ImageBackground>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    width:'100%',
    height:'100%'
  },
  fondPalme:{
    resizeMode:'contain',
    height:'100%'
  },
  fondNoir:{
    resizeMode:'cover',
    height:'100%',
    justifyContent:'center',
    alignItems:'center'
  },
  logo:{
    resizeMode:'contain',
    height:'19%',
    position:'absolute',
    top:'5%',
    width:'100%'
  },
  content:{
    position:'absolute',
    top:'20%',
    width:'70%',
    height:'55%',
    borderBottomWidth:2,
    borderBottomColor:'grey'
  },
  item:{
    margin:10
  },
  titre:{
    textAlign:'center',
    fontSize:20
  },
  input:{
    borderColor:'#000',
    borderWidth:1,
    borderRadius:20,
    backgroundColor:'#f0efec',
    width:'100%',
    height:'15%',
    padding:'5%'
  },
  viewBtnNavContent:{
    position:'relative',
    shadowColor:'black',
    shadowOffset:{width:0,height:3},
    shadowOpacity:0.3,
    shadowRadius:4,
    width:'80%',
    left:25
  },
  viewBtnNav:{
    position:'absolute',
    bottom:'5%',
    shadowColor:'black',
    shadowOffset:{width:0,height:3},
    shadowOpacity:0.3,
    shadowRadius:4
  },
  btnNav:{
    overflow:'hidden',
    borderRadius:25,
    backgroundColor:'#D3FCF7',
    textAlign:'center',
    padding:15,
    margin:10
  }
});
