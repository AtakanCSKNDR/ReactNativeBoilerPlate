import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DefaultContextProvider} from './stores/DefaultContext';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './navigation/StackNavigation';
import './core/localization/i18n.ts'; // i18n yapılandırmasını başlat

const App = () => {
  return (
    <DefaultContextProvider>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </DefaultContextProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
