import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import CameraScreen from "./screens/CameraScreen";
import FeedScreen from "./screens/FeedScreen";
import ImagesScreen from "./screens/ImagesScreen";

import DemoNavigator from "./navigators/DemoNavigator";
import 'react-native-gesture-handler';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import Constants from "expo-constants";
const { manifest } = Constants;
console.log('%c⧭', 'color: #00e600', manifest);
const Tab = createBottomTabNavigator();
const uri = (typeof manifest.packagerOpts === `object`) && manifest.packagerOpts.dev
  ? manifest.debuggerHost.split(`:`).shift().concat(`:4000/graphql`)
  : `api.example.com`;
  console.log(uri);
export default function App() {
  const client = new ApolloClient({
    uri: `http://${uri}`,
    // uri: 'http://192.168.1.165:4000/graphql',
    cache: new InMemoryCache(),
  });

  client.query({
    query: gql`
    query WilderList {
  wilderList {
    first_name
    id
  }
}
    `
  }).then(
    (result) => console.log(result)
  )
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Camera") {
              iconName = focused ? "camera" : "camera-outline";
            } else if (route.name === "Images") {
              iconName = focused ? "image" : "image-outline";
            } else if (route.name === "Feed") {
              iconName = focused ? "share-social" : "share-social-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Camera" component={CameraScreen} options={{ unmountOnBlur: true }} />
        <Tab.Screen name="Images" component={ImagesScreen} />
        <Tab.Screen name="Feed" component={FeedScreen} />
        <Tab.Screen name="Demo" component={DemoNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

