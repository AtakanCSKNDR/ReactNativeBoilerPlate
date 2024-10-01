import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import BPText from '../atoms/BPText';

const Item = (props: any) => {
  const {element} = props;
  return (
    <TouchableOpacity style={styles.item} activeOpacity={0.8}>
      <Image style={styles.image} source={{uri: element.url + '.png'}} />
      <View style={styles.content}>
        <BPText type="subtitle" text={element.title} />
        <BPText type="label" text={element.url} />
      </View>
    </TouchableOpacity>
  );
};

export default Item;

const styles = StyleSheet.create({
  item: {
    marginBottom: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#f8f8f8',
    backgroundColor: '#f8f8f8',
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    elevation: 5,
    backgroundColor: '#FFF',
    marginBottom: 8,
  },
  content: {
    paddingHorizontal: 10,
    paddingBottom: 8,
  },
});
