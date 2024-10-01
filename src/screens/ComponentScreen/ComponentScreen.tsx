import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import AccordionPanel from '../../core/atomic/atoms/AccordionPanel';

const ComponentScreen = () => {
  return (
    <View style={styles.container}>
      <AccordionPanel title="Component Name">
        <Text>ComponentScreen</Text>
      </AccordionPanel>
    </View>
  );
};

export default ComponentScreen;

const styles = StyleSheet.create({
    container:  { 
        flex:1,
        padding:8
    }
})