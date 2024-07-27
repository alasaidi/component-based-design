// eslint-disable-next-line no-unused-vars
import React from "react";
import "./App.css";
import ThreeFlippingCubes from "./components/flipper-cube/ThreeFlippingCubes.jsx";
import ElementList from "./components/element-list/elementlist.jsx";
// import FavoriteList from './components/favorite-list/favoritelist.jsx';
// import BadList from "./components/bad-list/badlist.jsx"
import LIST_ITEMS from "./components/data/list-items/listItems.js";
import Pokemon from "./components/Pokemon/Pokemon.jsx";
import pokemon_data from "./components/data/pokemon_data/pokemon-data.js";
import Carousels from "./components/carousels/Carousels.jsx";

const App = () => {
  return (
    <div>
      <h2 className="header">welcome to react page</h2>

      <ThreeFlippingCubes />
      <div className="listcontainer">
        <ElementList header="this is the fave list " itemToList={LIST_ITEMS} stylename="favoriteList" />

        <ElementList header="this is the fave list " itemToList={LIST_ITEMS} stylename="badList" />
      </div>
      <div className="pokemonContainer">
        <Pokemon pokemon_data={pokemon_data} stylename="custom-style-1" />
        <Pokemon pokemon_data={pokemon_data} stylename="custom-style-2" />
      </div>
      <Carousels />
    </div>
  );
};

export default App;
