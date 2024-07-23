

// eslint-disable-next-line no-unused-vars
import React from 'react';
import './App.css'
import ThreeFlippingCubes from './components/flipper-cube/ThreeFlippingCubes.jsx'
const App = () => {
  return (
    <div>
      <ThreeFlippingCubes />
      <React.Fragment>
      <div>
        <h2 className='header'>welcome to react page</h2>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>
    </React.Fragment>
    </div>
  );
};

export default App;