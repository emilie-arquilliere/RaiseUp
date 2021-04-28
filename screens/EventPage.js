import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import IconProfil from '../component/IconProfil';
import PageSubitle from '../component/PageSubtitle';
import PageTitle from '../component/PageTitle';

export default function EventPage({navigation}) {
  return (
    <View>
      <ImageBackground source={require("../assets/images/fond_noir.png")} style={styles.fondNoir}>
        <IconProfil navigation={navigation}/>
        <PageTitle content={'Évènements'} />
        <Text>Retrouvez ici tous les évènements passés et à venir, préparés avec amour par la team RaiseUp.</Text>
        <PageSubitle content='Les derniers live / meet up passés' />
        <FlatList/>
        <PageSubitle content='Les évènements du mois'/>
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
    fontSize: 78,
  },
  fondNoir:{
    resizeMode:'cover',
    height:'100%',
    justifyContent:'center',
    alignItems:'center'
  },
});
