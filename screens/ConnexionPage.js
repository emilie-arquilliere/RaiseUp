import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';

export default function ConnexionPage({navigation}) {
  return (
    <View>
      <ImageBackground source={require("../images/palme_NB.jpg")} style={styles.fondPalme}>
        <ImageBackground source={require("../images/fond_noir.png")} style={styles.fondNoir}>
          <Image source={require('../images/logo_raise_up.png')} style={styles.logo}/>

          <View style={styles.viewBtnNav}>
            <Text onPress={() => navigation.navigate('Menu')} style={styles.btnNav}>Vers accueil</Text>
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
  viewBtnNav:{
    position:'absolute',
    bottom:'15%',
    shadowColor:'black',
    shadowOffset:{width:0,height:3},
    shadowOpacity:0.3,
    shadowRadius:4
  },
  btnNav:{
    overflow:'hidden',
    borderRadius:25,
    backgroundColor:'#D3FCF7',
    padding:15
  }
});
