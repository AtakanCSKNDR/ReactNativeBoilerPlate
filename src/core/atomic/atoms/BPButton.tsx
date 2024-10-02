import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const BPButton = (props: any) => {
  const {title, color, textColor, rounded, elevation} = props;
  const properties = {
    title: title || '',
    color: color || '#666',
    textColor: textColor || '#FFF',
    radius: rounded ? 50 : 6,
    elevation: elevation || 1,
  };

  return (
    <TouchableOpacity
      {...props}
      style={[
        styles.button,
        {
          backgroundColor: properties.color,
          borderRadius: properties.radius,
          elevation: properties.elevation,
        },
      ]}>
      <Text
        style={ [styles.buttonText , {
          color: properties.textColor,
        }]}>
        {properties.title}
      </Text>
    </TouchableOpacity>
  );
};

export default BPButton;

const styles = StyleSheet.create({
  button: {
    padding:16,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center"
  },
  buttonText:{
    fontSize:16,
    fontWeight:"500"
  }
});
