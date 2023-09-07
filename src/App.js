import React from 'react';
import MyContextProvider from './Components/MyContextProvider';
import MyComponent from './Components/MyComponent';

function App() {
  return (  
    <MyContextProvider>
      <MyComponent />
    </MyContextProvider>
  );
}

export default App;
