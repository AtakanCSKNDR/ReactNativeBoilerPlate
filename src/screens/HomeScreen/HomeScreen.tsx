import {StyleSheet, View} from 'react-native';
import React from 'react';
import BPText from '../../core/atomic/atoms/BPText';
import ItemList from '../../core/atomic/organisms/ItemList';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <BPText type="header" text="Anasayfa" />
      <ItemList></ItemList>
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
