import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ForumPage({navigation}) {
  return (
    <View>
      <Text onPress={() => navigation.navigate('Podcasts')} style={styles.item}>Vers podcasts</Text>
      <Text onPress={() => navigation.navigate('Accueil')} style={styles.item}>Vers accueil</Text>
      <Text onPress={() => navigation.navigate('Evenement')} style={styles.item}>Vers events</Text>
      <Text onPress={() => navigation.navigate('Profil')} style={styles.item}>Vers profil</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    marginTop: 40,
  },
  item: {
    textAlign: 'center',
    padding: 10,
    fontSize: 78,
  },
});
