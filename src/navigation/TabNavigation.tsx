import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import ComponentScreen from '../screens/ComponentScreen/ComponentScreen';
import Icon from 'react-native-vector-icons/Octicons';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
    screenOptions={({route}:any) => ({
        headerShown: false,
        tabBarActiveTintColor: '#2684fe',
        tabBarInactiveTintColor: '#a1a1a1',
        tabBarStyle: {
          height: 60,
        },
        tabBarLabelStyle: {fontSize: 12, display: 'none'},
        tabBarIcon: ({focused, color, size}) => {return iconRender(focused , route.name)},
      })}
      >
      <Tab.Screen name="ComponentScreen" component={ComponentScreen} />
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({});

const iconRender = (focused:any , routeName:any) => {
  let iconEnum:any = {
    "HomeScreen":<Icon name="home" size={20} color={focused ? "#2684fe": "#a3a3a3"} />,
    "ComponentScreen":<Icon name="book" size={20} color={focused ? "#2684fe": "#a3a3a3"} />,
    "ProfileScreen":<Icon name="person" size={20} color={focused ? "#2684fe": "#a3a3a3"} />,
  }
  return iconEnum[routeName]
}
