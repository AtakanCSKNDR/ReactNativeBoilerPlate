import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
  const navigation:any  = useNavigation()
  const handleOpen = () => { 
    navigation.navigate("BottomDrawerScreen" , {title:"Test" , subtitle:"Test Subtitle" , children:<Text>Lorem Ipsum Dolor Sit Amet</Text>})
  }
  return (
    <View>
      <Text>HomeScreen</Text>
   
      <TouchableOpacity onPress={handleOpen}>
        <Text>Open Drawer</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})