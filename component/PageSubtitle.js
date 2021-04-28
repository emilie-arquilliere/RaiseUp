import React from 'react';
import { StyleSheet, Text} from 'react-native';

export default function PageSubitle({content}) {
  return (
    <Text style={styles.subtitle}>{content}</Text>
  );
}

const styles = StyleSheet.create({
    subtitle:{
      position:'relative',
      left:'10%',
      width:'100%',
      fontSize:15,
      fontWeight:'bold'
  }
});
