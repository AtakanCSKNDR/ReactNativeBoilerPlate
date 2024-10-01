import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AccordionPanel from '../../core/atomic/atoms/AccordionPanel';
import DrawerExampleScreen from './DrawerExampleScreen';
import { ScrollView } from 'react-native-gesture-handler';
import BPText from '../../core/atomic/atoms/BPText';

const ComponentScreen = () => {
  return (
    <ScrollView style={styles.container}>
        <BPText type="title" text="Başlarken"></BPText>
        <BPText type="body" text="Bu kılavuz, bileşenlerimizi sayfalara nasıl ekleyebileceğinizi gösteren örnekler sunmaktadır ve projelerinizde bu bileşenleri doğru şekilde kullanmanıza yardımcı olacaktır."></BPText>
        <View style={{marginTop:12}}>
          <AccordionPanel title="Drawer Bileşeni">
            <DrawerExampleScreen></DrawerExampleScreen>
          </AccordionPanel>
          <AccordionPanel title="Button Bileşeni">
            <Text>Yapım Aşamasında ...</Text>
          </AccordionPanel>
          <AccordionPanel title="Text Bileşeni">
            <Text>Yapım Aşamasında ...</Text>
          </AccordionPanel>
          <AccordionPanel title="CodeBlock Bileşeni">
            <Text>Yapım Aşamasında ...</Text>
          </AccordionPanel>
        </View>
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
