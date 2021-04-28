import React from 'react';
import { StyleSheet, View, ImageBackground, Image } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import IconProfil from '../component/IconProfil';
import PageSubitle from '../component/PageSubtitle';
import PageTitle from '../component/PageTitle';

export default function PodcastsPage({navigation}) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require("../assets/images/fond_noir.png")} style={styles.fondNoir}>
        <ScrollView>
          <IconProfil navigation={navigation}/>
          <PageTitle content={'Podcast'}/>
          <Image/>
          <PageSubitle content='Derniers podcasts écoutés'/>
          <FlatList/>
          <PageSubitle content='Les séries qui cartonnent'/>
          <FlatList/>
          <PageSubitle content='Les podcasts de RaiseUp'/>
          <FlatList/>
        </ScrollView>
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
