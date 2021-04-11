import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

export default function FirstPage({navigation}) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require("../images/palme_doree.jpg")} style={styles.fondPalme}>
        <ImageBackground source={require("../images/fond_noir.png")} style={styles.fondNoir}>
          <Image source={require('../images/logo_raise_up.png')} style={styles.logo}/>
          <View style={styles.viewText}>
            <Text style={styles.textHaut}>
              Bienvenue sur l'application RaiseUp.
              Toute l'équipe est là pour t'aider à devenir la meilleure version de toi même.
              Tu pourras t'élever (t'améliorer) grâce à des podcasts, des évènements abordants différents thèmes
              du développement personnel.
              Nous pouvons même te proposer un coach pour aller plus loin dans ton évolution.
            </Text>
            <Text style={styles.ligneBas}>Merci de nous faire confiance pour ton évolution,</Text>
            <Image source={require('../images/team_raise_up.png')} style={styles.signature}  />
          </View>
          <View style={styles.viewBtnNav}>
            <Text onPress={() => navigation.navigate('Connexion')} style={styles.btnNav}>Je veux m'élever !</Text>
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
  viewText:{
    height:'45%',
    width:'85%',
    alignItems:'center',
    backgroundColor: 'rgba(255,255,255,0.8)'
  },
  textHaut:{
    marginTop:'5%',
    width:'90%',
    textAlign:'justify',
    lineHeight:25,
    fontSize:13
  },
  ligneBas:{
    position:'absolute',
    right:'5%',
    bottom:'29%',
    fontSize:13
  },
  signature:{
    position:'absolute',
    bottom:'5%',
    right:'0%',
    resizeMode:'cover',
    width:'55%',
    height:'15%'
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
