import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const BPText = ({type, color, text}: any) => {
  const typeEnum: any = {
    header: styles.header,
    title: styles.title,
    subtitle: styles.subtitle,
    description: styles.description,
    body: styles.body,
    label: styles.label,
  };
  return <Text style={[typeEnum[type], {marginVertical: 8 , color:color || typeEnum[type].color}]}>{text}</Text>;
};

export default BPText;

const styles = StyleSheet.create({
  header: {color: '#333', fontSize: 24, fontWeight: '600'},
  title: {color: '#444', fontSize: 18, fontWeight: '600'},
  subtitle: {color: '#555', fontSize: 16, fontWeight: '500'},
  description: {color: '#999', fontSize: 14},
  body: {color: '#666', fontSize: 14},
  label: {color: '#999', fontSize: 12},
});
