
import React, { useState } from 'react';
import MyContext from '../Components/MyContext';

const MyContextProvider = ({ children }) => {
  const [data, setData] = useState('Some initial data');

  return (
    <MyContext.Provider value={{ data, setData }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;
