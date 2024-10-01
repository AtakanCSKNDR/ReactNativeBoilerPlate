import {StyleSheet, View} from 'react-native';
import React from 'react';
import AccordionPanel from '../../core/atomic/atoms/AccordionPanel';
import DrawerExampleScreen from './DrawerExampleScreen';
import { ScrollView } from 'react-native-gesture-handler';
import BPText from '../../core/atomic/atoms/BPText';

const ComponentScreen = () => {
  return (
    <ScrollView style={styles.container}>
        <BPText type="title" text="Getting Started"></BPText>
        <BPText type="body" text="Bu klavuz bileşenlerimizi sayfalarımıza ekleme örnekleri içermektedir."></BPText>
      <AccordionPanel title="Drawer Component">
        <DrawerExampleScreen></DrawerExampleScreen>
      </AccordionPanel>
    </ScrollView>
  );
};

export default ComponentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
});
