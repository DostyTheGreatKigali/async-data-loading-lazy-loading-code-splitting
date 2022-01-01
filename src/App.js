import React, { useState } from 'react';
import './App.css';
import RiverInformation from './components/RiverInformation/RiverInformation';

function App() {
  const [river, setRiver] = useState('nile');
  return (
    <div className="wrapper">
      <h1>World's Longest Rivers</h1>
      <button onClick={() => setRiver('nile')}>Nile</button>
      <button onClick={() => setRiver('amazon')}>Amazon</button>
      <button onClick={() => setRiver('yangtze')}>Yangtze</button>
      <button onClick={() => setRiver('mississippi')}>Mississippi</button>
      <RiverInformation name={river} />
    </div>
  );
}


export default App;
