import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {DefaultContext} from '../../../stores/DefaultContext';
import Item from '../molecules/Item';

const ItemList = () => {
  const renderItem = ({item}: any) => <Item element={item}></Item>;
  const {itemList ,getItemList} = useContext(DefaultContext);

  useEffect(() => {
    getItemList();
  }, []);


  return (
    <View style={{marginHorizontal:-6}}>
      <FlatList
        data={itemList}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        style={{padding:6}}
        onEndReached={getItemList}
      />
    </View>
  );
};

export default ItemList;

const styles = StyleSheet.create({});
