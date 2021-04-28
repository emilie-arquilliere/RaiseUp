import React from 'react';
import { StyleSheet} from 'react-native';
import { Avatar } from 'react-native-elements';

export default function FirstPage({navigation}) {
  return (
    <Avatar
      rounded
      source={require('../assets/images/accroupie.jpg')}
      size='medium'
      containerStyle={styles.container}
      onPress={()=> navigation.navigate('Profil')}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    position:'absolute',
    top:'10%',
    right:'5%',
    borderColor:'#BD7B49',
    borderWidth:4
  }
});
