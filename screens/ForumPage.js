import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export default function ForumPage({navigation}) {
  return (
    <View style={styles.container}>
      <Text onPress={() => navigation.navigate('Podcasts')} style={styles.item}>Vers podcasts</Text>
      <Text onPress={() => navigation.navigate('Accueil')} style={styles.item}>Vers accueil</Text>
      <Text onPress={() => navigation.navigate('Evenement')} style={styles.item}>Vers events</Text>
      <Text onPress={() => navigation.navigate('Profil')} style={styles.item}>Vers profil</Text>
      <FontAwesomeIcon icon={faHome} color="#777777"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    width:'100%',
    height:'100%'
  },
  item: {
    textAlign: 'center',
    padding: 10,
    fontSize: 20,
  },
});
