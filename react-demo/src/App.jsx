

// eslint-disable-next-line no-unused-vars
import React from 'react';
import './App.css';
import ThreeFlippingCubes from './components/flipper-cube/ThreeFlippingCubes.jsx';
import ElementList from './components/element-list/elementlist.jsx';
import FavoriteList from './components/favorite-list/favoritelist.jsx';
import BadList from "./components/bad-list/badlist.jsx"
import LIST_ITEMS from "./components/data/list-items/listItems.js"

const App = () => {
  return (
    <div>
              <h2 className='header'>welcome to react page</h2>

      <ThreeFlippingCubes />
      <ElementList header='this is the fave list ' itemToList={LIST_ITEMS} stylename="favoriteList"/>
      <div className='listcontainer'>
     <FavoriteList header='this is the fave list ' itemToList={LIST_ITEMS}  />
     <BadList header='this is the bad list '/>
      
      </div>
    </div>
  );
};

export default App;