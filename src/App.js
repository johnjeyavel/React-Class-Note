
import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api-thirukkural.vercel.app/api?num=1')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>Data Fetching Example</h2>
     {data.map( item => (
      <p key={item.number}>{item.line1}</p>
     ))}
    </div>
  );
}

export default App;