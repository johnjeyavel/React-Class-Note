
import React, { useContext } from 'react';
import MyContext from '../Components/MyContext';

const MyComponent = () => {
  const { data, setData } = useContext(MyContext);

  const updateData = () => {
    setData('New data');
  };

  return (
    <div>
      <p>Data from Context: {data}</p>
      <button onClick={updateData}>Update Data</button>
    </div>
  );
};

export default MyComponent;

