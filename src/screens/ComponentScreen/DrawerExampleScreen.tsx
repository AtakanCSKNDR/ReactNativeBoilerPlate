import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import BPButton from '../../core/atomic/atoms/BPButton';
import CodeBlock from '../../core/atomic/atoms/CodeBlock';
import BPText from '../../core/atomic/atoms/BPText';
import {useTranslation} from 'react-i18next';
import BPDivider from '../../core/atomic/atoms/BPDivider';

const DrawerExampleScreen = () => {
  const navigation: any = useNavigation();
  const {t} = useTranslation();

  const handleOpen = () => {
    navigation.navigate('BottomDrawerScreen', {
      title: 'Title',
      subtitle: 'Subtitle test',
      children: <Text>Lorem Ipsum Dolor Sit Amet</Text>,
    });
  };

  return (
    <ScrollView>
      <BPButton title="Open Drawer" onPress={handleOpen} color="#238636" />
      <View style={{marginVertical: 6}}></View>
      <BPText type="body" text={t('DRAWER_COMPONENT_INFO')} />
      <BPDivider />
      <BPText type="title" text={t('HOW_TO_USE')} />
      <CodeBlock text={t('DRAWER_CODEBLOCK')} />
      <CodeBlock text={t('DRAWER_CODEBLOCK_BUTTON')} />
      <BPDivider />
      <BPText type="title" text={t('PROPERTIES')} />
      <BPText type="subtitle" text="title (string)" />
      <BPText type="body" text={t('DRAWER_TITLE_DESCRIPTION')} />
      <BPDivider />
      <BPText type="subtitle" text="subtitle (string)" />
      <BPText type="body" text={t('DRAWER_SUBTITLE_DESCRIPTION')} />
      <BPDivider />
      <BPText type="subtitle" text="children (ReactNode)" />
      <BPText type="body" text={t('DRAWER_CHILDREN_DESCRIPTION')} />
      <BPDivider />
      <BPText type="subtitle" text="fixed (boolean)" />
      <BPText type="body" text={t('DRAWER_FIXED_DESCRIPTION')} />
    </ScrollView>
  );
};

export default DrawerExampleScreen;

const styles = StyleSheet.create({
  property: {
    marginBottom: 6,
    paddingBottom: 6,
    borderBottomWidth: 0.3,
    borderBottomColor: '#ccc',
  },
  propertyTitle: {
    fontWeight: '500',
    color: '#444',
  },
  propertyDescription: {
    color: '#666',
  },
});
