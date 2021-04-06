import React from 'react';
import AccueilPage from '../screens/AccueilPage';
import FirstPage from '../screens/FirstPage';
import ConnexionPage from '../screens/ConnexionPage';
import InscriptionPage from '../screens/InscriptionPage';
import ForumPage from '../screens/ForumPage';
import EventPage from '../screens/EventPage';
import ProfilPage from '../screens/ProfilPage';
import PodcastsPage from '../screens/PodcastsPage';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function MainNavigator() {
  return (
    <Stack.Navigator /*screenOptions={{headerShown: false}}*/>
      <Stack.Screen name="First" component={FirstPage}/>
      <Stack.Screen name="Accueil" component={AccueilPage}/>
      <Stack.Screen name="Connexion" component={ConnexionPage}/>
      <Stack.Screen name="Inscription" component={InscriptionPage}/>
      <Stack.Screen name="Forum" component={ForumPage}/>
      <Stack.Screen name="Evenement" component={EventPage}/>
      <Stack.Screen name="Podcasts" component={PodcastsPage}/>
      <Stack.Screen name="Profil" component={ProfilPage}/>
    </Stack.Navigator>
  );
}
