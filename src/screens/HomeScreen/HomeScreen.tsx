import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Octicons';
import BPText from '../../core/atomic/atoms/BPText';

const HomeScreen = () => {
  const navigation: any = useNavigation();
  const handleOpen = () => {
    navigation.navigate('BottomDrawerScreen', {
      title: 'Test',
      subtitle: 'Test Subtitle',
      children: <Text>Lorem Ipsum Dolor Sit Amet</Text>,
    });
  };
  return (
    <View style={styles.container}>
      <BPText type="title" text="Anasayfa"/>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
});
