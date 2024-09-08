import React, {createContext, useState} from 'react';

export const defaultCTX: any = {
  itemList: [],
  selectedItem: {},
};

export const DefaultContext = createContext(defaultCTX);

export const DefaultContextProvider = ({children}: any) => {
  const [itemList, setItemList] = useState(defaultCTX.itemList);
  const [selectedItem, setSelectedItem] = useState(defaultCTX.selectedItem);

  return (
    <DefaultContext.Provider
      value={{
        itemList,
        setItemList,
        selectedItem,
        setSelectedItem,
      }}>
      {children}
    </DefaultContext.Provider>
  );
};
