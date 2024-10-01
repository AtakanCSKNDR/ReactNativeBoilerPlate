import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

const AccordionPanel = (props: any) => {
  const {title, children} = props;
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <View style={styles.accordion}>
      <TouchableOpacity onPress={handleOpen} style={styles.accordionButton}>
        <Text style={styles.accordionButtonTitle}>{title}</Text>
      </TouchableOpacity>
      {open && <View style={styles.accordionContent}>{children}</View>}
    </View>
  );
};

export default AccordionPanel;

const styles = StyleSheet.create({
  accordion: {
    borderRadius: 6,
    borderWidth: 0.8,
    borderColor: '#f0f0f0',
    backgroundColor:"#FFF",
    elevation:1
  },
  accordionButton: {
    padding: 16,
    borderRadius: 6,
  },
  accordionButtonTitle: {
    color: '#333',
    fontWeight: '500',
    fontSize: 16,
  },
  accordionContent: {
    borderTopWidth:0.8,
    borderTopColor:"#f0f0f0",
    padding: 16,
  },
});
