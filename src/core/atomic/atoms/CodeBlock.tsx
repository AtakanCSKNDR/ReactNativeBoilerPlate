import { StyleSheet, Text, ScrollView } from 'react-native'
import React from 'react'

const CodeBlock = ({ children }: any) => {
  return (
    <ScrollView horizontal={true} style={styles.scrollView}>
      <Text style={styles.codeBlock}>
        {children}
      </Text>
    </ScrollView>
  )
}

export default CodeBlock

const styles = StyleSheet.create({
  scrollView: {
    maxHeight: 150,
    marginBottom:8,
    width:"100%"
  },
  codeBlock: {
    backgroundColor: '#eaeaea',
    padding: 10,
    borderRadius: 5,
    fontSize: 12,
    flexWrap: 'nowrap',
    minWidth: '100%',
    flex:1,
  },
})
