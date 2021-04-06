import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function InscriptionPage({navigation}) {
  return (
    <View>
      <Text onPress={() => navigation.navigate('Accueil')} style={styles.item}>Vers accueil</Text>
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
