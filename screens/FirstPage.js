import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function FirstPage({navigation}) {
  return (
    <View>
      <Text onPress={() => navigation.navigate('Connexion')} style={styles.item}>Vers connexion</Text>
      <Text onPress={() => navigation.navigate('Inscription')} style={styles.item}>Vers inscription</Text>
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
