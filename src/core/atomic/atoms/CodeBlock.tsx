import {StyleSheet, Text, ScrollView, View} from 'react-native';
import React from 'react';
import BPText from './BPText';

const CodeBlock = ({text}: any) => {
  return (
    <ScrollView horizontal={true} style={styles.scrollView}>
      <View style={styles.codeBlock}>
        <BPText text={text} type="label" />
      </View>
    </ScrollView>
  );
};

export default CodeBlock;

const styles = StyleSheet.create({
  scrollView: {
    maxHeight: 150,
    marginBottom: 8,
    width: '100%',
  },
  codeBlock: {
    backgroundColor: '#eaeaea',
    padding: 10,
    borderRadius: 5,
    fontSize: 12,
    flexWrap: 'nowrap',
    minWidth: '100%',
    flex: 1,
  },
});
