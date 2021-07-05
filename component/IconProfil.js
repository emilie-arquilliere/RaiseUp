import React from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet} from 'react-native';
import { Avatar } from 'react-native-elements';

export default function FirstPage({navigation}) {
  return (
    <TouchableOpacity 
      style={styles.icon}
      onPress={()=> navigation.navigate('Profil')}
    >
      <Avatar
        rounded
        source={require('../assets/images/accroupie.jpg')}
        size='medium'
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  icon: {
    position:'absolute',
    zIndex:1,
    top:'10%',
    right:'5%'
  }
});
