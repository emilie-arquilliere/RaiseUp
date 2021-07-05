import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PodcastsPage from "../screens/PodcastsPage";
import AccueilPage from "../screens/AccueilPage";
import ForumPage from "../screens/ForumPage";
import CreateSubject from "../screens/CreateSubject";
import PlayPodcast from "../screens/PlayPodcast";
import ForumSubject from "../screens/ForumSubject";
import ProfilPage from "../screens/ProfilPage";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faHome,
  faPodcast,
  faCalendarAlt,
  faComments,
} from "@fortawesome/free-solid-svg-icons";
import { color } from "react-native-reanimated";

const Tab = createBottomTabNavigator();

export default function Menu() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: () => {
          let iconName;

          if (route.name === "Accueil") {
            iconName = faHome;
          } else if (route.name === "Podcasts") {
            iconName = faPodcast;
          } else if (route.name === "Forum") {
            iconName = faComments;
          } else {
            iconName = faHome;
          }

          return <FontAwesomeIcon icon={iconName} color={"white"} size={25} />;
        },
      })}
      tabBarOptions={{
        showLabel:false,
        style: {
          backgroundColor: "#724997"
        }
      }}
    >
      <Tab.Screen name="Accueil" component={AccueilPage} />
      <Tab.Screen name="Podcasts" component={PodcastsPage} />
      <Tab.Screen name="Forum" component={ForumPage} />
      <Tab.Screen
        name="Profil"
        component={ProfilPage}
        options={{ tabBarButton: () => null }}
      />
      <Tab.Screen
        name="CreateSubject"
        component={CreateSubject}
        options={{ tabBarButton: () => null }}
      />
      <Tab.Screen
        name="PlayPodcast"
        component={PlayPodcast}
        options={{ tabBarButton: () => null }}
      />
      <Tab.Screen
        name="ForumSubject"
        component={ForumSubject}
        options={{ tabBarButton: () => null }}
      />
    </Tab.Navigator>
  );
}
