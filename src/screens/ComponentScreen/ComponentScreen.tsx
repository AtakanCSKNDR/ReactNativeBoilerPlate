import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AccordionPanel from '../../core/atomic/atoms/AccordionPanel';
import DrawerExampleScreen from './DrawerExampleScreen';
import { ScrollView } from 'react-native-gesture-handler';
import BPText from '../../core/atomic/atoms/BPText';
import { useTranslation } from 'react-i18next';

const ComponentScreen = () => {
  const { t} = useTranslation(); 
  return (
    <ScrollView style={styles.container}>
        <BPText type="header" text={t("GETTING_STARTED")}></BPText>
        <BPText type="body" text={t("GETTIN_STARTED_HELPER_TEXT")}></BPText>
        <View style={{marginTop:12}}>
          <AccordionPanel title={t("DRAWER_COMPONENT")}>
            <DrawerExampleScreen></DrawerExampleScreen>
          </AccordionPanel>
          <AccordionPanel title={t("BUTTON_COMPONENT")}>
            <Text>Yapım Aşamasında ...</Text>
          </AccordionPanel>
          <AccordionPanel title={t("TEXT_COMPONENT")}>
            <Text>Yapım Aşamasında ...</Text>
          </AccordionPanel>
          <AccordionPanel title={t("CODEBLOCK_COMPONENT")}>
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
    padding: 16,
    backgroundColor:"#FFF"
  },
});
