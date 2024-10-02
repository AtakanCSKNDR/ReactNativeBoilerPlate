import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BPDivider = () => {
  return (
    <View style={styles.divider}>
    </View>
  )
}

export default BPDivider

const styles = StyleSheet.create({
    divider:{
        height:1,
        borderBottomWidth:1,
        borderBottomColor:"#dedede",
        flex:1,
        marginVertical:8
    }
})