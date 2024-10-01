import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import BPButton from '../../core/atomic/atoms/BPButton';
import CodeBlock from '../../core/atomic/atoms/CodeBlock';
import BPText from '../../core/atomic/atoms/BPText';
import {drawerProperties} from '../../core/constants/drawerProperties';

const DrawerExampleScreen = () => {
  const navigation: any = useNavigation();

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
      <View style={{marginVertical:6}}></View>
      <BPText
        type="body"
        text="Drawer bileşeni, sayfa içerisinde bir bottom drawer açarak aktif pencereden ayrılmadan bileşenlerinizi render etmenizi sağlar."
      />
      <BPText type="title" text="Nasıl Kullanılır?" />
      <CodeBlock>
        {'navigation.navigate("BottomDrawerScreen", {\n'}
        {'  title: "Drawer Başlığı",\n'}
        {'  subtitle: "Drawer Açıklaması",\n'}
        {'  children: <Text>İçerik Burada Gösterilecek</Text>,\n'}
        {'  fixed: false,\n'}
        {'});'}
      </CodeBlock>
    
      <CodeBlock>
        {'<BPButton title="Open Drawer" onPress={handleOpen} color="#238636" />'}
      </CodeBlock>
      <BPText type="title" text="Properties" />

      {Object.keys(drawerProperties).map(key => (
        <View key={key} style={styles.property}>
          <Text style={styles.propertyTitle}>
            {key}: ({drawerProperties[key].type})
          </Text>
          <Text style={styles.propertyDescription}>
            {drawerProperties[key].description}
          </Text>
        </View>
      ))}
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
