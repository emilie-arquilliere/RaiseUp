import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import IconProfil from '../component/IconProfil';
import PageTitle from '../component/PageTitle';

export default function ForumPage({navigation}) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require("../assets/images/fond_noir.png")} style={styles.fondNoir}>
        <IconProfil navigation={navigation}/>
        <PageTitle content={'Forum'}/>
        <Text>
          Toute la team RaiseUp est là pour vous aider et vous accompagner dans votre évolution.
          Cette dernière ne se fait pas seule mais entouré. La communauté est là pour vous aider et vous soutenir.
          N'hésitez pas à laisser un message !
        </Text>
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
  item: {
    textAlign: 'center',
    padding: 10,
    fontSize: 20,
  },
  fondNoir:{
    resizeMode:'cover',
    height:'100%',
    justifyContent:'center',
    alignItems:'center'
  },
});
