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
  return (
    <Text style={[typeEnum[type], {color: color || typeEnum[type].color}]}>
      {text}
    </Text>
  );
};

export default BPText;

const styles = StyleSheet.create({
  header: {
    lineHeight: 30,
    marginVertical: 12,
    color: '#333',
    fontSize: 24,
    fontWeight: '600',
  },
  title: {
    lineHeight: 18,
    marginVertical: 8,
    color: '#444',
    fontSize: 18,
    fontWeight: '600',
  },
  subtitle: {
    lineHeight: 22,
    marginVertical: 4,
    color: '#555',
    fontSize: 16,
    fontWeight: '500',
  },
  description: {lineHeight: 18, color: '#999', fontSize: 14},
  body: {lineHeight: 18, color: '#666', fontSize: 14},
  label: {lineHeight: 16, color: '#999', fontSize: 12},
});
