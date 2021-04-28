import React from 'react';
import FirstPage from '../screens/FirstPage';
import ConnexionPage from '../screens/ConnexionPage';
import InscriptionPage from '../screens/InscriptionPage';
import ProfilPage from '../screens/ProfilPage';
import Menu from '../component/Menu';
import IconProfil from '../component/IconProfil';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function MainNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="First" component={FirstPage}/>
      <Stack.Screen name="Menu" component={Menu}/>
      <Stack.Screen name="Connexion" component={ConnexionPage}/>
      <Stack.Screen name="Inscription" component={InscriptionPage}/>
      <Stack.Screen name="Profil" component={ProfilPage}/>
    </Stack.Navigator>
  );
}
