import React, {createContext, useState} from 'react';
import {request} from '../core/interceptors/axios.interceptor';

export const defaultCTX: any = {
  itemList: [],
  selectedItem: {},
};

export const DefaultContext = createContext(defaultCTX);

export const DefaultContextProvider = ({children}: any) => {
  const [itemList, setItemList] = useState(defaultCTX.itemList);
  const [selectedItem, setSelectedItem] = useState(defaultCTX.selectedItem);

  const getItemList = (params:any) => {
    let pagination={
      _start:itemList.length,
      _limit:10
    }
    request({url: '/photos', method: 'GET' , params:pagination}).then(
      response => {
        // console.log([...itemList , ...response])
        setItemList([...itemList , ...response]);
      },
    );
  };
  return (
    <DefaultContext.Provider
      value={{
        itemList,
        setItemList,
        selectedItem,
        setSelectedItem,
        getItemList,
      }}>
      {children}
    </DefaultContext.Provider>
  );
};
