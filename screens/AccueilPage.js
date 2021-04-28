import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import IconProfil from '../component/IconProfil';
import PageTitle from '../component/PageTitle';
import PageSubtitle from '../component/PageSubtitle';

export default function AccueilPage({navigation}) {
  const prenom = 'Marie';
  const theme = 'La confiance en soi';
  return (
    <View style={styles.container}>
      <ImageBackground source={require("../assets/images/fond_noir.png")} style={styles.fondNoir}>
        <IconProfil navigation={navigation}/>
        <PageTitle content={'Hello '+prenom}/>
        <Text>"Se donner du mal pour les petites choses, c'est parvenir aux grandes avec le temps." - Samuel Beckett </Text>
        <View style={styles.theme}>
          <Text>Le thème de la semaine</Text>
          <Text>{theme}</Text>
        </View>
        <PageSubtitle content='Les nouveautés'/>
        <FlatList containerStyle={{backgroundColor:'red'}}/>
        <PageSubtitle content='Le suivi de ton évolution'/>
        <Text>Blablabla</Text>
        <PageSubtitle content='Les exercices de ton coach'/>
        <View style={styles.exercice}>
          <Text>Blablabla</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  fondNoir:{
    resizeMode:'cover',
    height:'100%',
    alignItems:'center'
  },
  theme:{
    position:'relative',
    width:'80%',
    backgroundColor:'#D3FCF7'
  },
  exercice:{

  }
});
