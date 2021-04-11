import * as React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import PodcastsPage from "../screens/PodcastsPage";
import AccueilPage from "../screens/AccueilPage";
import ForumPage from "../screens/ForumPage";
import EventPage from "../screens/EventPage";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {faHome, faPodcast, faCalendarAlt, faComments} from '@fortawesome/free-solid-svg-icons';


const Tab = createBottomTabNavigator();

export default function Menu() {
    return (
        <Tab.Navigator screenOptions={({route}) => ({
                tabBarIcon: () => {
                    let iconName;

                    if (route.name === 'Accueil') {
                        iconName = faHome;
                    } else if (route.name === 'Podcasts') {
                        iconName = faPodcast;
                    } else if (route.name === 'Forum') {
                        iconName = faComments;
                    } else if (route.name === 'Event') {
                        iconName = faCalendarAlt;
                    }

                    return <FontAwesomeIcon icon={iconName} color={'white'} />;
                },
            })}
            tabBarOptions={{
                showLabel: false,
                style:{
                    backgroundColor: '#BD7B49'
                }
            }}
        >
            <Tab.Screen name="Accueil" component={AccueilPage} />
            <Tab.Screen name="Podcasts" component={PodcastsPage}/>
            <Tab.Screen name="Forum" component={ForumPage}/>
            <Tab.Screen name="Event" component={EventPage}/>
        </Tab.Navigator>
    )}