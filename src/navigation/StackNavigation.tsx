import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigation from './TabNavigation';
import BottomDrawerScreen from '../core/atomic/templates/BottomDrawerScreen';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="TabNavigation" component={TabNavigation} />
      <Stack.Screen
          name="BottomDrawerScreen"
          component={BottomDrawerScreen}
          options={modalOptions}
        />
    </Stack.Navigator>
  );
};

export default StackNavigation;

const modalOptions: any = {
    presentation: 'transparentModal',
    animation: 'none',
    headerShown: false,
  };

const styles = StyleSheet.create({});
