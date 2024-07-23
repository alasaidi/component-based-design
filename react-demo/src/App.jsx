

// eslint-disable-next-line no-unused-vars
import React from 'react';
import './App.css'
import ThreeFlippingCubes from './components/flipper-cube/ThreeFlippingCubes.jsx'
import ElementList from './components/element-list/elementlist.jsx';


const App = () => {
  return (
    <div>
              <h2 className='header'>welcome to react page</h2>

      <ThreeFlippingCubes />
      <ElementList />
      
    </div>
  );
};

export default App;