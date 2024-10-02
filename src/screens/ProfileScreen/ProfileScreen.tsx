import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BPText from '../../core/atomic/atoms/BPText';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <BPText type="title" text="Profil"/>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
});
